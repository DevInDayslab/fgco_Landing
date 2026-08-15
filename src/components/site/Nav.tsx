import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { FgLogo } from "@/components/brand/FgLogo";
import { SiteLinkButton } from "@/components/site/SiteButton";
import { SPONSORSHIP_TIERS_HASH } from "@/data/awards";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/media", label: "Media Wing" },
  { to: "/technology", label: "InViGIL" },
  { to: "/viera", label: "ViERA" },
  { to: "/automobiles", label: "Automobiles" },
  { to: "/operations", label: "Operations" },
  { to: "/awards", label: "HIT ViERA Awards" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-gold/20 bg-background/90 shadow-[0_4px_30px_rgba(0,0,0,0.35)] backdrop-blur-md">
      <div className="mx-auto w-full max-w-[100%] px-3 sm:px-4 lg:px-5">
        <div className="grid min-h-20 grid-cols-[auto_1fr_auto] items-center gap-2 py-2 lg:gap-3">
          <Link
            to="/"
            className="flex shrink-0 items-center"
            onClick={() => setOpen(false)}
          >
            <FgLogo size="lg" showTagline />
          </Link>

          <div className="hidden min-w-0 justify-center lg:flex">
            <div className="flex flex-nowrap items-center gap-0.5 xl:gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="shrink-0 whitespace-nowrap border-b-2 border-transparent px-1.5 py-1.5 text-[0.6875rem] font-medium leading-none text-muted-foreground transition-all duration-300 hover:border-gold/50 hover:text-foreground data-[status=active]:border-gold data-[status=active]:text-gold xl:px-2 xl:text-xs"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-3">
            <SiteLinkButton
              to="/sponsorship"
              hash={SPONSORSHIP_TIERS_HASH}
              variant="navSponsor"
              size="nav"
              className="hidden lg:inline-flex"
            >
              Sponsor
            </SiteLinkButton>
            <SiteLinkButton to="/nominate" variant="navNominate" size="nav" className="hidden lg:inline-flex">
              Nominate
            </SiteLinkButton>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="text-gold lg:hidden"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="space-y-1 border-b border-border bg-surface px-2 pt-2 pb-3 shadow-2xl lg:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              className="block w-full rounded-lg px-3 py-3 text-left text-base font-medium text-muted-foreground hover:text-foreground data-[status=active]:bg-accent data-[status=active]:text-gold"
            >
              {l.label}
            </Link>
          ))}
          <SiteLinkButton
            to="/sponsorship"
            hash={SPONSORSHIP_TIERS_HASH}
            variant="navSponsor"
            size="md"
            className="block w-full px-3 py-3 lg:hidden"
            onClick={() => setOpen(false)}
          >
            Sponsor
          </SiteLinkButton>
          <SiteLinkButton
            to="/nominate"
            variant="navNominate"
            size="md"
            className="block w-full px-3 py-3 lg:hidden"
            onClick={() => setOpen(false)}
          >
            Nominate
          </SiteLinkButton>
        </div>
      )}
    </nav>
  );
}
