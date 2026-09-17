#!/usr/bin/env python3
"""
ScopeAI FastMCP Server

Exposes ScopeAI's startup market validation, competitor research,
and pitch deck generation pipeline as an MCP tool for AI assistants (Claude, Antigravity, Cursor, etc.).
"""

import os
import sys
import builtins
from pathlib import Path

# Silence langchain/urllib warnings
os.environ.setdefault("USER_AGENT", "ScopeAI/1.0")

# In MCP stdio transport, stdout is strictly reserved for JSON-RPC messages.
# Redirect all application print statements to stderr so they don't break JSON-RPC communication.
_orig_print = builtins.print
def _safe_print(*args, **kwargs):
    kwargs.setdefault("file", sys.stderr)
    _orig_print(*args, **kwargs)
builtins.print = _safe_print

# 1. Ensure the scopeAi project root is in sys.path
SERVER_DIR = Path(__file__).resolve().parent
if str(SERVER_DIR) not in sys.path:
    sys.path.insert(0, str(SERVER_DIR))

# 2. Initialize Django settings and environment
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "scopeAi.settings")

import django
django.setup()

# 3. Import Django models, serializers, and pipeline services
from django.conf import settings
from api.models import Job, Source, Result
from api.serializers import JobSerializer
from services.pipeline import run_startup_pipeline
from fastmcp import FastMCP

# 4. Initialize FastMCP Server
mcp = FastMCP(
    name="ScopeAI Startup Analyzer"
)


@mcp.tool()
def analyze_startup_idea(
    prompt: str,
    urls: list[str] | None = None,
    include_pptx: bool = True,
) -> dict:
    """
    Conduct an in-depth market validation, competitor research, and pitch deck generation for a startup idea.

    Args:
        prompt: Description or concept of the startup idea (e.g. 'AI-powered dental clinic scheduling and patient reminder system').
        urls: Optional list of specific reference web URLs to analyze. If omitted, ScopeAI automatically searches the web via Tavily.
        include_pptx: Whether to generate a downloadable PowerPoint pitch deck (.pptx). Default is True.

    Returns:
        Structured market intelligence including executive summary, competitors, problem points,
        target segments, pricing signals, moats, risks, verified sources, and pitch deck path.
    """
    # 1. Create a job record in the database
    job = Job.objects.create(
        prompt=prompt,
        include_pptx=include_pptx,
        status=Job.Status.RUNNING,
        input_urls=urls or None,
    )

    try:
        # 2. Run the research and AI pipeline
        result = run_startup_pipeline(
            prompt=prompt,
            urls=urls,
            include_pptx=include_pptx,
            job_id=str(job.id),
        )

        # 3. Save researched sources
        for src in result.get("sources", []):
            Source.objects.create(
                job=job,
                url=src.get("url"),
                title=src.get("title"),
                snippet=src.get("snippet"),
            )

        # 4. Save analysis results
        pptx_rel = result.get("artifacts", {}).get("pptx_path")
        report_md = result.get("artifacts", {}).get("report_md_path")

        Result.objects.create(
            job=job,
            summary=result.get("summary", ""),
            facts=result.get("facts", []),
            competitors=result.get("competitors", []),
            market=result.get("market", {}),
            report_md_path=report_md,
            pptx_path=pptx_rel,
            model_name=result.get("model", {}).get("name", "gemini-2.5-flash"),
        )

        # 5. Mark job as DONE
        job.status = Job.Status.DONE
        job.save(update_fields=["status", "updated_at"])

        # 6. Format response data
        data = JobSerializer(job).data

        # Add absolute path to generated PPTX for convenience in local AI clients
        if pptx_rel:
            media_root = Path(getattr(settings, "MEDIA_ROOT", SERVER_DIR / "media"))
            abs_deck_path = str((media_root / pptx_rel).resolve())
            data["result"]["pptx_absolute_path"] = abs_deck_path

        return data

    except Exception as e:
        job.status = Job.Status.ERROR
        job.error = str(e)
        job.save(update_fields=["status", "error", "updated_at"])
        return {
            "id": str(job.id),
            "status": "ERROR",
            "error": str(e),
            "prompt": prompt,
        }


if __name__ == "__main__":
    mcp.run(show_banner=False)
