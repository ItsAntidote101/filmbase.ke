interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean; // set true when used inside a dark hero section
}

export default function SectionTag({ children, className = "", dark = false }: SectionTagProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full ${
        dark
          ? "text-white/70 border border-white/20 bg-white/5"
          : "text-brand-ink border border-brand-ink/20 bg-brand-ink/5"
      } ${className}`}
    >
      {children}
    </span>
  );
}
