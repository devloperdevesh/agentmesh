"use client";

import MemoryPage from "./MemoryPage";
import SwapAnimation from "./SwapAnimation";

const pages = [
  "active",
  "active",
  "moving",
  "moving",
  "synced",
  "synced",
  "active",
  "moving",
  "synced",
] as const;

export default function MemoryGrid() {
  return (
    <section
      className="
rounded-xl
border
border-zinc-800
bg-zinc-950
p-6
"
    >
      <div className="mb-6">
        <h2
          className="
text-sm
font-semibold
text-white
"
        >
          Runtime Memory Hot Swap
        </h2>

        <p
          className="
text-xs
text-zinc-500
mt-1
"
        >
          Page level state migration visualization
        </p>
      </div>

      <div
        className="
relative
grid
grid-cols-3
gap-3
"
      >
        {pages.map((page, index) => (
          <MemoryPage key={index} status={page} />
        ))}

        <SwapAnimation />
      </div>

      <div
        className="
mt-8
grid
grid-cols-3
gap-4
"
      >
        <Stat title="Memory" value="1.8GB" />

        <Stat title="Migration" value="14.2ms" />

        <Stat title="State" value="HOT SWAPPED" />
      </div>
    </section>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div
      className="
rounded-lg
bg-zinc-900
p-4
"
    >
      <p
        className="
text-xs
text-zinc-500
"
      >
        {title}
      </p>

      <p
        className="
mt-2
font-mono
text-sm
text-white
"
      >
        {value}
      </p>
    </div>
  );
}
