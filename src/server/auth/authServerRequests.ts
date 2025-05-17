import { createClerkClient } from "@clerk/nextjs/server";
import { env } from "~/env";
import type { User } from "~/types/User.type";

const clerkClient = createClerkClient({
  secretKey: env.CLERK_SECRET_KEY,
});

export async function getUserList(): Promise<User[]> {
  const users = await clerkClient.users.getUserList();
  return users.data.map((user) => ({
    id: user.id,
    email: user.emailAddresses[0]?.emailAddress ?? "",
    firstName: user.firstName ?? "",
    lastName: user.lastName ?? "",
  }));
}

export async function getUserById(id: string): Promise<User | null> {
  try {
    const user = await clerkClient.users.getUser(id);
    return {
      id: user.id,
      email: user.emailAddresses[0]?.emailAddress ?? "",
      firstName: user.firstName ?? "",
      lastName: user.lastName ?? "",
    };
  } catch (_error) {
    return null;
  }
}
