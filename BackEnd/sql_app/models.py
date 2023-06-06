from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base

class teacherInfo(Base):
    __tablename__ = "teacherInfos"

    no = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    role = Column(String, index=True)
    phone = Column(Integer, index=True)
    email = Column(String, index=True)
    teacher_id = Column(Integer, index=True)
    is_active = Column(Boolean, default=True)
  

    # owner = relationship("User", back_populates="teacherInfos")