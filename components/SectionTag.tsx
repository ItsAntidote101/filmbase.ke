interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean; // set true when used inside a dark hero section
}

export default function SectionTag({ children, className = "", dark = false }: SectionTagProps) {
  return (
    <span
      className={`inline-block text-[11px] font-semibold tracking-[0.15em] uppercase px-3.5 py-1 rounded-full ${
        dark
          ? "text-white/70 border border-white/20 bg-white/5"
          : "text-[#054e72] border border-[#054e72] bg-[#e8f4fb]"
      } ${className}`}
    >
      {children}
    </span>
  );
}
