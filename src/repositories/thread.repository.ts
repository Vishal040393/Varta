// /repository/userRepository.ts
import { getDbInstance } from '@/infra/db';
import { Thread } from '@/infra/models/thread.model';
import { Database } from 'sqlite';

export async function getAll(): Promise<Thread[]> {
  const db: Database = await getDbInstance();
  var data = db.all('SELECT * FROM threads');
  await db.close();
  return data;
}
