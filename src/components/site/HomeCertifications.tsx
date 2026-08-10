import certificateJpg from "@/assets/certificate.jpg";
import certificateWebp from "@/assets/certificate.webp";
import { CERTIFICATION_TAGS } from "@/data/footer-nav";
import { HeroAccent, SectionTitle } from "@/components/site/PageLayout";

const CERT_ALT =
  "FG Media registrations, licences, trademarks, copyrights, and ISO/IEC 27001:2013 certificate of registration";

export function HomeCertifications() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-surface/40 py-24">
      <div className="pointer-events-none absolute inset-0 fg-hero-pattern opacity-40" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-viera/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle
          overline="Certifications & Registrations"
          title={
            <>
              Registered, Certified & <HeroAccent>Trademarked</HeroAccent>
            </>
          }
          subtitle="Registrations, licences, trademarks, copyrights, and ISO certification — FG Media and Safety Technologies Pvt. Ltd."
        />

        <div className="fg-home-cert-glow mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-viera/20 bg-card/80 p-2 shadow-[0_0_60px_-20px_rgba(59,130,246,0.35)] transition-shadow duration-500 hover:shadow-[0_0_80px_-16px_rgba(59,130,246,0.45)]">
          <picture>
            <source srcSet={certificateWebp} type="image/webp" />
            <img
              src={certificateJpg}
              alt={CERT_ALT}
              width={1000}
              height={750}
              className="w-full rounded-xl object-contain"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>

        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2.5">
          {CERTIFICATION_TAGS.map((tag) => (
            <span
              key={tag}
              className="fg-cert-tag rounded-full border border-viera/25 bg-viera/5 px-4 py-2 text-[0.68rem] font-medium tracking-wide text-foreground/90 transition-all duration-300 hover:border-viera/50 hover:bg-viera/10 hover:text-viera hover:shadow-[0_0_24px_-6px_rgba(59,130,246,0.45)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
