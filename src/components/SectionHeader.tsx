interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-14">
      <p className="text-[0.75rem] font-bold tracking-[0.15em] uppercase text-accent mb-2">
        {label}
      </p>
      <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-text leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-muted max-w-[560px]">{description}</p>
      )}
    </div>
  );
}
