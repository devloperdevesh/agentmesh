"use client";

const kernelEvents = [
  "[OK] eBPF probe attached",
  "[OK] tcp state watcher active",
  "[INFO] socket telemetry collected",
  "[RECOVERY] fallback route activated",
];

export default function KernelLogs() {
  return (
    <div
      className="
      rounded-xl
      border
      border-zinc-800
      bg-black
      p-5
      "
    >
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-white">
          Kernel Runtime Logs
        </h2>

        <p className="text-xs text-zinc-500">Linux transport telemetry</p>
      </div>

      <div
        className="
        space-y-2
        font-mono
        text-xs
        "
      >
        {kernelEvents.map((event, index) => (
          <div
            key={index}
            className="
            rounded-md
            bg-zinc-900
            px-3
            py-2
            text-green-400
            "
          >
            {event}
          </div>
        ))}
      </div>
    </div>
  );
}
