interface Props {
  status: "active" | "moving" | "synced" | "empty";
}

export default function MemoryPage({ status }: Props) {
  const styles = {
    active: "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]",

    moving:
      "bg-yellow-400 animate-pulse shadow-[0_0_12px_rgba(250,204,21,0.8)]",

    synced: "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]",

    empty: "bg-zinc-800",
  };

  return (
    <div
      className={`
   h-6
   w-6
   rounded-sm
   transition-all
   duration-500
   ${styles[status]}
   `}
    />
  );
}