"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "核心服务" },
  { href: "#skills", label: "Skill 市场" },
  { href: "#industries", label: "行业方案" },
  { href: "#process", label: "服务流程" },
  { href: "#faq", label: "常见问题" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-2 text-sm font-bold text-white">
            枢
          </span>
          <span className="text-lg font-semibold tracking-wide">
            智枢<span className="text-gradient">AI</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-mist transition-colors hover:text-snow"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-brand to-brand-2 px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            预约咨询
          </a>
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="打开菜单"
          aria-expanded={open}
        >
          <span
            className={`h-0.5 w-5 bg-snow transition-transform ${open ? "translate-y-1 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-snow transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink/95 px-5 py-4 backdrop-blur-md md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-mist hover:text-snow"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-gradient-to-r from-brand to-brand-2 px-5 py-2.5 text-center text-sm font-medium text-white"
          >
            预约咨询
          </a>
        </div>
      )}
    </header>
  );
}
