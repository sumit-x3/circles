import { SignJWT, jwtVerify } from "jose";

const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error("JWT_SECRET is not configured");
}

const key = new TextEncoder().encode(secret);

export async function signToken(userId: number) {
  return new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(key);
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, key);

    return payload as { userId: number };
  } catch {
    return null;
  }
}
