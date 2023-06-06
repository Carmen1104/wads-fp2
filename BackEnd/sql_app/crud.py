from sqlalchemy.orm import Session

from . import models, schemas


def get_teacherInfos(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.teacherInfo).offset(skip).limit(limit).all()


def create_user_teacherInfo(db: Session, teacherInfo: schemas.teacherInfoCreate):
    db_teacherInfo = models.teacherInfo(**teacherInfo.dict())
    db.add(db_teacherInfo)
    db.commit()
    db.refresh(db_teacherInfo)
    return db_teacherInfo