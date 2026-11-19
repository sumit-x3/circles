"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Circles Error:", error);
  }, [error]);

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center overflow-y-auto bg-[#111110] px-5 py-4 text-center text-[#f4f0e8]">
      {/* Message */}
      <div className="w-full max-w-xl">
        <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#b7a5d8] sm:text-xs">
          A little unexpected trouble
        </p>

        <h1 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
          Well, this is
          <br />a little awkward...
        </h1>

        <p className="mx-auto mt-4 max-w-sm text-xs leading-6 text-[#a5a29c] sm:text-sm">
          Something went wrong!
          <br />
          Give me a little time to fix things.
          <br />
          <br />
          Thank you for understanding.
          <br />
          <span className="font-medium text-[#f4f0e8]">Lots of love! ❤️</span>
        </p>
      </div>

      {/* Debugging cat */}
      <div className="relative my-3">
        <div className="absolute -inset-4 rounded-full bg-[#b7a5d8]/5 blur-2xl" />

        <Image
          src="/coding-cat2.png"
          alt="A little cat busy debugging"
          width={220}
          height={165}
          priority
          className="relative mx-auto h-auto w-[160px] object-contain sm:w-[200px] md:w-[220px]"
        />
      </div>

      {/* Retry */}
      <button
        onClick={() => reset()}
        className="rounded-full border border-[#f4f0e8]/20 px-6 py-2.5 text-xs transition-all duration-200 hover:border-[#f4f0e8] hover:bg-[#f4f0e8] hover:text-[#111110] active:scale-95 sm:px-7 sm:text-sm"
      >
        Give it another try →
      </button>

      {/* Footer */}
      <p className="mt-5 text-[10px] text-[#686660] sm:text-xs">
        Made with a little patience & lots of love.
      </p>

      {error.digest && (
        <p className="mt-2 text-[10px] text-[#686660]">
          Error reference: {error.digest}
        </p>
      )}
    </main>
  );
}
