import { Layers, MessageCircle } from "lucide-react";
import { nominationCategories, NOMINATION_CONTACT } from "@/data/awards";

export function NominateFormExtras() {
  return (
    <div className="space-y-4">
      <details className="group rounded-2xl border border-border/70 bg-card/30 backdrop-blur-sm">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-sm font-medium [&::-webkit-details-marker]:hidden">
          <span className="flex items-center gap-2.5">
            <Layers className="h-4 w-4 text-gold" />
            {nominationCategories.length} nomination areas
          </span>
          <span className="text-xs text-muted-foreground transition-transform group-open:rotate-90">
            →
          </span>
        </summary>
        <ul className="space-y-2 border-t border-border/60 px-5 py-4">
          {nominationCategories.map((cat) => (
            <li key={cat} className="text-sm text-muted-foreground">
              {cat}
            </li>
          ))}
        </ul>
      </details>

      <aside className="rounded-2xl border border-border/60 bg-card/40 p-5 backdrop-blur-sm">
        <p className="text-xs font-medium tracking-wide text-foreground uppercase">Need assistance?</p>
        <div className="mt-3 space-y-2 text-sm text-muted-foreground">
          {NOMINATION_CONTACT.emails.map((email) => (
            <a key={email} href={`mailto:${email}`} className="block transition-colors hover:text-gold">
              {email}
            </a>
          ))}
          <a
            href={NOMINATION_CONTACT.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-gold"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            WhatsApp {NOMINATION_CONTACT.whatsapp}
          </a>
        </div>
      </aside>
    </div>
  );
}
