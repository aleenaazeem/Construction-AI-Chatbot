from dotenv import load_dotenv
load_dotenv()

from fastapi import FastAPI
from api.upload import router as upload_router
from api.ask import router as ask_router

app = FastAPI()

@app.get("/")
async def home():
    return {"message": "Backend running ✅"}

app.include_router(upload_router)
app.include_router(ask_router)
