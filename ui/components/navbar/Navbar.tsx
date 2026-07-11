"use client";

import { Bell, Cpu, Globe, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header
      className="
      flex
      h-16
      items-center
      justify-between
      border-b
      border-zinc-800
      bg-zinc-950
      px-8
      text-white
      "
    >
      <div className="flex items-center gap-4">
        <Search className="h-5 w-5 text-zinc-400" />

        <input
          placeholder="Search anything..."
          className="
          bg-transparent
          outline-none
          text-sm
          "
        />
      </div>

      <div className="flex items-center gap-6">
        <Globe className="h-5 w-5" />

        <Cpu className="h-5 w-5" />

        <Bell className="h-5 w-5" />
      </div>
    </header>
  );
}
