export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <nav className="border-b border-zinc-800 px-6 py-4">
        <h1 className="text-xl font-bold">PicShare 📸</h1>
      </nav>

      <div className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-3xl font-bold">Welcome to Dashboard 👋</h2>
        <p className="mt-2 text-zinc-400">Share your moments with the world.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-lg font-semibold">My Posts</h3>
            <p className="mt-2 text-sm text-zinc-400">
              View your uploaded pictures.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-lg font-semibold">Upload Photo</h3>
            <p className="mt-2 text-sm text-zinc-400">Share a new moment.</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-lg font-semibold">Explore</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Discover posts from others.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
