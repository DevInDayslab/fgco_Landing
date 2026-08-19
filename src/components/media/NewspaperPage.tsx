import { CheckCircle, Quote } from "lucide-react";
import { PublicationLogo } from "@/components/brand/PublicationLogo";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  ChecklistGrid,
  ContentCard,
  PageSection,
  ProseBlock,
  SectionTitle,
  SitePageHero,
  TagCloud,
} from "@/components/site/PageLayout";
import {
  HAPPY_INDIA_TIMES_SEO,
  HIT_NEWS_SEO,
  KURUKSHETRA_SEO,
} from "@/data/newspaper-seo";
import type { NewspaperContent, NewspaperTone } from "@/data/newspaper-types";
import { newspaperPageSchema } from "@/data/seo-structured-data";

const seoByPublication = {
  "hit-news": HIT_NEWS_SEO,
  "happy-india-times": HAPPY_INDIA_TIMES_SEO,
  kurukshetra: KURUKSHETRA_SEO,
} as const;

const toneAccent: Record<NewspaperTone, string> = {
  en: "text-en",
  te: "text-te",
  ka: "text-ka",
};

const toneBadge: Record<NewspaperTone, string> = {
  en: "border-en/40 bg-en/10 text-en",
  te: "border-te/40 bg-te/10 text-te",
  ka: "border-ka/40 bg-ka/10 text-ka",
};

