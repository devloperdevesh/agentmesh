interface ResourceItem {
  name: string;
  value: string;
}

const resources: ResourceItem[] = [
  {
    name: "CPU",
    value: "42%",
  },
  {
    name: "Memory",
    value: "61%",
  },
  {
    name: "Network",
    value: "180 Mbps",
  },
  {
    name: "Goroutines",
    value: "128",
  },
];

export default function SystemResources() {
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
      <div className="mb-5">
        <h2 className="text-sm font-semibold text-white">System Resources</h2>

        <p className="text-xs text-zinc-500">Runtime infrastructure metrics</p>
      </div>

      <div className="space-y-4">
        {resources.map((item) => (
          <div
            key={item.name}
            className="
              flex
              items-center
              justify-between
              "
          >
            <span className="text-sm text-zinc-400">{item.name}</span>

            <span className="text-sm font-medium text-white">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
