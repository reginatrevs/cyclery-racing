export function SectionLabel({
  children,
  color = "text-neon-lime",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span
      className={`font-mono text-[10px] uppercase tracking-[0.3em] ${color}`}
    >
      {children}
    </span>
  );
}
