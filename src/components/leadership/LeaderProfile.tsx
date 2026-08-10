import type { ReactNode } from "react";
import { Linkedin } from "lucide-react";
import type { LeaderHighlight, LeaderSection } from "@/data/leadership";
import type { SocialLink } from "@/data/social";
import { SiteAnchorButton } from "@/components/site/SiteButton";
import { ContentCard, NumberedItem } from "@/components/site/PageLayout";

export type LeaderProfileProps = {
  overline: string;
  name: string;
  role: string;
  organization: string;
  tags?: string;
  tagline?: string;
  credentials?: string[];
  headline: ReactNode;
  paragraphs: string[];
  highlights?: LeaderHighlight[];
  sections?: LeaderSection[];
  quote?: string;
  secondaryQuote?: string;
  footer?: ReactNode;
  socialLinks?: SocialLink[];
  image: string;
  imageAlt: string;
  imageClassName?: string;
  reverse?: boolean;
};

function LeaderSectionBlock({ section }: { section: LeaderSection }) {
  return (
    <article className="border-t border-border/60 pt-12 first:border-t-0 first:pt-0">
      <h3 className="text-2xl font-semibold md:text-3xl">{section.title}</h3>

      {section.paragraphs && section.paragraphs.length > 0 ? (
        <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {section.roles && section.roles.length > 0 ? (
        <dl className="mt-8 divide-y divide-border border-y border-border">
          {section.roles.map((role) => (
            <div key={role.title} className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <dt className="text-xs font-semibold tracking-[0.15em] text-gold uppercase">
                {role.title}
              </dt>
              <dd>
                <p className="font-medium text-foreground">{role.organization}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {role.description}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      ) : null}

      {section.subsections && section.subsections.length > 0 ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {section.subsections.map((sub) => (
            <ContentCard key={sub.title} variant="featured" hover={false}>
              <p className="section-label">{sub.title}</p>
              {sub.tagline ? (
                <p className="mt-2 text-sm font-medium text-gold">{sub.tagline}</p>
              ) : null}
              {sub.paragraphs?.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {sub.bullets && sub.bullets.length > 0 ? (
                <ul className="mt-4 grid gap-2">
                  {sub.bullets.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-viera" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </ContentCard>
          ))}
        </div>
      ) : null}

      {section.mediaOutlets && section.mediaOutlets.length > 0 ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {section.mediaOutlets.map((outlet) => (
            <div
              key={outlet.name}
              className="rounded-xl border border-border/80 bg-background/40 p-5"
            >
              <p className="text-[0.65rem] tracking-[0.2em] text-gold uppercase">
                {outlet.language}
              </p>
              <p className="mt-2 text-lg font-semibold">{outlet.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {outlet.description}
              </p>
            </div>
          ))}
        </div>
      ) : null}

      {section.pillars && section.pillars.length > 0 ? (
        <div className="mt-8 grid gap-0 md:grid-cols-3">
          {section.pillars.map((pillar, pillarIndex) => (
            <NumberedItem
              key={pillar.title}
              index={pillarIndex + 1}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>
      ) : null}

      {section.bulletsIntro ? (
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
          {section.bulletsIntro}
        </p>
      ) : null}

      {section.bullets && section.bullets.length > 0 ? (
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {section.bullets.map((item) => (
            <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

export function LeaderProfile({
  overline,
  name,
  role,
  organization,
  tags,
  tagline,
  credentials,
  headline,
  paragraphs,
  highlights,
  sections,
  quote,
  secondaryQuote,
  footer,
  socialLinks,
  image,
  imageAlt,
  imageClassName = "object-cover object-top",
  reverse = false,
}: LeaderProfileProps) {
  return (
    <section className="border-t border-border">
      <div
        className={`mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:items-start ${
          reverse ? "[&>*:first-child]:lg:order-2 [&>*:last-child]:lg:order-1" : ""
        }`}
      >
        <figure className="overflow-hidden rounded-3xl border border-border/80 bg-background/40 lg:sticky lg:top-24">
          <div className="aspect-[4/5] max-h-[34rem] overflow-hidden bg-gradient-to-b from-accent/40 to-background">
            <img src={image} alt={imageAlt} className={`h-full w-full ${imageClassName}`} />
          </div>
          <figcaption className="space-y-1 border-t border-border px-6 py-5">
            <p className="section-label">{role}</p>
            <p className="text-xl font-bold">{name}</p>
            <p className="text-sm text-muted-foreground">{organization}</p>
            {tags ? (
              <p className="pt-2 text-xs leading-relaxed text-muted-foreground">{tags}</p>
            ) : null}
            {socialLinks && socialLinks.length > 0 ? (
              <div className="flex flex-wrap gap-3 pt-4">
                {socialLinks.map((link) => (
                  <SiteAnchorButton
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="goldOutline"
                    size="sm"
                    className="rounded-full px-4"
                  >
                    <Linkedin aria-hidden />
                    {link.label}
                  </SiteAnchorButton>
                ))}
              </div>
            ) : null}
          </figcaption>
        </figure>

        <div>
          <p className="section-label">{overline}</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">{headline}</h2>
          {tagline ? (
            <p className="mt-4 text-base font-medium text-gold md:text-lg">{tagline}</p>
          ) : null}

          <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          {credentials && credentials.length > 0 ? (
            <ul className="mt-8 space-y-2 border-l-2 border-gold/30 pl-5">
              {credentials.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}

          {highlights && highlights.length > 0 ? (
            <dl className="mt-10 divide-y divide-border border-y border-border">
              {highlights.map((item) => (
                <div key={item.title} className="grid gap-2 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="text-xs font-semibold tracking-[0.15em] text-gold uppercase">
                    {item.title}
                  </dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground">{item.text}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          {quote ? (
            <blockquote className="mt-10 border-l-2 border-gold/50 pl-5 text-base leading-relaxed text-muted-foreground italic md:text-lg">
              &ldquo;{quote}&rdquo;
            </blockquote>
          ) : null}

          {footer ? <div className="mt-8 text-sm text-muted-foreground">{footer}</div> : null}
        </div>
      </div>

      {sections && sections.length > 0 ? (
        <div className="mx-auto max-w-7xl space-y-12 px-6 pb-12 pt-4">
          {sections.map((section) => (
            <LeaderSectionBlock key={section.title} section={section} />
          ))}
        </div>
      ) : null}

      {secondaryQuote ? (
        <div className="mx-auto max-w-7xl px-6 pb-20">
          <blockquote className="fg-card rounded-2xl p-8 text-center md:p-12">
            <div className="fg-card-inner">
              <p className="text-lg leading-relaxed text-foreground italic md:text-xl">
                &ldquo;{secondaryQuote}&rdquo;
              </p>
              <p className="mt-4 text-xs tracking-[0.15em] text-gold uppercase">— {name}</p>
            </div>
          </blockquote>
        </div>
      ) : null}
    </section>
  );
}
