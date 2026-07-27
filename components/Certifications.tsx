"use client";

import { useEffect, useRef, useState } from "react";

const certificates = [
  {
    id: 1,
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding Indonesia",
    issuerLogo: "dc",
    date: "02 Desember 2025",
    expiry: "02 Desember 2028",
    credentialId: "98XWOY7V9ZM3",
    verifyUrl: "https://dicoding.com/certificates/98XWOY7V9ZM3",
    category: "Finance",
    color: "#0EA5E9",
    image: "/images/certificates/dicoding-financial.jpg",
    topics: ["Financial Planning", "Investing", "Loan Management"],
  },
  {
    id: 2,
    title: "Introduction to Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    issuerLogo: "IBM",
    date: "30 Mei 2026",
    expiry: null,
    credentialId: "ALM-COURSE_4058918",
    verifyUrl: null,
    category: "AI",
    color: "#06B6D4",
    image: "/images/certificates/ibm-ai.jpg",
    topics: ["Artificial Intelligence", "Machine Learning", "AI Concepts"],
  },
  {
    id: 3,
    title: "Jago Rumus Dasar Excel",
    issuer: "Jobstreet Career Hub",
    issuerLogo: "JS",
    date: "21 Mei 2026",
    expiry: null,
    credentialId: null,
    verifyUrl: null,
    category: "Productivity",
    color: "#8B5CF6",
    image: "/images/certificates/jobstreet-excel.jpg",
    topics: ["Excel Formula", "Spreadsheet", "Data Entry"],
  },
  {
    id: 4,
    title: "Pelatihan Dasar Data Science",
    issuer: "Jobstreet Career Hub",
    issuerLogo: "JS",
    date: "23 Mei 2026",
    expiry: null,
    credentialId: null,
    verifyUrl: null,
    category: "Data Science",
    color: "#F59E0B",
    image: "/images/certificates/jobstreet-datascience.jpg",
    topics: ["Data Science", "Analisis Data", "Machine Learning Dasar"],
  },
];

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<(typeof certificates)[0] | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <>
      <section id="certifications" ref={ref} className="py-24 dark:bg-[#0D0D0D] bg-[#F7F6F3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <p className="reveal text-xs font-mono text-[#00D4AA] tracking-widest uppercase mb-3">
              05. Sertifikasi
            </p>
            <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-extrabold dark:text-white text-gray-900">
              Sertifikat
            </h2>
            <p className="reveal text-sm dark:text-white/40 text-gray-400 mt-3 font-mono">
              Klik untuk lihat sertifikat
            </p>
          </div>

          <div className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {certificates.map((cert) => (
              <button
                key={cert.id}
                onClick={() => setSelected(cert)}
                className="text-left rounded-2xl dark:bg-white/5 bg-white border dark:border-white/10 border-gray-200 hover:border-[#00D4AA]/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group w-full overflow-hidden focus:outline-none"
              >
                {/* Certificate preview image */}
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white text-xs px-3 py-1.5 rounded-full">
                      Lihat sertifikat
                    </span>
                  </div>
                  <span
                    className="absolute top-2 right-2 text-xs font-mono px-2 py-0.5 rounded-full font-semibold"
                    style={{ backgroundColor: cert.color + "dd", color: "#fff" }}
                  >
                    {cert.category}
                  </span>
                </div>

                {/* Info */}
                <div className="p-4">
                  <p className="font-bold dark:text-white text-gray-900 text-xs leading-snug mb-0.5 group-hover:text-[#00D4AA] transition-colors line-clamp-2">
                    {cert.title}
                  </p>
                  <p className="text-xs dark:text-white/40 text-gray-500">{cert.issuer}</p>
                  <p className="text-xs dark:text-white/30 text-gray-400 mt-1 font-mono">{cert.date}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal — full certificate image */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="absolute inset-0 dark:bg-black/85 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative z-10 w-full max-w-2xl dark:bg-[#111] bg-white rounded-2xl border dark:border-white/10 border-gray-200 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 text-white hover:text-[#00D4AA] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Full certificate image */}
            <div className="w-full bg-gray-100">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Bottom info bar */}
            <div className="p-4 flex items-center justify-between gap-3">
              <div>
                <p className="font-bold dark:text-white text-gray-900 text-sm">{selected.title}</p>
                <p className="text-xs dark:text-white/50 text-gray-500">{selected.issuer} · {selected.date}</p>
                {selected.credentialId && (
                  <p className="text-xs font-mono dark:text-white/30 text-gray-400 mt-0.5">ID: {selected.credentialId}</p>
                )}
              </div>
              {selected.verifyUrl && (
                <a
                  href={selected.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: selected.color }}
                >
                  Verifikasi
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
