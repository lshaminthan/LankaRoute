export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wide text-primary-blue">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        {title}
      </h2>
      {description && <p className="mt-3 text-base text-gray-600 sm:text-lg">{description}</p>}
    </div>
  );
}
