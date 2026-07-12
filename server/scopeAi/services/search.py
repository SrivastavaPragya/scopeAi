from typing import List
import requests
from .config import MAX_LINKS, MODEL_NAME, require_gemini_api_key, require_tavily_api_key
from langchain_google_genai import ChatGoogleGenerativeAI
from pydantic import BaseModel

def _pick_url(item: dict) -> str | None:
    # Tavily returns 'url' directly
    u = item.get("url")
    if u and u.startswith(("http://", "https://")):
        return u
    return None

class SearchQueryOut(BaseModel):
    query: str

def generate_search_query(prompt: str) -> str:
    try:
        llm = ChatGoogleGenerativeAI(
            model=MODEL_NAME,
            temperature=0,
            google_api_key=require_gemini_api_key(),
        )
        structured_llm = llm.with_structured_output(SearchQueryOut)
        system_prompt = f"Convert this startup idea into a short, concise 3-4 word search query to analyze its market, pricing, and competitors. Only output the core query string. Idea: {prompt}"
        res = structured_llm.invoke(system_prompt)
        # Broaden the query to capture moats, pricing, risks, and segments
        return res.query + " startup market analysis pricing competitors"
    except Exception as e:
        print("LLM query gen failed, falling back", e)
        # fallback to taking first few words
        words = prompt.split()[:5]
        return " ".join(words) + " market analysis competitors"

def search_links(prompt: str, limit: int | None = None) -> List[str]:
    """Production-ready search via Tavily API."""
    k = limit or MAX_LINKS
    query = generate_search_query(prompt)
    print(f"Executing Tavily search with optimized query: {query}")
    urls: List[str] = []
    seen = set()

    api_key = require_tavily_api_key()
    try:
        response = requests.post(
            "https://api.tavily.com/search",
            json={
                "api_key": api_key,
                "query": query,
                "search_depth": "basic",
                "include_images": False,
                "include_answer": False,
                "max_results": k
            },
            timeout=15
        )
        response.raise_for_status()
        data = response.json()
        
        for res in data.get("results", []):
            u = _pick_url(res)
            if not u or u in seen:
                continue
            seen.add(u)
            urls.append(u)
            if len(urls) >= k:
                break
                
    except Exception as e:
        print(f"Tavily search failed: {e}")
        

    print("urls are ", urls)
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
