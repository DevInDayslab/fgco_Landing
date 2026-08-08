import { ExternalLink, MapPin } from "lucide-react";
import {
  FG_OFFICE,
  googleMapsEmbedUrl,
  googleMapsOpenUrl,
} from "@/data/contact";

type GoogleMapEmbedProps = {
  className?: string;
  heightClass?: string;
  showHeader?: boolean;
};

export function GoogleMapEmbed({
  className = "",
  heightClass = "h-56 md:h-64",
  showHeader = true,
}: GoogleMapEmbedProps) {
  return (
    <div className={`fg-card overflow-hidden rounded-2xl ${className}`}>
      <div className="fg-card-inner">
        {showHeader && (
          <div className="border-b border-border px-5 py-4">
            <p className="section-label">Corporate Office</p>
            <p className="mt-2 flex items-start gap-2 text-sm text-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {FG_OFFICE.line1}
                <br />
                {FG_OFFICE.line2}
              </span>
            </p>
          </div>
        )}
        <div className={`relative w-full ${heightClass}`}>
          <iframe
            title="FG Media Group — Corporate Office, Bengaluru"
            src={googleMapsEmbedUrl}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="border-t border-border px-5 py-3">
          <a
            href={googleMapsOpenUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-opacity hover:opacity-80"
          >
            Open in Google Maps
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
