const ITEMS = [
  "Transparent LED Display",
  "Switchable Smart Glass",
  "Kenya's First Specialist",
  "47 Counties",
  "Installed by Our Own Team",
  "Written Warranty",
  "Nairobi Showroom",
  "48hr Quotation",
];

export default function MarqueeTicker() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
