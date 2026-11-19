import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
export async function getCurrentUserId() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken");
  const payload = accessToken ? await verifyToken(accessToken.value) : null;

  if (!accessToken) {
    return null;
  }

  // Simulate fetching user data from a database
  return { id: payload?.userId };
}
