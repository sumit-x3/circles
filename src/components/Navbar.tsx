"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, UserRound } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    {
      label: "Discover",
      href: "/discover",
      icon: Compass,
    },
    {
      label: "My Profile",
      href: "/profile",
      icon: UserRound,
    },
  ];

  return (
    <nav className="border-b border-zinc-800">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 md:px-10">
        <Link href="/discover" className="flex items-center gap-3">
          <span className="h-7 w-7 rounded-full border-2 border-[#f4f0e8]" />
          <span className="text-xl font-semibold tracking-tight">Circles</span>
        </Link>

        <div className="flex items-center gap-6 sm:gap-8">
          {links.map(({ label, href, icon: Icon }) => {
            const active = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-2 text-sm transition-colors ${
                  active
                    ? "text-[#f4f0e8]"
                    : "text-zinc-500 hover:text-[#f4f0e8]"
                }`}
              >
                <Icon size={16} strokeWidth={1.5} />
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
