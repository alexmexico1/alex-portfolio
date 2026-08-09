type SectionHeadingProps = {
  title: string;
  description: string;
};

export default function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-16 max-w-3xl">
      <h2 className="text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}