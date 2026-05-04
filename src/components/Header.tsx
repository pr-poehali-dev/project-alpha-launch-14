import { useEffect, useState } from "react";

const links = [
  { label: "Рецензии", href: "#reviews" },
  { label: "Рубрики", href: "#rubrics" },
  { label: "Форматы", href: "#formats" },
  { label: "Жанры", href: "#genres" },
  { label: "Подписка", href: "#subscribe" },
];

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white border-b border-neutral-200 shadow-sm" : "bg-transparent"
      } ${className ?? ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
            scrolled ? "text-neutral-900" : "text-white"
          }`}
        >
          НЕ ДОЧИТАЛ
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs uppercase tracking-widest transition-colors duration-300 hover:opacity-60 ${
                scrolled ? "text-neutral-900" : "text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden flex flex-col gap-1.5 cursor-pointer transition-colors duration-300 ${
            scrolled ? "text-neutral-900" : "text-white"
          }`}
          aria-label="Меню"
        >
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs uppercase tracking-widest text-neutral-900 hover:text-neutral-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
