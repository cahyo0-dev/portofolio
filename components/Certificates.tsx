"use client";

import { useEffect, useRef, useState } from "react";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  color: string;
  image: string;
  verifyUrl?: string;
};

const certificates: Certificate[] = [
  {
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding Indonesia",
    date: "Desember 2025",
    color: "#00D4AA",
    image: "/certificates/financial-literacy-dicoding.png",
    verifyUrl: "https://www.dicoding.com/certificates/98XWOY7V9ZM3",
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    date: "Mei 2026",
    color: "#0077FF",
    image: "/certificates/ai-ibm-skillsbuild.png",
  },
  {
    title: "Pelatihan Dasar Data Science",
    issuer: "Jobstreet Career Hub",
    date: "Mei 2026",
    color: "#8B5CF6",
    image: "/certificates/data-science-jobstreet.png",
  },
  {
    title: "Jago Rumus Dasar Excel",
    issuer: "Jobstreet Career Hub",
    date: "Mei 2026",
    color: "#FF6B35",
    image: "/certificates/excel-jobstreet.png",
  },
];

export default function Certificates() {
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Certificate | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section id="certificates" ref={ref} className="py-24 dark:bg-[#0D0D0D] bg-[#F7F6F3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <p className="reveal text-xs font-mono text-[#00D4AA] tracking-widest uppercase mb-3">05. Sertifikat</p>
          <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-extrabold dark:text-white text-gray-900">Pembelajaran & Pelatihan</h2>
          <p className="reveal text-sm dark:text-white/40 text-gray-400 mt-3 font-mono">Klik kartu untuk lihat sertifikat</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificates.map((c, i) => (
            <button
              key={c.title}
              onClick={() => setSelected(c)}
              className="reveal group text-left cursor-pointer rounded-2xl overflow-hidden border dark:border-white/10 border-gray-200 dark:bg-white/5 bg-white hover:border-[#00D4AA]/50 hover:-translate-y-1 transition-all focus:outline-none focus:ring-2 focus:ring-[#00D4AA]/50"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden border-b dark:border-white/10 border-gray-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-mono mb-1" style={{ color: c.color }}>{c.issuer}</p>
                <h3 className="font-bold dark:text-white text-gray-900 text-sm leading-snug mb-1 line-clamp-2">{c.title}</h3>
                <p className="text-xs dark:text-white/40 text-gray-400 font-mono">{c.date}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="absolute inset-0 dark:bg-black/80 bg-black/40 backdrop-blur-sm" />

          <div
            className="relative z-10 w-full max-w-2xl dark:bg-[#111] bg-white rounded-2xl border dark:border-white/10 border-gray-200 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${selected.color}, transparent)` }} />

            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-mono" style={{ color: selected.color }}>{selected.issuer}</p>
                  <h3 className="text-lg font-bold dark:text-white text-gray-900 mt-1">{selected.title}</h3>
                  <p className="text-xs dark:text-white/40 text-gray-400 font-mono mt-1">{selected.date}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg dark:bg-white/5 bg-gray-100 dark:text-white/50 text-gray-500 hover:dark:text-white hover:text-gray-900 transition-colors flex-shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="rounded-xl overflow-hidden border dark:border-white/10 border-gray-200 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={selected.image} alt={selected.title} className="w-full h-auto" />
              </div>

              {selected.verifyUrl && (
                <a
                  href={selected.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono dark:text-white/70 text-gray-700 hover:text-[#00D4AA] dark:hover:text-[#00D4AA] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Verifikasi sertifikat
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
