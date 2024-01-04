from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import subprocess


app = FastAPI()


origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload")
async def upload_audio(file: UploadFile = File(...)):
    file_path = f"E:/AI/TestWeb/Gender_Recognition_By_Voice_/back-end/audio/{file.filename}"
    with open(file_path, "wb") as f:
        contents = await file.read()
        f.write(contents)
    return {"filename": file.filename}


@app.get("/runchart")
async def run_chart():
    process = subprocess.Popen(["python", "main.py"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    output = process.communicate()
    return output