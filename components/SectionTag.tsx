interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTag({ children, className = "" }: SectionTagProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-accent border border-brand-accent/30 px-4 py-1.5 rounded-full bg-brand-accent/5 ${className}`}
    >
      {children}
    </span>
  );
}
