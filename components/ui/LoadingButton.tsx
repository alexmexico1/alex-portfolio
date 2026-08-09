type LoadingButtonProps = {
  loading: boolean;
  children: React.ReactNode;
};

export default function LoadingButton({
  loading,
  children,
}: LoadingButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? "Sending..." : children}
    </button>
  );
}