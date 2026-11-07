"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser, registerUser } from "@/app/actions/auth";
import { useUserStore } from "@/store/user-store";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  async function handleLogin(formData: FormData) {
    console.log("Form data received:", formData);
    const user = await loginUser(formData);
    setUser(user);
    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">
            {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            {isLogin
              ? "Login to continue"
              : "Create your account to get started"}
          </p>
        </div>

        <form
          action={isLogin ? handleLogin : registerUser}
          className="space-y-5"
        >
          {!isLogin && (
            <>
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Name
                </label>
                <input
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-zinc-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Username
                </label>
                <input
                  name="username"
                  required
                  minLength={3}
                  placeholder="john_doe"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-zinc-400"
                />
              </div>
            </>
          )}

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-zinc-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              minLength={8}
              placeholder="••••••••"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-zinc-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-white py-3 font-semibold text-black transition hover:bg-zinc-200"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-zinc-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="ml-1 font-semibold text-white hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>
    </main>
  );
}
