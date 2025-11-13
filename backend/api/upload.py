from fastapi import APIRouter, File, UploadFile
import os
from services.pdf import extract_text_from_pdf
from services.chunk import chunk_text
from services.vector import store_chunk
from services.embed import embed_text

router = APIRouter()

@router.post("/api/upload")
async def upload_file(file: UploadFile = File(...)):
    file_path = f"temp_{file.filename}"
    with open(file_path, "wb") as f:
        f.write(await file.read())

    text = extract_text_from_pdf(file_path)
    chunks = chunk_text(text)

    for i, c in enumerate(chunks):
        chunk_id = f"{file.filename}_chunk_{i}"
        emb = embed_text(c)
        store_chunk(chunk_id, c, emb)


    os.remove(file_path)

    return {"status": "✅ Uploaded", "chunks": len(chunks)}
