import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition duration-300";

  const styles = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-800",
    secondary:
      "border border-slate-300 text-slate-900 hover:bg-slate-100",
  };

  return (
    <Link
      href={href}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}