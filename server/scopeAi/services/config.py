import os
from pathlib import Path

from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / ".env")

MAX_LINKS = 4
CHUNK_SIZE = 2000
CHUNK_OVERLAP = 200
MODEL_NAME = "gemini-2.5-flash"
MAP_MAX_CALLS = 6

# SECRET_KEY is retained temporarily for existing local .env files.
GEMINI_API_KEY = (
    os.getenv("GEMINI_API_KEY")
    or os.getenv("GOOGLE_API_KEY")
    or os.getenv("SECRET_KEY")
)


def require_gemini_api_key() -> str:
    if not GEMINI_API_KEY:
        raise RuntimeError("GEMINI_API_KEY is not set. Add it to server/scopeAi/.env.")
    return GEMINI_API_KEY
