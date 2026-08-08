import { excellenceAwards } from "@/data/awards";

export function ExcellenceMarquee() {
  const items = [...excellenceAwards, ...excellenceAwards];

  return (
    <div className="overflow-hidden border-y border-border bg-surface py-6">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {items.map((award, i) => (
          <span key={i} className="text-xs tracking-[0.15em] text-muted-foreground">
            · {award}
          </span>
        ))}
      </div>
    </div>
  );
}
