import { Database } from "sqlite";

export class Thread {
    id: number = 0;
    doi: string = '';
    title: string = '';
    date: string = '';

    public static async create(dbInstance: Database): Promise<void> {
        if (!dbInstance) return;

        // Create the users table if it doesn't exist
        await dbInstance.exec(`
            CREATE TABLE IF NOT EXISTS threads (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                doi TEXT NOT NULL,
              title TEXT NOT NULL,
               date TEXT NOT NULL
            );
        `);
    }
}
