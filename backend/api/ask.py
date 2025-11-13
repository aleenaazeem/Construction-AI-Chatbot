from fastapi import APIRouter
from pydantic import BaseModel
from services.vector import query_similar_chunks
from services.embed import embed_text
from services.gemini_chat import generate_answer

router = APIRouter(prefix="/api")


class AskRequest(BaseModel):
    question: str


@router.post("/ask")
async def ask_question(data: AskRequest):
    query_emb = embed_text(data.question)

    context_chunks = query_similar_chunks(query_emb)
    context = "\n\n".join(context_chunks)

    answer = generate_answer(data.question, context)
    return {"answer": answer}
