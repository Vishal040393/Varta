// /pages/api/users.ts
import { getAll } from '@/repositories/thread.repository';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const users = await getAll();
  res.status(200).json(users);
}
