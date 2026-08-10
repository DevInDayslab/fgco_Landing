import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from "lucide-react";
import { FgLogo } from "@/components/brand/FgLogo";
import { GoogleMapEmbed } from "@/components/site/GoogleMapEmbed";
import { FG_CONTACT, FG_OFFICE } from "@/data/contact";
import { FOOTER_LINKS, FOOTER_SOCIALS, type FooterLink } from "@/data/footer-nav";

function FooterLinkColumn({ title, links }: { title: string; links: readonly FooterLink[] }) {
  return (
    <div>
      <h3 className="section-label font-sans">{title}</h3>
      <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="transition-colors hover:text-gold">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ label }: { label: string }) {
  const className = "h-4 w-4";
  switch (label) {
    case "Facebook":
      return <Facebook className={className} aria-hidden />;
    case "Instagram":
      return <Instagram className={className} aria-hidden />;
    case "YouTube":
      return <Youtube className={className} aria-hidden />;
    case "LinkedIn":
      return <Linkedin className={className} aria-hidden />;
    case "X":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "Threads":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717-1.447 1.802-2.181 4.387-2.181 7.633v.016c0 3.235.735 5.818 2.181 7.615 1.43 1.783 3.63 2.698 6.54 2.717 2.623-.02 4.358-.631 5.74-1.85 1.414-1.245 2.071-2.975 2.07-5.278v-2.032c-.001-1.8-.373-2.798-1.022-3.35-.73-.62-1.816-.94-3.28-.94-1.13 0-2.1.21-2.88.62-.79.42-1.35 1.02-1.66 1.78h-.01v-2.1h-2.13v10.1h2.2v-1.55c.45.75 1.08 1.34 1.88 1.76.81.43 1.78.65 2.89.65 1.96 0 3.48-.56 4.52-1.67 1.13-1.21 1.7-3.01 1.7-5.35 0-2.01-.52-3.59-1.55-4.7-1.11-1.2-2.73-1.81-4.82-1.81-1.35 0-2.52.27-3.49.81-.75.44-1.35 1.05-1.78 1.82h-.02v-6.52h2.13v2.05h.02c.41-.78 1.01-1.39 1.79-1.82.98-.55 2.16-.82 3.52-.82 2.1 0 3.73.62 4.85 1.84 1.04 1.12 1.57 2.71 1.57 4.73 0 2.35-.58 4.17-1.73 5.4-1.05 1.12-2.59 1.73-4.58 1.73-1.47 0-2.7-.32-3.67-.95-.86-.56-1.48-1.35-1.84-2.35h-.01v6.35c0 2.56.72 4.55 2.14 5.93 1.5 1.45 3.7 2.2 6.55 2.22h.007c3.58-.024 6.33-1.205 8.18-3.51 1.64-2.05 2.49-4.9 2.52-8.48v-.016c-.03-3.58-.88-6.43-2.52-8.48-1.85-2.305-4.6-3.486-8.18-3.51z" />
        </svg>
      );
    default:
      return null;
  }
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))]">
          <div>
            <FgLogo size="md" showTagline />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A premium global initiative empowering communities through quality journalism,
              groundbreaking Virtual Intelligence (InViGIL), and national recognition of excellence.
            </p>

            <div className="mt-6">
              <p className="section-label font-sans">Follow InViGIL</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {FOOTER_SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-all duration-300 hover:border-viera/40 hover:bg-viera/10 hover:text-viera hover:shadow-[0_0_20px_-6px_rgba(59,130,246,0.5)]"
                  >
                    <SocialIcon label={social.label} />
                  </a>
                ))}
              </div>
            </div>

            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={FG_CONTACT.website}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  <span className="text-gold">{FG_CONTACT.websiteLabel}</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${FG_CONTACT.email}`} className="hover:text-gold">
                  {FG_CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${FG_CONTACT.awardsEmail}`} className="hover:text-gold">
                  {FG_CONTACT.awardsEmail}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a href={`tel:${FG_CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                  {FG_CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href={FG_CONTACT.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  WhatsApp {FG_CONTACT.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  {FG_OFFICE.line1}
                  <br />
                  {FG_OFFICE.line2}
                </span>
              </li>
            </ul>
          </div>

          <FooterLinkColumn title="Company" links={FOOTER_LINKS.company} />
          <FooterLinkColumn title="Platforms" links={FOOTER_LINKS.platforms} />
          <FooterLinkColumn title="Awards & Events" links={FOOTER_LINKS.awards} />
          <FooterLinkColumn title="Legal" links={FOOTER_LINKS.legal} />
        </div>

        <div className="mt-14">
          <h3 className="section-label font-sans">Find Us</h3>
          <GoogleMapEmbed className="mt-5 max-w-xl" heightClass="h-48" showHeader={false} />
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>
            <p>© 2026 FG Media and Safety Technologies Pvt Ltd. All rights reserved.</p>
            <a
              href="https://www.devindays.com"
              target="_blank"
              rel="noreferrer"
              className="mt-1.5 inline-block text-muted-foreground/70 transition-colors hover:text-gold"
            >
              Powered by DevInDays
            </a>
          </div>
          <p className="flex flex-wrap gap-x-6 gap-y-1">
            <span>GST: 29AADCF9850F1ZC</span>
            <span className="tracking-[0.18em] text-gold">ISO 27001 CERTIFIED</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
