import Link from "next/link";
import { getCurrentUser } from "@/app/actions/auth";
import { redirect } from "next/navigation";
import { getCurrentUserId } from "@/lib/user";
import LogoutButton from "@/components/LogoutButton";

const photos = [
  {
    id: 1,
    image: "photo-1470770841072-f978cf4d019e",
    caption: "Somewhere in the mountains.",
  },
  {
    id: 2,
    image: "photo-1518837695005-2083093ee35b",
    caption: "The sound of silence.",
  },
  {
    id: 3,
    image: "photo-1500530855697-b586d89ba3ee",
    caption: "Chasing new horizons.",
  },
  {
    id: 4,
    image: "photo-1470252649378-9c29740c9fa8",
    caption: "Golden mornings.",
  },
  {
    id: 5,
    image: "photo-1493246507139-91e8fad9978e",
    caption: "A place to breathe.",
  },
  {
    id: 6,
    image: "photo-1501785888041-af3ef285b470",
    caption: "Into the wild.",
  },
];

export default async function ProfilePage() {
  const userId = await getCurrentUserId();
  const user = await getCurrentUser(userId?.id ?? 0);

  if (!user) redirect("/login");

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
      {/* Profile Header */}
      <section className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5 md:gap-8">
          {/* Avatar */}
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#272522] text-3xl text-[#b7a5d8] md:h-28 md:w-28 md:text-4xl">
            {user.name?.charAt(0).toUpperCase() ?? "U"}
          </div>

          {/* User Information */}
          <div className="min-w-0">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#b7a5d8]">
              Your space
            </p>

            <h1 className="truncate text-3xl font-medium tracking-tight md:text-4xl">
              {user.name ?? "User"}
            </h1>

            <p className="mt-2 text-sm text-zinc-500">
              @{user.username ?? "username"}
            </p>

            <p className="mt-4 text-sm text-zinc-400">
              A little corner of the internet, just yours.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/profile/edit"
            className="rounded-full border border-zinc-700 px-5 py-3 text-sm transition hover:border-zinc-400 hover:bg-zinc-900"
          >
            Edit profile
          </Link>

          <LogoutButton />
        </div>
      </section>

      {/* Profile Collection */}
      <section className="mt-20">
        <div className="mb-8 flex items-end justify-between border-b border-zinc-800 pb-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
              Your collection
            </p>

            <h2 className="text-2xl font-medium">Photographs</h2>
          </div>

          <Link
            href="/discover"
            className="text-sm text-[#b7a5d8] transition hover:text-white"
          >
            Explore Discover ↗
          </Link>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="group">
              <div className="overflow-hidden rounded-xl bg-[#1d1c1a]">
                <img
                  src={`https://images.unsplash.com/${photo.image}?auto=format&fit=crop&w=700&q=85`}
                  alt={photo.caption}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <p className="mt-3 text-sm text-zinc-400">{photo.caption}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
