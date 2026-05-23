import uuid
from typing import List, Tuple
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams, PointStruct
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from .config import MODEL_NAME,SECRET_KEY

def filter_relevant_pages(prompt: str, pages: List[Tuple[str, str, str]], threshold: float = 0.5) -> List[Tuple[str, str, str]]:
    """
    Filters scraped pages using Qdrant vector database and Google Embeddings.
    pages: list of (url, title, text)
    """
    if not pages:
        return []

    print("Initializing Google Embeddings & connecting to Docker Qdrant...")
    embeddings = GoogleGenerativeAIEmbeddings(
        model="models/gemini-embedding-2",
        google_api_key=SECRET_KEY
    )
    
    # Connecting to Docker Qdrant
    client = QdrantClient(url="http://localhost:6333")

    collection_name = f"search_{uuid.uuid4().hex}"
    
    # 1. Create temporary collection
    client.create_collection(
        collection_name=collection_name,
        vectors_config=VectorParams(size=3072, distance=Distance.COSINE),
    )

    try:
        # 2. Embed the prompt
        prompt_vector = embeddings.embed_query(prompt)

        # 3. Embed and insert pages
        points = []
        for i, (url, title, text) in enumerate(pages):
            # We take first 4000 chars for embedding to save time and token limits
            text_chunk = text[:4000]
            vector = embeddings.embed_query(text_chunk)
            points.append(
                PointStruct(
                    id=i,
                    vector=vector,
                    payload={"url": url, "title": title, "text": text}
                )
            )

        if points:
            client.upsert(
                collection_name=collection_name,
                points=points
            )

            # 4. Search
            search_results = client.query_points(
                collection_name=collection_name,
                query=prompt_vector,
                limit=len(pages),
                score_threshold=threshold
            )

            # 5. Extract filtered results
            filtered_pages = []
            print(f"\\n--- QDRANT VALIDATION RESULTS (Threshold > {threshold}) ---")
            for hit in search_results.points:
                print(f" ✅ [PASS] Score: {hit.score:.3f} | {hit.payload.get('url')}")
                filtered_pages.append(
                    (hit.payload["url"], hit.payload["title"], hit.payload["text"])
                )
            
            passed_urls = [hit.payload["url"] for hit in search_results.points]
            for p in pages:
                if p[0] not in passed_urls:
                    print(f" ❌ [FAIL] Irrelevant page dropped: {p[0]}")
            print("------------------------------------------------------\\n")

            return filtered_pages

    except Exception as e:
        print(f"Qdrant validation error: {e}")
        return pages # Fallback: return original pages if validation fails
    finally:
        # Clean up collection
        client.delete_collection(collection_name=collection_name)
        
    return pages




# 1) Why create a temporary collection?
# Because we are using Qdrant merely as a Validation Filter, not as long-term storage. Every time a user makes an API request, they have a completely different startup idea and a different set of URLs. We just need a sandbox to quickly compare these specific pages against this specific prompt.

# If we used a permanent collection, the database would quickly bloat with thousands of random scraped websites. By creating a temporary collection with a unique ID (uuid.uuid4()) and then deleting it at the end of the function (client.delete_collection), we keep the database completely clean and prevent different API requests from accidentally searching each other's data.




#When we say we "convert text into a vector", we are literally just converting it into a long list of numbers.

#Older models (like the embedding-001 we originally tried to use) compress the meaning of the text into a list of 768 numbers.
#The new model (the gemini-embedding-2 that we just switched to) is much more advanced. It compresses the meaning of the text into a list of 3072 numbers! Because it has more numbers (dimensions), it captures much deeper nuance and context.
