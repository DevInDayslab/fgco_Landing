import { createFileRoute } from "@tanstack/react-router";
import { Eye, Heart, Target } from "lucide-react";
import { PageSection, SitePageHero } from "@/components/site/PageLayout";
import { FgLogo } from "@/components/brand/FgLogo";
import founderPhoto from "@/assets/ramesh.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About FG Media Group — Our Story & Founder" },
      {
        name: "description",
        content:
          "The story of FG Media Group, founded in Bengaluru on 14 January 2020 by Mr. Ramesh Babu Pasupuleti — media house and technology innovator.",
      },
      { property: "og:title", content: "About FG Media Group" },
    ],
  }),
  component: About,
});

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To provide the safest, most user-friendly, and productive information technology solutions that are creative and meaningful.",
    color: "text-gold",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be a proactive, sustainable, and long-lasting leader in media and technology — delivering content and solutions that matter globally.",
    color: "text-viera",
  },
  {
    icon: Heart,
    title: "Our Values",
    text: "Truth, excellence, innovation, and community. We believe in journalism and technology that uplifts, empowers, and connects people across India and the world.",
    color: "text-en",
  },
];

const timeline = [
  {
    tag: "Foundation",
    date: "14 Jan 2020",
    title: "FG Media Group Established",
    text: "Incorporated in Bengaluru as FG Media and Safety Technologies Pvt Ltd — supported by Startup India and Government of Karnataka.",
  },
  {
    tag: "Media",
    date: "2020–21",
    title: "Three Publications Launched",
    text: "HIT News (English), Happy India Times (Telugu), Kurukshetra (Kannada) launched as nationally respected news weeklies.",
  },
  {
    tag: "Technology",
    date: "2021",
    title: "ViERA & InViGIL Born",
    text: "Development of the world's first virtual commerce platform powered by ViERA (Virtual Intelligence Enabled Real Actor), unveiled by Hon'ble Vice President of India.",
  },
  {
    tag: "Expansion",
    date: "Present",
    title: "InViGIL & Global Expansion",
    text: "InViGIL expanding to 195+ countries across Android, iOS, and Web — with Automobile Wing, Supply Chain, and Cyber Commandos operations.",
  },
];

function About() {
  return (
    <div className="animate-fade-in">
      <SitePageHero
        overline="Our Story"
        leading={<FgLogo size="lg" showTagline align="center" className="mb-2" />}
        title="About Us"
        subtitle="Recognising Excellence. Creating Legends. Inspiring India."
      />

      <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl border border-border fg-card">
          <div className="fg-card-inner">
            <div className="relative h-96 overflow-hidden bg-gradient-to-b from-accent/50 to-background">
              <img
                src={founderPhoto}
                alt="Mr. Ramesh Babu Pasupuleti — Founder, Editor-in-Chief & CEO of FG Media Group"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            </div>
            <div className="border-t border-border p-8">
              <p className="section-label">Founder, Editor-in-Chief & CEO</p>
              <p className="mt-3 text-2xl font-bold">Mr. Ramesh Babu Pasupuleti</p>
              <p className="mt-2 text-sm text-muted-foreground">Mobile: +91 73820 98888</p>
            </div>
          </div>
        </div>

        <div>
          <p className="section-label">The Founder</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
            A Vision at the <span className="block italic fg-text-gradient-gold">Intersection of Two Worlds</span>
          </h2>
          <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
            <p>
              Mr. Ramesh Babu Pasupuleti is a seasoned professional with a strong background in both
              Media and Information Technology. His rare dual expertise gave him a unique
              perspective — seeing the convergence of journalism and technology before it became
              inevitable.
            </p>
            <p>
              He founded FG Media Group on 14th January 2020 at Bengaluru with a clear mission: to
              provide the safest, most user-friendly, and productive information technology
              solutions that are both creative and meaningful.
            </p>
            <p>
              Under his leadership, the company has grown into a respected multilingual media house
              with three national publications and a technology innovator — pioneering the world's
              first Virtual Commerce Platform through InViGIL, powered by ViERA.
            </p>
          </div>
          <div className="mt-8 fg-card rounded-2xl p-6">
            <div className="fg-card-inner">
            <p className="section-label">Corporate Office</p>
            <p className="mt-3 text-sm text-muted-foreground">
              #107, 2nd Main, MLA Layout, RT Nagar, Bengaluru City, Karnataka State — 560032
            </p>
            </div>
          </div>
        </div>
      </section>

      <PageSection border className="bg-surface/30">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="fg-vision-block">
            <h2 className="text-2xl md:text-3xl">Our Vision</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              To create a globally recognized ecosystem of positivity, competitiveness, and excellence
              that inspires future generations. We are committed to identifying India&apos;s finest
              achievers, celebrating their accomplishments, and inspiring a new generation of visionary
              leaders who will represent India with distinction on the global stage.
            </p>
          </div>
          <div className="fg-mission-block">
            <h2 className="text-2xl md:text-3xl">Our Mission</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              To provoke and encourage the best in society by recognizing extraordinary individuals
              who drive human progress across Science, Technology, Agriculture, Innovations, Arts,
              Sports, and Social Work.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection border className="bg-surface/40">
        <h2 className="text-center text-4xl md:text-5xl">
          What We <span className="italic fg-text-gradient-gold">Stand For</span>
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="fg-card fg-card-interactive rounded-2xl p-8">
              <div className="fg-card-inner">
              <span className="fg-icon-badge h-12 w-12 rounded-xl">
                <p.icon className={`h-5 w-5 ${p.color}`} />
              </span>
              <h3 className="mt-6 text-2xl">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <p className="section-label">Our Journey</p>
        <h2 className="mt-4 text-4xl md:text-5xl">Building Something Lasting</h2>

        <ol className="mt-14 space-y-10 border-l border-border pl-8">
          {timeline.map((t) => (
            <li key={t.title} className="relative">
              <span className="absolute -left-[2.6rem] flex h-6 w-6 items-center justify-center rounded-full border border-gold/40 bg-background">
                <span className="h-2 w-2 rounded-full bg-gold" />
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-[0.65rem] tracking-[0.2em] text-gold uppercase">{t.tag}</span>
                <span className="text-xs text-muted-foreground">{t.date}</span>
              </div>
              <h3 className="mt-2 text-2xl">{t.title}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {t.text}
              </p>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection className="pb-28">
        <div className="fg-card rounded-3xl p-10 text-center md:p-16">
          <div className="fg-card-inner">
          <h2 className="text-4xl md:text-5xl">Trusted Across India & the Globe</h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            From English professionals to Telugu and Kannada communities — FG Media Group serves
            diverse audiences with honesty, depth, and cultural respect, while pioneering Virtual
            Commerce for 195+ countries through InViGIL and ViERA.
          </p>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
