from typing import Union

from pydantic import BaseModel


class teacherInfoBase(BaseModel):
    name: str
    role: Union[str, None] = None
    phone : Union[int, None] = None
    email : Union[str, None] = None
    teacher_id : Union[int, None] = None

class teacherInfoCreate(teacherInfoBase):
    pass

class teacherInfo(teacherInfoBase):
    no: int

    class Config:
        orm_mode = True