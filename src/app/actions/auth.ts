"use server";

import { db } from "@/prisma/db";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { signToken, verifyToken } from "@/lib/auth";
import { redirect } from "next/navigation";

// Register ----------------------------------------------------
export async function registerUser(formData: FormData) {
  const name = formData.get("name") as string;
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.orm.public.User.create({
    name,
    username,
    email,
    password: hashedPassword,
  });

  redirect("/login");
}

// Login ------------------------------------------------------
export async function loginUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await db.orm.public.User.where({ email }).first();

  if (!user) throw new Error("Invalid credentials");

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) throw new Error("Invalid credentials");

  // Generate JWT
  const token = await signToken(user.id);

  // Store JWT in HttpOnly cookie
  const cookieStore = await cookies();

  cookieStore.set("accessToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  // Return profile only, never JWT
  return {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
  };
}

// Get Current User -------------------------------------------
export async function getCurrentUser() {
  "use cache: private";
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  if (!token) return null;

  const payload = await verifyToken(token);

  if (!payload) return null;

  const user = await db.orm.public.User.where({
    id: payload.userId,
  }).first();
  console.log("fetching current user");
  if (!user) return null;

  return {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
  };
}

// Logout -----------------------------------------------------
export async function logoutUser() {
  const cookieStore = await cookies();

  cookieStore.delete("accessToken");

  redirect("/auth");
}
