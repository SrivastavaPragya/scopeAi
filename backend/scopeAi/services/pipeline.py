# services/pipeline.py
from typing import Dict, List, Tuple
from pathlib import Path
from django.conf import settings

from .config import MODEL_NAME
from .search import prepare_urls
from .extract import load_pages
from .summarize import summarize_pages
from .pitch_deck import generate_outline, build_pitch_pptx


def run_startup_pipeline(
    prompt: str,
    urls: List[str] | None = None,
    include_pptx: bool = True,
    job_id: str | None = None,
) -> Dict:
    """
    Main startup analysis pipeline.
    Steps:
      1. Collect URLs (search or provided).
      2. Extract page contents.
      3. Summarize with LLM (summary, competitors, market).
      4. Optionally generate pitch deck (prompt → LLM → PPTX).
    Returns:
      Dict with summary, competitors, market, sources, and artifacts.
    """

    # Step 1: get candidate URLs
    link_list = prepare_urls(urls, prompt)
    if not link_list:
        raise RuntimeError("No links found. Provide 'urls' or adjust search.")

    # Step 2: extract page content
    pages: List[Tuple[str, str, str]] = load_pages(link_list)
    if not pages:
        raise RuntimeError("No page content extracted from links.")

    # Step 3: run LLM summarization
    analysis = summarize_pages(prompt, pages)

    # Step 4: sources meta (for db + response)
    sources_meta = []
    for u, title, text in pages:
        sources_meta.append(
            {"url": u, "title": title, "snippet": (text or "")[:280]}
        )

    # Step 5: build pitch deck (using only user prompt)
    pptx_rel = None
    if include_pptx:
        outline = generate_outline(prompt)  # <- pass prompt directly
        media_root = Path(getattr(settings, "MEDIA_ROOT", "media"))
        media_root.mkdir(parents=True, exist_ok=True)
        deck_id = job_id or "deck"
        pptx_rel = build_pitch_pptx(deck_id, outline, media_root)

    # Step 6: return pipeline result
    return {
        "summary": analysis.get("summary", ""),
        "competitors": analysis.get("competitors", []),
        "market": analysis.get("market", {}),
        "sources": sources_meta,
        "artifacts": {
            "report_md_path": None,
            "pptx_path": pptx_rel,   # relative path to saved pptx
        },
        "model": {"name": MODEL_NAME},
    }
