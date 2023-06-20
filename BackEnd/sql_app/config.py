from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
from sqlmodel import SQLModel

DB_CONFIG = 

class AsyncDatabaseSession:

    def __init__(self):
        self.session = None
        self.engine = None

    def __getattr__(self, name):
        return getattr(self.session, name)
    
    def init(self):
        self.engine = create_async_engine(DB_CONFIG)
        self.session = sessionmaker(self.engine, expire_on_commit = False, class_ = AsyncSession)

    async def craete_all(self):
        async with self.engine.begin() as conn:
            await conn.run_sync(SQModel.metadata.create.all)

db = AsyncDatabaseSession()

async def commit_rollback():
    try:
        await db.commit()
    except Exception:
        await db.commit()
        raise