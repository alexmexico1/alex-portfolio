type TimelineCardProps = {
  year: string;
  title: string;
  description: string;
};

export default function TimelineCard({
  year,
  title,
  description,
}: TimelineCardProps) {
  return (
    <div className="relative border-l-4 border-blue-600 pl-8 pb-10">
      <div className="absolute -left-3 top-1 h-6 w-6 rounded-full bg-blue-600"></div>

      <span className="text-blue-600 font-bold">
        {year}
      </span>

      <h3 className="mt-2 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-gray-600 leading-7">
        {description}
      </p>
    </div>
  );
}