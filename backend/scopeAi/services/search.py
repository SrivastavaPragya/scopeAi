from typing import List
from ddgs import DDGS
from .config import MAX_LINKS

def _pick_url(item: dict) -> str | None:
    # ddgs.text() usually returns dicts with keys: 'href', 'title', 'body'
    for key in ("href", "link", "url"):
        u = item.get(key)
        if u and u.startswith(("http://", "https://")):
            return u
    return None

def search_links(prompt: str, limit: int | None = None) -> List[str]:
    """Free, no-key search via DuckDuckGo (ddgs)."""
    k = limit or MAX_LINKS
    query = f"{prompt} market analysis competitors pricing risks"
    urls: List[str] = []
    seen = set()

    # ddgs context manager
    with DDGS() as ddgs:
        for res in ddgs.text(query, max_results=k):
            u = _pick_url(res)
            if not u or u in seen:
                continue
            seen.add(u)
            urls.append(u)
            if len(urls) >= k:
                break
    return urls

def prepare_urls(user_urls: list[str] | None, prompt: str) -> List[str]:
    """Use user URLs if given, else run search."""
    if user_urls:
        seen, clean = set(), []
        for u in user_urls:
            if u and u not in seen:
                seen.add(u); clean.append(u)
        return clean[:MAX_LINKS]
    return search_links(prompt, MAX_LINKS)
