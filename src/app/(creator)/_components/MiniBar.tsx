// Tiny bar chart made with divs (no libs)
export function MiniBar({ values }: { values: number[] }) {
  const max = Math.max(...values, 1);
  return (
    <div className="flex items-end gap-0.5 h-10">
      {values.map((v, i) => (
        <div
          key={i}
          className="w-1.5 rounded-t bg-gradient-to-t from-primary/70 to-secondary/70"
          style={{ height: `${(v / max) * 100}%` }}
          aria-hidden
        />
      ))}
    </div>
  );
}
