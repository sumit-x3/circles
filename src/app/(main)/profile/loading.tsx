export default function ProfileLoading() {
  return (
    <main className="min-h-screen bg-[#111110] text-[#f4f0e8]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Profile header */}
        <div className="flex items-center gap-5">
          <div className="h-24 w-24 animate-pulse rounded-full bg-zinc-800" />

          <div className="space-y-3">
            <div className="h-6 w-40 animate-pulse rounded bg-zinc-800" />
            <div className="h-4 w-28 animate-pulse rounded bg-zinc-800" />
            <div className="h-4 w-48 animate-pulse rounded bg-zinc-800" />
          </div>
        </div>

        {/* Profile actions */}
        <div className="mt-8 h-10 w-32 animate-pulse rounded-lg bg-zinc-800" />

        {/* Photos section */}
        <div className="mt-16 space-y-6">
          <div className="h-6 w-36 animate-pulse rounded bg-zinc-800" />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square animate-pulse rounded-xl bg-zinc-900"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
