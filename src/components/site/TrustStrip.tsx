const trustStats = [
  { value: "2020", label: "Founded" },
  { value: "ISO 27001", label: "Certified" },
  { value: "Startup India", label: "Recognised" },
  { value: "Bengaluru", label: "Headquarters" },
] as const;

export function TrustStrip({ className = "" }: { className?: string }) {
  return (
    <section
      className={`fg-trust-strip relative overflow-hidden border-y border-border/50 py-10 md:py-12 ${className}`}
      aria-label="Company credentials"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_50%_50%,rgb(56_189_248/0.06),transparent_70%)]" />

      <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-10 px-6 sm:gap-x-8 md:grid-cols-4 md:gap-y-0">
        {trustStats.map(({ value, label }) => (
          <div key={label} className="text-center">
            <p className="fg-trust-stat-value text-2xl font-bold tracking-tight text-sky-400 sm:text-3xl">
              {value}
            </p>
            <p className="mt-2 text-[0.62rem] font-medium tracking-[0.22em] text-muted-foreground uppercase sm:text-[0.65rem]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
