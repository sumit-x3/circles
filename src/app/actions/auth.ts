"use server";

import { db } from "@/prisma/db";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { signToken } from "@/lib/auth";
import { redirect } from "next/navigation";

type AuthState = {
  message: string;
  user: {
    id: number;
    name: string | null;
    username: string | null;
    email: string;
  } | null;
};

// Register ----------------------------------------------------
export async function registerUser(
  prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const name = formData.get("name") as string;
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Check existing email
  const existingEmail = await db.orm.public.User.where({
    email,
  }).first();

  if (existingEmail) {
    return {
      message: "Email already registered",
      user: null,
    };
  }

  // Check existing username
  const existingUsername = await db.orm.public.User.where({
    username,
  }).first();

  if (existingUsername) {
    return {
      message: "Username already taken",
      user: null,
    };
  }

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
export async function loginUser(
  prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await db.orm.public.User.where({ email }).first();

  if (!user) {
    return {
      message: "Invalid email or password",
      user: null,
    };
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return {
      message: "Invalid email or password",
      user: null,
    };
  }

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

  // Redirect to dashboard

  redirect("/discover");
}

// Get Current User -------------------------------------------
export async function getCurrentUser(userId: number) {
  "use cache";

  const user = await db.orm.public.User.where({
    id: userId,
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

  redirect("/login");
}
