"use server";

import { db } from "@/prisma/db";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

//register user ----------------------------------------------------
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
}

//login user ----------------------------------------------------
export async function loginUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await db.orm.public.User.where({ email }).first();

  if (!user) throw new Error("Invalid credentials");

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) throw new Error("Invalid credentials");

  return {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
  };
}
