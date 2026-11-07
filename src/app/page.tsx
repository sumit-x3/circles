import Link from "next/link";

const photos = [
  {
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=900&q=85",
    className: "absolute left-8 top-4 z-10 rotate-[-7deg]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=900&q=85",
    className: "absolute right-0 top-32 rotate-[8deg]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=900&q=85",
    className: "absolute bottom-0 left-28 z-20 rotate-[4deg]",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#111110] text-[#f4f0e8]">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7">
        <Link href="/" className="flex items-center gap-3">
          <span className="h-7 w-7 rounded-full border-2 border-[#f4f0e8]" />
          <span className="text-xl font-semibold tracking-tight">Circles</span>
        </Link>

        <div className="flex items-center gap-8 text-sm">
          <Link
            href="/about"
            className="hidden text-zinc-400 transition hover:text-white sm:block"
          >
            About
          </Link>

          <Link
            href="/login"
            className="text-zinc-300 transition hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/dashboard"
            className="rounded-full bg-[#f4f0e8] px-5 py-3 font-medium text-black transition hover:bg-white"
          >
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="relative z-30">
          <p className="mb-8 text-xs uppercase tracking-[0.25em] text-zinc-500">
            A place for your people
          </p>

          <h1 className="max-w-xl text-5xl leading-[1.08] font-medium tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            A smaller place to share
            <br />
            and stay <span className="text-[#b7a5d8]">close.</span>
          </h1>

          <p className="mt-8 max-w-md text-lg leading-8 text-zinc-400">
            Share moments, start conversations, and keep up with the people who
            matter.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <Link
              href="/auth"
              className="rounded-full bg-[#f4f0e8] px-6 py-4 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              Join Circles <span className="ml-2">→</span>
            </Link>

            <Link
              href="#about"
              className="text-sm text-zinc-400 underline underline-offset-4 transition hover:text-white"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* Photo collage */}
        <div className="relative mx-auto h-[460px] w-full max-w-lg sm:h-[540px]">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`${photo.className} h-[280px] w-[210px] overflow-hidden rounded-xl border-[5px] border-[#f4f0e8] bg-zinc-800 shadow-2xl sm:h-[350px] sm:w-[270px]`}
              style={{
                backgroundImage: `url(${photo.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}

          <div className="absolute right-8 top-16 z-30 text-3xl text-[#b7a5d8]">
            ✳
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-12 border-t border-zinc-800 px-6 py-16 sm:grid-cols-3"
      >
        <div>
          <p className="mb-4 text-2xl">↗</p>
          <h2 className="font-medium">Your people</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-500">
            Connect with a closer, more meaningful circle.
          </p>
        </div>

        <div>
          <p className="mb-4 text-2xl">✳</p>
          <h2 className="font-medium">Real moments</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-500">
            Share updates, photos and thoughts as they happen.
          </p>
        </div>

        <div>
          <p className="mb-4 text-2xl">◌</p>
          <h2 className="font-medium">Your space</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-500">
            A simple space for sharing without the noise.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-8">
        <div className="mx-auto flex max-w-7xl justify-between text-sm text-zinc-500">
          <span>© 2026 Circles</span>
          <span>Made for the moments that matter.</span>
        </div>
      </footer>
    </main>
  );
}
