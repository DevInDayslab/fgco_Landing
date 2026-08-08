const badges = [
  "Startup India Recognised",
  "ISO 27001 Certified",
  "Bengaluru · Karnataka",
  "Est. 14 January 2020",
];

export function TrustStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap justify-center gap-3 ${className}`}>
      {badges.map((badge) => (
        <span
          key={badge}
          className="rounded-full border border-gold/25 bg-gold/[0.06] px-4 py-2 text-xs font-medium tracking-wide text-gold/90"
        >
          {badge}
        </span>
      ))}
    </div>
  );
}
