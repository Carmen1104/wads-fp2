from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session


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