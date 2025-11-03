from typing import List, Tuple
from langchain_community.document_loaders import WebBaseLoader
from bs4 import BeautifulSoup
from readability import Document




def _looks_like_html(s: str) -> bool:
    if not s:
        return False
    t = s.lstrip().lower()
    # crude but effective: presence of tags / doctype / html root
    return ("<" in t and ">" in t) and (
        t.startswith("<!doctype") or t.startswith("<html") or "<div" in t or "<p" in t
    )


#iska kaam hai raw HTML ko clean text me convert karna:
def _clean_html_to_text(raw: str) -> str:
    """If raw is already plain text, return it. If HTML, clean via Readability -> BS4."""
    if not raw or not raw.strip():
        return ""
    s = raw.strip()

    # If it doesn't look like HTML, treat it as already-clean text
    if not _looks_like_html(s):
        return s

    # Try Readability (main content)
    try:
        doc = Document(s)
        cleaned = doc.summary(html_partial=True)  # may raise on bad HTML
        soup = BeautifulSoup(cleaned or s, "lxml")
        return soup.get_text("\n", strip=True)
    except Exception:
        # Fallback: basic BS4 text extraction
        try:
            soup = BeautifulSoup(s, "lxml")
            return soup.get_text("\n", strip=True)
        except Exception:
            return ""
    


    #load_pages basically ye kar raha hai:

#function ek-ek url leta hai loop ke andar (for u in urls:)

#us url ka html load karta hai (WebBaseLoader)

#us html ko _clean_html_to_text() ke paas bhejta hai → clean readable text banane ke liye

#title + text + url ko tuple bana ke output list me daal deta hai



def load_pages(urls: List[str]) -> List[Tuple[str, str, str]]:
    """
    Returns: list of (url, title, text)
    Uses WebBaseLoader (requests+bs4) under the hood.
    """
    out: List[Tuple[str, str, str]] = []
    for u in urls:
        try:
            docs = WebBaseLoader(u).load()
            if not docs:
                continue
            d = docs[0]
            html_or_text = d.page_content or ""
            text = _clean_html_to_text(html_or_text)
            title = (d.metadata.get("title")
                     or d.metadata.get("og:title")
                     or d.metadata.get("source")
                     or None)
            if len(text) > 200:
                out.append((u, title, text[:12000]))  # cap per page
        except Exception:
            continue
    return out
