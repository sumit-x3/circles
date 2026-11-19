"use client";

import { logoutUser } from "@/app/actions/auth";
import { useTransition } from "react";

export default function LogoutButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() =>
        startTransition(async () => {
          await logoutUser();
        })
      }
      disabled={isPending}
      className="rounded-full border border-zinc-800 px-5 py-3 text-sm text-zinc-400 transition hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400 disabled:opacity-50"
    >
      {isPending ? "Logging out..." : "Logout ↗"}
    </button>
  );
}
