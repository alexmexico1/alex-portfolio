type TechBadgeProps = {
  name: string;
};

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
      {name}
    </span>
  );
}