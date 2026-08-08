import { ClipboardList, FileSearch, Gavel, SearchCheck, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ContentCard } from "@/components/site/PageLayout";
import { selectionTimeline } from "@/data/awards";

const stepIcons: LucideIcon[] = [ClipboardList, FileSearch, SearchCheck, Users, Gavel];

export function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Desktop */}
      <div className="hidden lg:grid lg:grid-cols-4 lg:gap-4">
        {selectionTimeline.map((item, i) => {
          const Icon = stepIcons[i] ?? ClipboardList;
          return (
            <div key={item.step} className="relative flex flex-col">
              {i < selectionTimeline.length - 1 && (
                <div
                  className="absolute top-9 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-gold/50 to-gold/20 lg:block"
                  aria-hidden
                />
              )}
              <ContentCard as="article" className="relative flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-semibold text-primary-foreground shadow-[0_0_12px_rgba(245,158,11,0.35)]">
                    {item.step}
                  </span>
                  <span className="fg-icon-badge h-10 w-10 rounded-xl">
                    <Icon className="h-5 w-5 text-gold" />
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold leading-snug text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </ContentCard>
            </div>
          );
        })}
      </div>

      {/* Tablet: 2x2 */}
      <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:hidden">
        {selectionTimeline.map((item, i) => {
          const Icon = stepIcons[i] ?? ClipboardList;
          return (
            <ContentCard key={item.step} as="article" className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-sm font-semibold text-primary-foreground">
                  {item.step}
                </span>
                <Icon className="h-5 w-5 text-gold" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </ContentCard>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="space-y-4 sm:hidden">
        {selectionTimeline.map((item, i) => {
          const Icon = stepIcons[i] ?? ClipboardList;
          return (
            <div key={item.step} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-semibold text-primary-foreground">
                  {item.step}
                </span>
                {i < selectionTimeline.length - 1 && (
                  <div className="my-2 min-h-8 w-px flex-1 bg-gold/30" />
                )}
              </div>
              <ContentCard as="article" className="flex-1 p-5" hover={false}>
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-gold" />
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </ContentCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}
