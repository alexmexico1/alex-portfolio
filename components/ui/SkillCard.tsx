type SkillCardProps = {
  name: string;
  description: string;
  color: string;
};

export default function SkillCard({
  name,
  description,
  color,
}: SkillCardProps) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div
        className={`mb-5 h-3 w-20 rounded-full bg-gradient-to-r ${color}`}
      />

      <h3 className="text-xl font-bold">
        {name}
      </h3>

      <p className="mt-3 text-gray-600 leading-7">
        {description}
      </p>
    </div>
  );
}