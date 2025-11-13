import os
from pinecone import Pinecone
from dotenv import load_dotenv

load_dotenv()

pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))

index_name = os.getenv("PINECONE_INDEX")

if not pc.has_index(index_name):
    print("Creating index:", index_name)
    
    pc.create_index(
        name=index_name,
        dimension=1024,           # llama-text-embed-v2 embedding size
        metric="cosine",
        spec={
            "serverless": {
                "cloud": os.getenv("PINECONE_CLOUD"),
                "region": os.getenv("PINECONE_REGION")
            }
        }
    )

else:
    print("Index already exists:", index_name)
