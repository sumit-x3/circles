import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#111110] text-[#f4f0e8]">
      {/* Navigation */}
      <nav className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-5">
          <Link href="/" className="flex items-center gap-3">
            <span className="h-7 w-7 rounded-full border-2 border-[#f4f0e8]" />
            <span className="text-xl font-semibold tracking-tight">
              Circles
            </span>
          </Link>

          <div className="flex items-center gap-8 text-sm">
            <Link href="/dashboard" className="text-white">
              Discover
            </Link>

            <Link
              href="/dashboard/following"
              className="text-zinc-500 transition hover:text-white"
            >
              Following
            </Link>

            <Link
              href="/profile"
              className="text-zinc-500 transition hover:text-white"
            >
              Profile
            </Link>
          </div>

          <Link
            href="/dashboard/upload"
            className="rounded-full bg-[#f4f0e8] px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white"
          >
            + Capture a moment
          </Link>
        </div>
      </nav>

      <div className="mx-auto max-w-[1600px] px-8 py-14">
        {/* Welcome */}
        <section className="flex flex-col justify-between gap-8 border-b border-zinc-800 pb-12 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#b7a5d8]">
              A little inspiration
            </p>

            <h1 className="max-w-3xl text-5xl font-medium leading-[1.1] tracking-tight md:text-7xl">
              The world looks
              <br />
              different through
              <span className="font-serif italic text-[#b7a5d8]">
                {" "}
                your eyes.
              </span>
            </h1>
          </div>

          <p className="max-w-xs text-sm leading-7 text-zinc-500">
            A place for the moments you notice, the places you wander, and the
            people who see things differently.
          </p>
        </section>

        {/* Discovery */}
        <section className="mt-12">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-zinc-600">
                The community
              </p>
              <h2 className="text-2xl font-medium">Around you</h2>
            </div>

            <span className="text-sm text-zinc-600">
              Discover something beautiful
            </span>
          </div>

          {/* Empty feed */}
          <div className="relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden border border-zinc-800 text-center">
            <div className="absolute left-10 top-10 h-32 w-32 rounded-full border border-zinc-800" />
            <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full border border-zinc-800" />

            <div className="relative">
              <span className="text-5xl text-[#b7a5d8]">✳</span>

              <h3 className="mt-7 text-2xl font-medium">
                A world waiting to be seen.
              </h3>

              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-zinc-500">
                The community is just getting started. Be the person who puts
                the first photograph out there.
              </p>

              <Link
                href="/dashboard/upload"
                className="mt-8 inline-flex rounded-full border border-zinc-700 px-6 py-3 text-sm transition hover:border-[#b7a5d8] hover:text-[#b7a5d8]"
              >
                Share your first moment ↗
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom inspiration */}
        <section className="mt-20 flex flex-col justify-between gap-6 border-t border-zinc-800 pt-8 md:flex-row">
          <p className="text-sm text-zinc-600">
            Not everything needs a filter. Just a perspective.
          </p>

          <Link
            href="/about"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            A little about Circles ↗
          </Link>
        </section>
      </div>
    </main>
  );
}
