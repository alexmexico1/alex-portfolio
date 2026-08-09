"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-slate-900"
        >
          Alex
          <span className="text-blue-600">.</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="/resume/Alex-Sunday-Obi-Resume.pdf"
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-900 md:hidden"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-6">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-slate-100 py-4 text-base font-medium text-slate-700 last:border-none hover:text-slate-900"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="/resume/Alex-Sunday-Obi-Resume.pdf"
              className="mt-6 rounded-xl bg-slate-900 py-3 text-center font-medium text-white"
            >
              Resume
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}