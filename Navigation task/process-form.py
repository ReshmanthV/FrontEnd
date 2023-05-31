from fastapi import FastAPI
from starlette.exceptions import HTTPException as StarletteHTTPException
from fastapi import Request
from pymongo import MongoClient
import webbrowser

app = FastAPI()


class StopResponseException(Exception):
    pass


# Establish database connection
client = MongoClient("mongodb://intern_23:intern%40123@192.168.0.220:2717/interns_b2_23")
db = client.interns_b2_23
collection = db['Reshmanth']


@app.get("/login-form")
async def login_form(email: str, password: str):
    queries = [
        {"email": email},
        {"password": password}
    ]

    result = list(collection.find({'$and': queries}))
    final_result = None
    for item in result:
        del item["_id"]
        final_result = item

    if final_result:
        webbrowser.open("http://127.0.0.1:5501/main.html", new=0)
        raise StarletteHTTPException(status_code=204)
    else:
        raise StarletteHTTPException(status_code=204)


@app.post("/user-form")
async def process_form(request: Request):
    form_data = await request.form()
    name = form_data.get('name')
    email = form_data.get('email')
    password = form_data.get('password')
    # Insert data into the database
    user = {
        'name': name,
        'email': email,
        'password': password
    }
    collection.insert_one(user)

    raise StarletteHTTPException(status_code=204)


@app.exception_handler(StopResponseException)
async def stop_response_exception_handler():
    return None


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="localhost", port=8000)
