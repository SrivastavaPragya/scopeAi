
import os
from dotenv import load_dotenv

load_dotenv()

# all knobs in one place
MAX_LINKS = 4
CHUNK_SIZE = 2000
#CHUNK_OVERLAP ensures continuity between chunks — context ka bridge banane ke liye.
CHUNK_OVERLAP = 200
MODEL_NAME = "gemini-2.5-flash"
MAP_MAX_CALLS = 6   
SECRET_KEY= os.getenv("SECRET_KEY")
