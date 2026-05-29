"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "/#about",      label: "About" },
  { href: "/#skills",     label: "Skills" },
  { href: "/thesis",      label: "Research", accent: true },
  { href: "/#projects",   label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education",  label: "Education" },
  { href: "/#contact",    label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 h-16 z-[100] backdrop-blur-2xl border-b border-border-dim transition-colors duration-300 ${
          scrolled ? "bg-[rgba(11,11,16,.95)]" : "bg-[rgba(11,11,16,.8)]"
        }`}
      >
        <div className="sd-container h-full flex items-center justify-between">
          <Link href="/" className="font-extrabold text-[1.1rem] grad-text">
            SD
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 hover:text-text hover:bg-card ${
                    l.accent ? "text-accent" : "text-muted"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1.5"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-[22px] h-[2px] bg-text rounded-sm transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-[2px] bg-text rounded-sm transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-[2px] bg-text rounded-sm transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed top-16 left-0 right-0 bg-bg-alt border-b border-border z-[99] flex flex-col gap-1 px-6 pb-6 pt-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`px-3 py-2.5 rounded-lg font-medium transition-colors duration-200 hover:text-text hover:bg-card ${
                l.accent ? "text-accent" : "text-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
