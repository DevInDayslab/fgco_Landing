import { FeatureGrid } from "@/components/awards/FeatureGrid";
import { INVIGIL_INTRO, invigilPillars } from "@/data/awards";

/** InViGIL Application body — used only on the /technology page */
export function InvigilSection() {
  return (
    <div>
      <div className="max-w-3xl">
        <p className="section-label">Application Description</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {INVIGIL_INTRO}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {invigilPillars.map((pillar) => (
          <span
            key={pillar}
            className="rounded-full border border-gold/25 bg-gold/[0.06] px-4 py-1.5 text-xs font-medium tracking-wide text-gold"
          >
            {pillar}
          </span>
        ))}
      </div>

      <div className="mt-10">
        <FeatureGrid />
      </div>
    </div>
  );
}
