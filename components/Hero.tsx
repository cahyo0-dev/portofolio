"use client";

import { useEffect, useRef, useState } from "react";

const roles = [
  "Web Developer",
  "Laravel Engineer",
  "IoT Builder",
  "Data Observer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const current = roles[roleIndex];
    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden dark:bg-[#0D0D0D] bg-[#F7F6F3]">
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]" style={{ backgroundImage: "linear-gradient(#00D4AA 1px, transparent 1px), linear-gradient(90deg, #00D4AA 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 dark:opacity-20" style={{ background: "radial-gradient(circle, #00D4AA 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border dark:border-[#00D4AA]/30 border-[#00D4AA]/50 dark:bg-[#00D4AA]/5 bg-[#00D4AA]/10">
            <span className="w-2 h-2 rounded-full bg-[#00D4AA] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono dark:text-[#00D4AA] text-[#00A880] tracking-wider uppercase">Available for opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-4 dark:text-white text-gray-900">
            Nurcahyo<br /><span className="text-[#00D4AA]">Akbar</span>
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl font-mono dark:text-white/50 text-gray-500 mb-6 h-8">
            <span className="text-[#00D4AA]">&gt;</span> <span>{displayed}</span><span className="cursor" />
          </div>

          <p className="text-sm sm:text-base md:text-lg dark:text-white/60 text-gray-600 leading-relaxed max-w-xl mb-8 sm:mb-10">
            Fresh graduate yang suka ngoding sampai sesuatu benar-benar jalan. Dari{" "}
            <span className="dark:text-white/90 text-gray-800 font-medium">web app</span> sampai{" "}
            <span className="dark:text-white/90 text-gray-800 font-medium">hardware</span>{" "}
            — selama ada masalah yang bisa dipecahkan, saya tertarik.
          </p>

          <div className="flex flex-wrap gap-3 mb-10 sm:mb-12">
            <a href="#projects" className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#00D4AA] text-[#0D0D0D] font-semibold text-sm hover:bg-[#00A880] transition-colors">Lihat Proyek</a>
            <a href="#contact" className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border dark:border-white/20 border-gray-300 dark:text-white text-gray-900 font-semibold text-sm hover:border-[#00D4AA] hover:text-[#00D4AA] transition-colors">Hubungi Saya</a>
            <a href="https://github.com/cahyo0-dev" target="_blank" rel="noopener noreferrer" className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border dark:border-white/20 border-gray-300 dark:text-white text-gray-900 font-semibold text-sm hover:border-[#00D4AA] hover:text-[#00D4AA] transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              GitHub
            </a>
          </div>

          <div className="flex flex-wrap gap-6 sm:gap-8">
            {[
              { value: "4", label: "Proyek Selesai" },
              { value: "4", label: "Bulan Magang BMKG" },
              { value: "2026", label: "Lulus" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl sm:text-2xl font-bold dark:text-white text-gray-900">{stat.value}</div>
                <div className="text-xs dark:text-white/40 text-gray-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 dark:text-white/30 text-gray-400">
        <span className="text-xs tracking-widest uppercase font-mono">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00D4AA] to-transparent" />
      </div>
    </section>
  );
}
