





import os, json
from typing import List, Tuple, Dict
from pydantic import BaseModel, Field
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.prompts import ChatPromptTemplate
from .config import MODEL_NAME,SECRET_KEY

# ---- Enhanced strict schema ----
class MarketOut(BaseModel):
    problem: list[str] = []
    target_segments: list[str] = []
    pricing_signals: list[str] = []
    moats: list[str] = []
    risks: list[str] = []

class FinalOut(BaseModel):
    summary: str = Field(..., description="120–180 word executive summary")
    competitors: list[str] = []
    sources: list[str] = []
    market: MarketOut = Field(default_factory=MarketOut)

SINGLE_SHOT_MAX_CHARS = 15000


SINGLE_SHOT_TMPL = """You are a startup analyst conducting a comprehensive analysis. Your task is to systematically extract information for ALL fields below.

ANALYSIS METHODOLOGY:
1. Read the entire content thoroughly
2. For each field below, scan the content systematically looking for relevant information
3. Extract ANY relevant information you find - be inclusive rather than selective
4. Use specific details from the text, not generic statements
5. If truly no information exists for a field after thorough review, only then leave it empty

EXTRACTION FIELDS - Find information for ALL of these:

**PROBLEMS** - Look for:
- Pain points mentioned by users/customers
- Problems the startup claims to solve
- Market inefficiencies or gaps described
- Frustrations with existing solutions
- Challenges in the current market

**TARGET SEGMENTS** - Look for:
- Specific customer types mentioned
- Demographics (age, income, location)
- Industries or sectors served
- Company sizes (SMB, enterprise, etc.)
- User personas or profiles described

**PRICING SIGNALS** - Look for:
- Subscription models, pricing tiers
- Revenue per customer/user
- Freemium vs paid structures
- Cost comparisons with alternatives
- Business model descriptions
- Monetization strategies mentioned

**MOATS** - Look for:
- Unique technology or IP
- Network effects described
- Exclusive partnerships
- First-mover advantages
- Proprietary data or assets
- High switching costs
- Brand strength mentions

**RISKS** - Look for:
- Competition concerns
- Regulatory challenges
- Market timing issues
- Technical challenges
- Scaling difficulties
- Economic sensitivity

**COMPETITORS** - Look for:
- Direct competitors named
- Alternative solutions mentioned
- Companies in similar space
- Market comparisons made

Return JSON with EXACT structure. Populate ALL fields where evidence exists:

{{
  "summary": "120-180 word executive summary of key findings",
  "competitors": ["Exact company names found"],
  "sources": [],
  "market": {{
    "problem": ["Specific problems described in content"],
    "target_segments": ["Specific segments mentioned"],
    "pricing_signals": ["Specific pricing/revenue info found"],
    "moats": ["Specific advantages described"],
    "risks": ["Specific risks or challenges mentioned"]
  }}
}}

CONTENT:
{content}
"""

def summarize_pages(prompt: str, pages: List[Tuple[str, str, str]]) -> Dict:
    """Enhanced summarization with better content structure and LLM config"""
    if not pages:
        raise RuntimeError("No content to analyze.")

    # Structure content more clearly for better extraction
    content_sections = []
    for i, (url, title, text) in enumerate(pages, 1):
        section = f"""
=== SOURCE {i}: {title} ===
URL: {url}
CONTENT:
{text}
        """.strip()
        content_sections.append(section)
    
    combined = "\n\n".join(content_sections)[:SINGLE_SHOT_MAX_CHARS]

    # Optimize LLM settings for consistency
    llm = ChatGoogleGenerativeAI(
        model=MODEL_NAME,
        temperature=0,  # Maximum determinism
        google_api_key=SECRET_KEY,
        response_mime_type="application/json",
        top_p=0.95,  # Slightly reduce randomness
        top_k=40,    # Limit vocabulary considerations
    )

    prompt_msg = ChatPromptTemplate.from_template(SINGLE_SHOT_TMPL).format_messages(
        content=combined
    )

    # Use structured output for consistency
    structured_llm = llm.with_structured_output(FinalOut)
    out: FinalOut = structured_llm.invoke(prompt_msg)

    # Set sources deterministically
    result = out.model_dump()
    result["sources"] = [url for (url, _title, _text) in pages]

    return result