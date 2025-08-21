from typing import Dict, List, Tuple
from .config import MAX_LINKS, MODEL_NAME
from .search import prepare_urls
from .extract import load_pages
from .summarize import summarize_pages

def run_startup_pipeline(prompt: str, urls: List[str] | None = None) -> Dict:
    """
    Orchestrates: urls -> pages -> LLM analysis
    Returns dict:
      {
        "summary": str,
        "facts": list[str],
        "competitors": list[str],
        "market": dict,
        "sources": [{"url":..., "title":..., "snippet":...}],
        "artifacts": {"report_md_path": None, "pptx_path": None},
        "model": {"name": MODEL_NAME}
      }
    """
    link_list = prepare_urls(urls, prompt)  # uses MAX_LINKS=8 by default
    if not link_list:
        raise RuntimeError("No links found. Provide 'urls' or adjust search.")

    pages: List[Tuple[str, str, str]] = load_pages(link_list)

    analysis = summarize_pages(prompt, pages)

    # Build sources payload
    sources = []
    for u, title, text in pages:
        sources.append({"url": u, "title": title, "snippet": text[:280]})

    return {
        "summary": analysis["summary"],
        "competitors": analysis["competitors"],
        "market": analysis["market"],
        "sources": sources,
        "artifacts": {"report_md_path": None, "pptx_path": None},  # add later
        "model": {"name": MODEL_NAME},
    }
