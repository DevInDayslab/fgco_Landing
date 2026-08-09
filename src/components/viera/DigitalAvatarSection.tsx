import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Building2,
  GraduationCap,
  Palette,
  Sparkles,
  TrendingUp,
  User,
} from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { digitalAvatarRoles } from "@/data/viera-content";

type RoleMeta = {
  icon: LucideIcon;
  accent: "gold" | "viera";
  position: "left" | "right";
  span?: "wide";
};

const roleMeta: Record<string, RoleMeta> = {
  Professionals: { icon: Briefcase, accent: "gold", position: "left" },
  Entrepreneurs: { icon: TrendingUp, accent: "viera", position: "right", span: "wide" },
  Educators: { icon: GraduationCap, accent: "viera", position: "left" },
  Creators: { icon: Palette, accent: "gold", position: "right" },
  Organizations: { icon: Building2, accent: "gold", position: "left" },
  Individuals: { icon: User, accent: "viera", position: "right", span: "wide" },
};

const accentStyles = {
  gold: {
    border: "border-gold/35",
    glow: "from-gold/15",
    icon: "text-gold",
    iconBg: "bg-gold/10 border-gold/25",
    line: "bg-gold/50",
  },
  viera: {
    border: "border-viera/35",
    glow: "from-viera/15",
    icon: "text-viera",
    iconBg: "bg-viera/10 border-viera/25",
    line: "bg-viera/50",
  },
};

function RoleTile({
  role,
  text,
  meta,
}: {
  role: string;
  text: string;
  meta: RoleMeta;
}) {
  const Icon = meta.icon;
  const a = accentStyles[meta.accent];

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border ${a.border} bg-gradient-to-br ${a.glow} to-transparent p-5 transition-all duration-300 hover:border-opacity-80 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.5)] md:p-6 ${meta.span === "wide" ? "sm:col-span-2" : ""}`}
    >
      <div className="flex gap-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${a.iconBg} transition-transform duration-300 group-hover:scale-105`}
        >
          <Icon className={`h-5 w-5 ${a.icon}`} aria-hidden />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-tight">{role}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
        </div>
      </div>
      <div
        className={`mt-4 h-px w-full bg-gradient-to-r ${a.line} to-transparent opacity-60`}
        aria-hidden
      />
    </article>
  );
}

function HubVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto flex aspect-square w-full max-w-[280px] items-center justify-center lg:max-w-none ${className}`}
    >
      <div
        className="absolute inset-0 rounded-full border border-viera/10"
        aria-hidden
      />
      <div
        className="absolute inset-[12%] rounded-full border border-viera/20"
        aria-hidden
      />
      <div
        className="absolute inset-[24%] rounded-full border border-dashed border-viera/25 animate-[spin_90s_linear_infinite]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_65%)]"
        aria-hidden
      />

      {/* Spoke lines */}
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <div
          key={deg}
          className="absolute left-1/2 top-1/2 h-px w-[42%] origin-left bg-gradient-to-r from-viera/30 to-transparent"
          style={{ transform: `rotate(${deg}deg)` }}
          aria-hidden
        />
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center rounded-full border border-viera/40 bg-background/80 p-6 shadow-[0_0_60px_-12px_rgba(59,130,246,0.35)] backdrop-blur-sm">
        <BrandLogo id="viera" size="md" className="max-w-[10rem]" />
        <span className="mt-2 text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase">
          Your digital self
        </span>
      </div>

      <Sparkles
        className="absolute right-[8%] top-[12%] h-4 w-4 text-gold/60"
        aria-hidden
      />
      <Sparkles
        className="absolute bottom-[14%] left-[10%] h-3 w-3 text-viera/50"
        aria-hidden
      />
    </div>
  );
}

export function DigitalAvatarSection() {
  const leftRoles = digitalAvatarRoles.filter((r) => roleMeta[r.role]?.position === "left");
  const rightRoles = digitalAvatarRoles.filter((r) => roleMeta[r.role]?.position === "right");

  return (
    <div className="relative">
      <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-muted-foreground md:mb-14">
        One intelligent avatar — shaped for how you work, create, teach, build and live online.
      </p>

      {/* Desktop: hub + flanking grids */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-10 lg:items-center">
        <div className="grid gap-4">
          {leftRoles.map((item) => (
            <RoleTile
              key={item.role}
              role={item.role}
              text={item.text}
              meta={roleMeta[item.role]}
            />
          ))}
        </div>

        <HubVisual />

        <div className="grid gap-4">
          {rightRoles.map((item) => (
            <RoleTile
              key={item.role}
              role={item.role}
              text={item.text}
              meta={roleMeta[item.role]}
            />
          ))}
        </div>
      </div>

      {/* Mobile / tablet: hub then bento */}
      <div className="lg:hidden">
        <HubVisual className="mb-10" />
        <div className="grid gap-4 sm:grid-cols-2">
          {digitalAvatarRoles.map((item) => (
            <RoleTile
              key={item.role}
              role={item.role}
              text={item.text}
              meta={roleMeta[item.role]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
