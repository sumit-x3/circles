import Link from "next/link";

const posts = [
  {
    id: 1,
    username: "alex.morgan",
    name: "Alex Morgan",
    avatar: "A",
    caption: "Somewhere between the mountains and the clouds. 🌿",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    date: "2 hours ago",
  },
  {
    id: 2,
    username: "sarah.jpg",
    name: "Sarah",
    avatar: "S",
    caption: "Golden hour never disappoints.",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8",
    date: "4 hours ago",
  },
  {
    id: 3,
    username: "james.visuals",
    name: "James Wilson",
    avatar: "J",
    caption: "Finding beauty in the ordinary.",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455",
    date: "Yesterday",
  },
  {
    id: 4,
    username: "emma.travels",
    name: "Emma",
    avatar: "E",
    caption: "A little escape from everything. 🌊",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    date: "Yesterday",
  },
  {
    id: 5,
    username: "noah.frames",
    name: "Noah",
    avatar: "N",
    caption: "The quiet moments are my favourite.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    date: "2 days ago",
  },
  {
    id: 6,
    username: "olivia.jpg",
    name: "Olivia",
    avatar: "O",
    caption: "Nature has its own way of telling stories.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    date: "2 days ago",
  },
  {
    id: 7,
    username: "daniel.capture",
    name: "Daniel",
    avatar: "D",
    caption: "Chasing the last light of the day.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    date: "3 days ago",
  },
  {
    id: 8,
    username: "mia.explores",
    name: "Mia",
    avatar: "M",
    caption: "A different perspective.",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    date: "3 days ago",
  },
];

export default function DiscoverPage() {
  return (
    <div className="mx-auto max-w-[1500px] px-6 py-12 md:px-10 md:py-16">
      {/* Page Heading */}
      <section className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#b7a5d8]">
            Explore the community
          </p>

          <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
            Discover<span className="text-[#b7a5d8]">.</span>
          </h1>

          <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500">
            A little inspiration from everywhere. Explore moments shared by the
            Circles community.
          </p>
        </div>

        <div className="text-sm text-zinc-500">
          <span className="text-[#f4f0e8]">{posts.length}</span> moments shared
        </div>
      </section>

      {/* Feed Heading */}
      <div className="mb-7 flex items-center justify-between border-b border-zinc-800 pb-5">
        <h2 className="text-sm font-medium text-[#f4f0e8]">Latest moments</h2>

        <span className="text-xs text-zinc-500">From the community</span>
      </div>

      {/* Masonry Feed */}
      <section className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
        {posts.map((post) => (
          <article key={post.id} className="mb-8 break-inside-avoid">
            {/* Image */}
            <div className="group relative overflow-hidden rounded-xl bg-[#1d1c1a]">
              <img
                src={`${post.image}?auto=format&fit=crop&w=900&q=85`}
                alt={post.caption}
                loading="lazy"
                className="h-auto w-full transition duration-500 group-hover:scale-[1.025]"
              />
            </div>

            {/* Post Details */}
            <div className="mt-4">
              {/* Creator */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#272522] text-sm font-medium text-[#b7a5d8]">
                  {post.avatar}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-[#f4f0e8]">
                    {post.name}
                  </p>

                  <p className="text-xs text-zinc-500">@{post.username}</p>
                </div>

                <span className="ml-auto shrink-0 text-[11px] text-zinc-600">
                  {post.date}
                </span>
              </div>

              {/* Caption */}
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {post.caption}
              </p>
            </div>
          </article>
        ))}
      </section>

      {/* Footer */}
      <div className="mt-12 border-t border-zinc-800 py-8 text-center">
        <p className="text-sm text-zinc-600">You've reached the end for now.</p>
        <p className="mt-2 text-xs text-zinc-700">
          More moments are waiting to be discovered.
        </p>
      </div>
    </div>
  );
}
