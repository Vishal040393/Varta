// /utils/dbSingleton.ts
import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import { Thread } from './models/thread.model';

let dbInstance: Database | null = null;

export async function getDbInstance(): Promise<Database> {
  if (!dbInstance) {
    dbInstance = await open({
      filename: './varta.db',
      driver: sqlite3.Database
    });

    // Create tables for the models
    await Thread.create(dbInstance);
  }

  return dbInstance;
}
