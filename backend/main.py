from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import csv
import os

app = FastAPI()

# --- CORS Middleware ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

USERS_FILE = os.path.join(os.path.dirname(__file__), "users.csv")

class LoginData(BaseModel):
    username: str
    password: str

def save_user(username: str, password: str):
    file_exists = os.path.isfile(USERS_FILE)
    with open(USERS_FILE, mode="a", newline="") as csvfile:
        fieldnames = ["username", "password"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        if not file_exists:
            writer.writeheader()
        writer.writerow({"username": username, "password": password})

@app.post("/login")
def login(payload: LoginData):
    save_user(payload.username, payload.password)
    return {"message": "Saved successfully","username": payload.username, "password": payload.password}

