import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FgLogo } from "@/components/brand/FgLogo";
import { GoogleMapEmbed } from "@/components/site/GoogleMapEmbed";
import { FG_CONTACT, FG_OFFICE } from "@/data/contact";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <FgLogo size="md" showTagline />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            A premium global initiative empowering communities through quality journalism,
            groundbreaking Virtual Intelligence (InViGIL), and national recognition of excellence.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
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

        <div>
          <h3 className="section-label font-sans">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-gold">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold">About Us</Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-gold">Team</Link>
            </li>
            <li>
              <Link to="/media" className="hover:text-gold">Media Wing</Link>
            </li>
            <li>
              <Link to="/technology" className="hover:text-gold">Technology</Link>
            </li>
            <li>
              <Link to="/viera" className="hover:text-gold">ViERA</Link>
            </li>
            <li>
              <Link to="/automobiles" className="hover:text-gold">Automobiles</Link>
            </li>
            <li>
              <Link to="/awards" className="hover:text-gold">HIT ViERA Awards</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="section-label font-sans">Our Divisions</h3>
          <ul className="mt-5 space-y-4 text-sm">
            {[
              ["InViGIL", "Virtual Commerce Platform", "/technology"],
              ["ViERA", "Virtual Intelligence Engine", "/viera"],
              ["Media Wing", "HIT News · Telugu · Kannada", "/media"],
              ["Automobiles", "Virtual showrooms & fleet", "/automobiles"],
              ["AP MEDIA Foundation", "Foundation initiatives", "/about"],
              ["Videos", "Content & productions", "/contact"],
            ].map(([t, s, to]) => (
              <li key={t}>
                <Link to={to} className="block text-foreground hover:text-gold">{t}</Link>
                <span className="block text-xs text-muted-foreground">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="section-label font-sans">Find Us</h3>
          <GoogleMapEmbed className="mt-5" heightClass="h-48" showHeader={false} />
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
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
