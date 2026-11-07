import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#111110] text-[#f4f0e8]">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7">
        <Link href="/" className="flex items-center gap-3">
          <span className="h-7 w-7 rounded-full border-2 border-[#f4f0e8]" />
          <span className="text-xl font-semibold">Circles</span>
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className="text-zinc-400 hover:text-white">
            Home
          </Link>
          <Link
            href="/auth"
            className="rounded-full bg-[#f4f0e8] px-5 py-3 font-medium text-black"
          >
            Join Circles
          </Link>
        </div>
      </nav>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20">
        <p className="mb-8 text-xs uppercase tracking-[0.25em] text-zinc-500">
          A little about us
        </p>

        <h1 className="max-w-4xl text-5xl leading-[1.12] font-medium tracking-[-0.045em] sm:text-7xl">
          Life happens in the little moments.
          <span className="text-[#b7a5d8]">
            {" "}
            We think they deserve a place.
          </span>
        </h1>

        <p className="mt-10 max-w-xl text-lg leading-8 text-zinc-400">
          A random Tuesday lunch. A terrible selfie. A sunset you couldn't stop
          looking at. The things that don't make the highlight reel, but somehow
          mean everything.
        </p>
      </section>

      {/* Image */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="h-[320px] overflow-hidden rounded-2xl sm:h-[480px]">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1800&q=85)",
            }}
          />
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">
        <h2 className="text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
          Social media got bigger.
          <br />
          <span className="text-zinc-500">Maybe it should get smaller.</span>
        </h2>

        <div className="space-y-6 text-base leading-8 text-zinc-400">
          <p>
            Somewhere along the way, sharing became performing. Every post
            needed an audience. Every moment needed to be worth posting.
          </p>

          <p>
            Circles is a little different. It's a space to share photos, keep up
            with people, and enjoy the everyday stuff without all the noise.
          </p>

          <p>
            No pressure to be interesting. No need to make everything perfect.
            Just you, your moments, and your people.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-12 text-xs uppercase tracking-[0.25em] text-zinc-500">
            What we believe
          </p>

          <div className="grid gap-12 sm:grid-cols-3">
            <div>
              <span className="text-3xl text-[#b7a5d8]">01</span>
              <h3 className="mt-5 text-xl font-medium">People over numbers</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-500">
                Your connections matter more than your follower count.
              </p>
            </div>

            <div>
              <span className="text-3xl text-[#b7a5d8]">02</span>
              <h3 className="mt-5 text-xl font-medium">Moments over metrics</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-500">
                A memory doesn't need likes to be worth sharing.
              </p>
            </div>

            <div>
              <span className="text-3xl text-[#b7a5d8]">03</span>
              <h3 className="mt-5 text-xl font-medium">Simple is enough</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-500">
                Less noise. Less clutter. More room for life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="text-4xl font-medium tracking-tight sm:text-6xl">
          Your people are here.
        </h2>

        <p className="mt-6 text-zinc-400">Bring your moments along.</p>

        <Link
          href="/auth"
          className="mt-10 inline-flex rounded-full bg-[#f4f0e8] px-7 py-4 font-semibold text-black transition hover:bg-white"
        >
          Find your circle →
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-8">
        <div className="mx-auto flex max-w-7xl justify-between text-sm text-zinc-500">
          <span>© 2026 Circles</span>
          <Link href="/" className="hover:text-white">
            Back home ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}
