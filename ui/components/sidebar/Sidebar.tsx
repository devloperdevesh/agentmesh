"use client";

import Link from "next/link";
import { navigation } from "@/lib/navigation";

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-zinc-800 bg-zinc-950 text-white">
      <div className="h-16 flex items-center px-6 border-b border-zinc-800">
        <h1 className="text-xl font-bold tracking-tight">FaultPlane</h1>
      </div>

      <nav className="mt-6 space-y-1 px-3">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="
              flex
              items-center
              gap-3
              rounded-lg
              px-4
              py-3
              text-zinc-300
              transition
              hover:bg-zinc-900
              hover:text-white
              "
            >
              <Icon className="h-5 w-5" />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
