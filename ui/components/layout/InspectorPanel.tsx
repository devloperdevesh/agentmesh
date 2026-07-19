interface Props {
  children?: React.ReactNode;
}

export default function InspectorPanel({ children }: Props) {
  return (
    <aside
      className="
   hidden
   xl:block
   w-[340px]
   border-l
   border-white/10
   bg-zinc-950/80
   backdrop-blur-xl
   p-5
   "
    >
      {children ?? (
        <div
          className="
   text-sm
   text-zinc-500
   "
        >
          Select resource to inspect
        </div>
      )}
    </aside>
  );
}
