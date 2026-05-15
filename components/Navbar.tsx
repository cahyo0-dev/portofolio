"use client";

import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "Tentang" },
  { href: "#skills", label: "Keahlian" },
  { href: "#projects", label: "Proyek" },
  { href: "#experience", label: "Pengalaman" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "dark:bg-[#0D0D0D]/90 bg-white/90 backdrop-blur-md border-b dark:border-white/10 border-black/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-mono text-sm font-medium dark:text-white text-gray-900 tracking-tight"
        >
          <span className="text-[#00D4AA]">&lt;</span>
          cahyo
          <span className="text-[#00D4AA]">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm dark:text-white/70 text-gray-600 hover:text-[#00D4AA] dark:hover:text-[#00D4AA] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full flex items-center justify-center dark:bg-white/10 bg-black/5 hover:bg-[#00D4AA]/20 transition-colors"
          >
            {theme === "dark" ? (
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 dark:bg-white bg-gray-900 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} style={{width: '20px'}} />
              <span className={`block h-0.5 dark:bg-white bg-gray-900 transition-all ${menuOpen ? "opacity-0" : ""}`} style={{width: '20px'}} />
              <span className={`block h-0.5 dark:bg-white bg-gray-900 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{width: '20px'}} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden dark:bg-[#111] bg-white border-t dark:border-white/10 border-black/10 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm dark:text-white/70 text-gray-600 hover:text-[#00D4AA] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
