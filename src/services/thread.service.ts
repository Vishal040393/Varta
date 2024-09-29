import { Thread } from "@/infra/models/thread.model";
import { getAll } from "@/repositories/thread.repository";

// /services/userService.ts
export async function getAllThreads(): Promise<Thread[]> {
  // Business logic, e.g., filtering or sorting
  return getAll();
}
