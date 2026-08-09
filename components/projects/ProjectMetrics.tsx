type ProjectMetricsProps = {
  role: string;
  duration: string;
  status: string;
  team: string;
};

export default function ProjectMetrics({
  role,
  duration,
  status,
  team,
}: ProjectMetricsProps) {
  return (
    <section className="mt-20">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <Metric
          label="Role"
          value={role}
        />

        <Metric
          label="Duration"
          value={duration}
        />

        <Metric
          label="Status"
          value={status}
        />

        <Metric
          label="Team"
          value={team}
        />

      </div>
    </section>
  );
}

type MetricProps = {
  label: string;
  value: string;
};

function Metric({ label, value }: MetricProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <p className="text-sm text-slate-500">
        {label}
      </p>

      <h3 className="mt-2 text-xl font-semibold text-slate-900">
        {value}
      </h3>

    </div>
  );
}