export function NewspaperPage({ content }: { content: NewspaperContent }) {
  const accent = toneAccent[content.tone];
  const badge = toneBadge[content.tone];
  const seo = seoByPublication[content.id];

  return (
    <div className="animate-fade-in">
      <JsonLd data={newspaperPageSchema(seo)} />
      <SitePageHero
        align="center"
        size="large"
        className="!min-h-0"
        leading={
          <div className="mb-6 flex flex-col items-center">
            <p className={`mb-6 max-w-3xl text-center text-[0.65rem] font-semibold tracking-[0.18em] uppercase ${accent}`}>
              {content.kicker}
            </p>
            <PublicationLogo id={content.id} size="lg" className="h-16 max-w-[16rem] md:h-20 md:max-w-[20rem]" />
            <p className="mt-4 text-[0.7rem] tracking-[0.22em] text-muted-foreground uppercase">
              {content.masthead}
            </p>
          </div>
        }
        title={
          <>
            {content.title}
            <br />
            <span className={`font-serif text-3xl italic md:text-4xl ${accent}`}>
              {content.native ?? content.tagline}
            </span>
          </>
        }
        subtitle={content.intro}
      >
        <div className="grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {content.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border/70 bg-card/40 px-3 py-4 text-center">
              <p className="text-sm font-semibold text-foreground sm:text-base">{stat.value}</p>
              <p className="mt-1 text-[0.6rem] tracking-[0.16em] text-muted-foreground uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </SitePageHero>

      <PageSection className="pt-0">
        <ProseBlock>
          <Quote className={`mx-auto h-6 w-6 ${accent}`} aria-hidden />
          <p className="mt-4 text-lg italic leading-relaxed text-foreground md:text-xl">{content.quote}</p>
        </ProseBlock>
      </PageSection>

      <PageSection tone="muted">
        <SectionTitle overline={content.about.overline} title={content.about.title} />
        <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {content.about.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {content.about.facts.map((fact) => (
            <div key={fact.label} className="rounded-xl border border-border bg-card/40 px-3 py-4 text-center">
              <p className="text-[0.6rem] tracking-[0.16em] text-muted-foreground uppercase">{fact.label}</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{fact.value}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionTitle
          overline={content.vision.overline}
          title={content.vision.title}
          description={content.vision.intro}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {content.vision.cards.map((card) => (
            <ContentCard key={card.title} className="h-full">
              <h3 className={`text-lg font-semibold ${accent}`}>{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
            </ContentCard>
          ))}
        </div>
      </PageSection>

      <PageSection tone="band">
        <SectionTitle
          overline={content.standard.overline}
          title={content.standard.title}
          description={content.standard.intro}
        />
        <ChecklistGrid items={content.standard.items} icon={CheckCircle} iconClass={accent} columns={2} />
      </PageSection>

      {content.questions && !content.questionsAfterCoverage && (
        <QuestionsBlock content={content} badge={badge} />
      )}

      <PageSection>
        <SectionTitle
          overline={content.coverage.overline}
          title={content.coverage.title}
          description={content.coverage.intro}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.coverage.items.map((item) => (
            <ContentCard key={item.title} className="h-full p-5 md:p-6">
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </ContentCard>
          ))}
        </div>
      </PageSection>

      {content.questions && content.questionsAfterCoverage && (
        <QuestionsBlock content={content} badge={badge} />
      )}

      {!content.peopleAfterEthics && <PeopleBlock content={content} accent={accent} />}

      {content.interviews && (
        <PageSection>
          <SectionTitle
            overline={content.interviews.overline}
            title={content.interviews.title}
            description={content.interviews.intro}
          />
          <ChecklistGrid items={content.interviews.items} icon={CheckCircle} iconClass={accent} />
        </PageSection>
      )}

      <PageSection tone="band">
        <SectionTitle
          overline={content.ethics.overline}
          title={content.ethics.title}
          description={content.ethics.intro}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.ethics.items.map((item) => (
            <ContentCard key={item.title} className="h-full">
              <h3 className={`text-lg font-semibold ${accent}`}>{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </ContentCard>
          ))}
        </div>
        {content.ethics.extra && (
          <div className="mx-auto mt-10 max-w-3xl">
            <ChecklistGrid items={content.ethics.extra} icon={CheckCircle} iconClass={accent} />
          </div>
        )}
      </PageSection>

      {content.peopleAfterEthics && <PeopleBlock content={content} accent={accent} />}

      {content.unity && !content.unityAfterPromise && (
        <PageSection>
          <SectionTitle overline={content.unity.overline} title={content.unity.title} />
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
            {content.unity.text}
          </p>
        </PageSection>
      )}

      {content.readers && (
        <PageSection tone="muted">
          <SectionTitle
            overline={content.readers.overline}
            title={content.readers.title}
            description={content.readers.intro}
          />
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
            {content.readers.items.map((item) => (
              <span key={item} className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
                {item}
              </span>
            ))}
          </div>
        </PageSection>
      )}

      <PageSection>
        <SectionTitle
          overline={content.promise.overline}
          title={content.promise.title}
          description={content.promise.intro}
        />
        <TagCloud tags={[...content.promise.items]} tone="gold" />
        {content.promise.closing && (
          <p className={`mx-auto mt-8 max-w-2xl text-center text-lg italic ${accent}`}>
            {content.promise.closing}
          </p>
        )}
      </PageSection>

      {content.archive && (
        <PageSection tone="muted">
          <SectionTitle
            overline={content.archive.overline}
            title={content.archive.title}
            description={content.archive.intro}
          />
          <ChecklistGrid items={content.archive.items} icon={CheckCircle} iconClass={accent} />
        </PageSection>
      )}

      {content.unity && content.unityAfterPromise && (
        <PageSection>
          <SectionTitle overline={content.unity.overline} title={content.unity.title} />
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
            {content.unity.text}
          </p>
        </PageSection>
      )}

      <PageSection className="pb-28">
        <div className="fg-card fg-card-featured mx-auto max-w-4xl rounded-3xl p-8 text-center md:p-12">
          <div className="fg-card-inner">
            <PublicationLogo id={content.id} size="md" className="mx-auto" />
            <h2 className="mt-6 text-3xl md:text-4xl">{content.close.title}</h2>
            {content.close.subtitle && (
              <p className={`mt-2 text-sm tracking-wide ${accent}`}>{content.close.subtitle}</p>
            )}
            <ul className="mx-auto mt-8 max-w-xl space-y-2 text-sm text-muted-foreground">
              {content.close.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </PageSection>
    </div>
  );
}

function QuestionsBlock({ content, badge }: { content: NewspaperContent; badge: string }) {
  if (!content.questions) return null;
  return (
    <PageSection>
      <SectionTitle
        overline={content.questions.overline}
        title={content.questions.title}
        description={content.questions.intro}
      />
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
        {content.questions.items.map((item) => (
          <span key={item} className={`rounded-full border px-4 py-2 text-sm ${badge}`}>
            {item}
          </span>
        ))}
      </div>
    </PageSection>
  );
}

function PeopleBlock({ content, accent }: { content: NewspaperContent; accent: string }) {
  return (
    <PageSection tone="muted">
      <SectionTitle
        overline={content.people.overline}
        title={content.people.title}
        description={content.people.intro}
      />
      {content.people.quote && (
        <p className={`mx-auto mb-8 max-w-2xl text-center text-lg italic ${accent}`}>
          {content.people.quote}
        </p>
      )}
      <TagCloud tags={[...content.people.tags]} tone="gold" />
    </PageSection>
  );
}
