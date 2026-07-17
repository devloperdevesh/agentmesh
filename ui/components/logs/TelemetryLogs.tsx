"use client";

const logs = [
  {
    type: "INFO",
    message: "Gateway heartbeat received",
    time: "10:02:12",
  },
  {
    type: "CHECKPOINT",
    message: "Checkpoint cp-1024 created successfully",
    time: "10:02:18",
  },
  {
    type: "RECOVERY",
    message: "Worker state restored from checkpoint",
    time: "10:02:24",
  },
  {
    type: "WARN",
    message: "Worker latency threshold exceeded",
    time: "10:02:30",
  },
];

const badgeStyles = {
  INFO: "text-blue-400 bg-blue-400/10",
  CHECKPOINT: "text-purple-400 bg-purple-400/10",
  RECOVERY: "text-emerald-400 bg-emerald-400/10",
  WARN: "text-yellow-400 bg-yellow-400/10",
};

export default function TelemetryLogs() {
  return (
    <div
      className="
      rounded-xl
      border
      border-zinc-800
      bg-zinc-950
      p-5
      "
    >
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-white">Telemetry Logs</h2>

        <p className="text-xs text-zinc-500">Runtime event stream</p>
      </div>

      <div className="space-y-3">
        {logs.map((log, index) => (
          <div
            key={index}
            className="
            flex
            items-center
            gap-3
            rounded-lg
            border
            border-zinc-800
            bg-zinc-900
            p-3
            "
          >
            <span
              className={`
              rounded-md
              px-2
              py-1
              text-xs
              font-medium
              ${badgeStyles[log.type as keyof typeof badgeStyles]}
              `}
            >
              {log.type}
            </span>

            <p className="flex-1 text-sm text-zinc-300">{log.message}</p>

            <span className="text-xs text-zinc-500">{log.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
