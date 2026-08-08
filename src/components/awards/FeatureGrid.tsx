import { invigilFeatures } from "@/data/awards";
import { ContentCard, IconBadge } from "@/components/site/PageLayout";

export function FeatureGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {invigilFeatures.map((f) => (
        <ContentCard key={f.title} className="group" variant="viera">
          <IconBadge icon={f.icon} className={f.color} variant="viera" size="lg" />
          <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
        </ContentCard>
      ))}
    </div>
  );
}
