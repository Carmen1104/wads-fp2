from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
import fastapi.security as _security

import sqlalchemy.orm as _orm

import services as _services, schemas as _schemas

from . import crud, models, schemas

from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/teacherInfo/createTeacherInfos/", response_model=schemas.teacherInfo)
def create_teacherInfo_for_user(
    teacherInfo: schemas.teacherInfoCreate, db: Session = Depends(get_db)
):
    return crud.create_user_teacherInfo(db=db, teacherInfo=teacherInfo)


@app.get("/teacherInfos/", response_model=list[schemas.teacherInfo])
def read_teacherInfos(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    teacherInfos = crud.get_teacherInfos(db, skip=skip, limit=limit)
    return teacherInfos


@app.post("/api/users")
async def create_user(
        user: _schemas.UserCreate, db: _orm.Session = FastAPI.Depends(_services.get_db)
):
    db_user = await _services.get_user_by_email(user.email, db)
    if db_user:
        raise FastAPI.HTTPException(status_code=400, detail="Email already in use")

    user = await _services.create_user(user, db)

    return await _services.create_token(user)


@app.post("/api/token")
async def generate_token(
        form_data: _security.OAuth2PasswordRequestForm = FastAPI.Depends(),
        db: _orm.Session = FastAPI.Depends(_services.get_db),
):
    user = await _services.authenticate_user(form_data.username, form_data.password, db)

    if not user:
        raise FastAPI.HTTPException(status_code=401, detail="Invalid Credentials")

    return await _services.create_token(user)


@app.get("/api/users/myprofile", response_model=_schemas.User)
async def get_user(user: _schemas.User = FastAPI.Depends(_services.get_current_user)):
    return user