type SectionHeaderProps = {
  overline: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
};

export function SectionHeader({
  overline,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <p className="section-label">{overline}</p>
      <h2 className="mt-3 text-3xl leading-tight md:text-4xl lg:text-5xl">{title}</h2>
      <div className={`mt-4 h-1 w-24 rounded-full bg-gold ${className.includes("text-center") || className.includes("mx-auto") ? "mx-auto" : ""}`} />
      {description && (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
