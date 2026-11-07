import Link from "next/link";
import { getCurrentUser } from "@/app/actions/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const user = await getCurrentUser();

  if (!user) redirect("/login");

  return (
    <main className="min-h-screen bg-[#111110] text-[#f4f0e8]">
      {/* Navigation */}
      <nav className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-10 py-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="h-7 w-7 rounded-full border-2 border-[#f4f0e8]" />
            <span className="text-xl font-semibold tracking-tight">
              Circles
            </span>
          </Link>

          <div className="flex items-center gap-8 text-sm">
            <Link
              href="/dashboard"
              className="text-zinc-400 transition hover:text-white"
            >
              Dashboard
            </Link>

            <Link href="/profile" className="text-white">
              My profile
            </Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1500px] px-10 py-16">
        {/* Profile header */}
        <section className="flex items-start justify-between gap-10">
          <div className="flex items-start gap-8">
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-[#272522] text-4xl text-[#b7a5d8]">
              {user.name?.charAt(0).toUpperCase() ?? "U"}
            </div>

            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                Your space
              </p>

              <h1 className="text-4xl font-medium tracking-tight">
                {user.name}
              </h1>

              <p className="mt-2 text-zinc-500">@{user.username}</p>

              <p className="mt-5 text-sm text-zinc-400">
                A little corner of the internet, just yours.
              </p>
            </div>
          </div>

          <Link
            href="/profile/edit"
            className="rounded-full border border-zinc-700 px-5 py-3 text-sm transition hover:border-zinc-400 hover:bg-zinc-900"
          >
            Edit profile ↗
          </Link>
        </section>

        {/* Empty collection */}
        <section className="mt-24">
          <div className="mb-8 flex items-end justify-between border-b border-zinc-800 pb-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                Your collection
              </p>

              <h2 className="text-2xl font-medium">Photographs</h2>
            </div>

            <Link
              href="/dashboard"
              className="text-sm text-[#b7a5d8] transition hover:text-white"
            >
              Share something new ↗
            </Link>
          </div>

          <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
            <span className="text-4xl text-zinc-700">◌</span>

            <h3 className="mt-6 text-xl font-medium">Nothing here. Yet.</h3>

            <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500">
              Your photographs will find a home here. Share your first moment
              whenever you're ready.
            </p>

            <Link
              href="/dashboard"
              className="mt-7 rounded-full bg-[#f4f0e8] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
            >
              Share your first photo →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
