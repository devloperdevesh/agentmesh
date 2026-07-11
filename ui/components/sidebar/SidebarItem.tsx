"use client";

import Link from "next/link";
import clsx from "clsx";
import type { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  title: string;
  href: string;
  icon: LucideIcon;
  active?: boolean;
  badge?: string;
}

export default function SidebarItem({
  title,
  href,
  icon: Icon,
  active = false,
  badge,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "group flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200",
        active
          ? "bg-blue-500/10 text-white border border-blue-500/30"
          : "text-zinc-400 hover:bg-zinc-900 hover:text-white",
      )}
    >
      <div className="flex items-center gap-3">
        <Icon
          className={clsx(
            "h-5 w-5 transition-colors",
            active
              ? "text-blue-400"
              : "text-zinc-500 group-hover:text-blue-400",
          )}
        />

        <span className="text-sm font-medium">{title}</span>
      </div>

      {badge && (
        <span className="rounded-md bg-zinc-800 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-300">
          {badge}
        </span>
      )}
    </Link>
  );
}
