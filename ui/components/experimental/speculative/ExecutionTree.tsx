"use client";

import PredictionNode from "./PredictionNode";
import ExecutionPath from "./ExecutionPath";

export default function ExecutionTree() {
  return (
    <div
      className="
rounded-2xl
border
border-white/10
bg-zinc-950
p-6
space-y-4
"
    >
      <h2
        className="
text-sm
font-semibold
text-white
"
      >
        Execution Prediction
      </h2>

      <div className="text-center text-xs text-zinc-500">Step 04</div>

      <ExecutionPath />

      <div
        className="
grid
gap-4
md:grid-cols-2
"
      >
        <PredictionNode title="Database Query" probability="80" selected />

        <PredictionNode title="Cache Lookup" probability="20" />
      </div>

      <div
        className="
rounded-xl
bg-emerald-500/10
border
border-emerald-500/30
p-4
text-sm
text-emerald-400
"
      >
        Selected: Database Query
      </div>
    </div>
  );
}
