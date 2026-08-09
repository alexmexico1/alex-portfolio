import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Alex Sunday Obi
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Full-Stack Developer • Abuja, Nigeria
          </p>

          <p className="mt-3 text-sm text-slate-500">
            © {year} Alex Sunday Obi. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://FaGithub.com/alexmexico1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="FaGithub"
            className="text-slate-500 transition-colors hover:text-slate-900"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/alex-obi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="FaLinkedIn"
            className="text-slate-500 transition-colors hover:text-slate-900"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="mailto:alex@example.com"
            aria-label="Email"
            className="text-slate-500 transition-colors hover:text-slate-900"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}