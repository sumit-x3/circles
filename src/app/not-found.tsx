import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#111110] px-6 text-center text-[#f4f0e8]">
      <span className="mb-10 font-serif text-3xl tracking-tight">Circles</span>

      <div className="mb-8 w-full max-w-xl">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#b7a5d8]">
          A little patience, please
        </p>

        <h1 className="font-serif text-4xl leading-tight sm:text-6xl">
          This little corner
          <br />
          is still growing.
        </h1>

        <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-[#a5a29c]">
          We're still building this part of Circles. Something lovely is on its
          way.
        </p>
      </div>

      {/* Cute construction illustration */}
      <div className="relative mb-10">
        <div className="absolute -inset-8 rounded-full bg-[#b7a5d8]/5 blur-3xl" />
        <div className="relative text-8xl sm:text-9xl">🐈</div>
        <div className="absolute -right-8 bottom-0 rotate-12 text-4xl">🦺</div>
        <div className="absolute -left-8 bottom-0 -rotate-12 text-4xl">🚧</div>
      </div>

      <Link
        href="/"
        className="rounded-full border border-[#f4f0e8]/20 px-7 py-3 text-sm transition-colors hover:border-[#f4f0e8] hover:bg-[#f4f0e8] hover:text-[#111110]"
      >
        ← Back to home
      </Link>

      <p className="mt-12 text-xs text-[#686660]">
        Made with a little patience & lots of love.
      </p>
    </main>
  );
}
