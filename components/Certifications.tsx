"use client";

import { useEffect, useRef, useState } from "react";

const certificates = [
  {
    id: 1,
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding Indonesia",
    issuerLogo: "dicoding",
    date: "02 Desember 2025",
    expiry: "02 Desember 2028",
    credentialId: "98XWOY7V9ZM3",
    verifyUrl: "https://dicoding.com/certificates/98XWOY7V9ZM3",
    category: "Finance",
    color: "#0EA5E9",
    topics: ["Financial Planning", "Investing", "Loan Management"],
    description:
      "Kelas dari Coding Camp powered by DBS Foundation 2026. Mencakup dasar pengelolaan keuangan sehari-hari, konsep investasi, dan strategi pinjaman cerdas.",
    badge: "Sertifikat Kompetensi Kelulusan",
  },
  {
    id: 2,
    title: "Jago Rumus Dasar Excel",
    issuer: "Jobstreet Career Hub",
    issuerLogo: "jobstreet",
    date: "21 Mei 2026",
    expiry: null,
    credentialId: null,
    verifyUrl: null,
    category: "Productivity",
    color: "#8B5CF6",
    topics: ["Excel Formula", "Spreadsheet", "Data Entry"],
    description:
      "Sertifikat penyelesaian kelas video pembelajaran rumus-rumus dasar Microsoft Excel melalui platform Jobstreet by Seek.",
    badge: "Certificate of Completion",
  },
  {
    id: 3,
    title: "Introduction to Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    issuerLogo: "ibm",
    date: "30 Mei 2026",
    expiry: null,
    credentialId: "ALM-COURSE_4058918",
    verifyUrl: null,
    category: "AI",
    color: "#06B6D4",
    topics: ["Artificial Intelligence", "Machine Learning", "AI Concepts"],
    description:
      "Sertifikat penyelesaian kelas Introduction to Artificial Intelligence dari IBM SkillsBuild. Durasi 1 jam 15 menit, mencakup konsep dasar AI dan machine learning.",
    badge: "Completion Certificate",
  },
  {
    id: 4,
    title: "Pelatihan Dasar Data Science",
    issuer: "Jobstreet Career Hub",
    issuerLogo: "jobstreet",
    date: "23 Mei 2026",

    expiry: null,
    credentialId: null,
    verifyUrl: null,
    category: "Data Science",
    color: "#F59E0B",
    topics: ["Data Science", "Analisis Data", "Machine Learning Dasar"],
    description:
      "Sertifikat penyelesaian kelas video pembelajaran dasar-dasar Data Science melalui platform Jobstreet by Seek.",
    badge: "Certificate of Completion",
  },
];

const IssuerBadge = ({ name, color }: { name: string; color: string }) => {
  const label = name === "dicoding" ? "dc" : name === "ibm" ? "IBM" : "JS";
  return (
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
      style={{ backgroundColor: color }}
    >
      {label}
    </div>
  );
};

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
              Klik kartu untuk detail lengkap
            </p>
          </div>

          <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {certificates.map((cert, i) => (
              <button
                key={cert.id}
                onClick={() => setSelected(cert)}
                style={{ animationDelay: `${i * 80}ms` }}
                className="text-left p-6 rounded-2xl dark:bg-white/5 bg-white border dark:border-white/10 border-gray-200 hover:border-[#00D4AA]/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group w-full focus:outline-none focus:ring-2 focus:ring-[#00D4AA]/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <IssuerBadge name={cert.issuerLogo} color={cert.color} />
                  <span
                    className="text-xs font-mono px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: cert.color + "18", color: cert.color }}
                  >
                    {cert.category}
                  </span>
                </div>

                <h3 className="font-bold dark:text-white text-gray-900 text-sm leading-snug mb-1 group-hover:text-[#00D4AA] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs dark:text-white/50 text-gray-500 mb-4">{cert.issuer}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.topics.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-0.5 rounded-full dark:bg-white/5 bg-gray-100 dark:text-white/40 text-gray-500">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t dark:border-white/10 border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 dark:text-white/30 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs dark:text-white/40 text-gray-400">{cert.date}</span>
                  </div>
                  <span className="text-xs text-[#00D4AA] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Detail
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="absolute inset-0 dark:bg-black/80 bg-black/40 backdrop-blur-sm" />
          <div
            className="relative z-10 w-full max-w-md dark:bg-[#111] bg-white rounded-2xl border dark:border-white/10 border-gray-200 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${selected.color}, #00D4AA)` }} />

            <div className="p-6">
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg dark:bg-white/5 bg-gray-100 dark:text-white/50 text-gray-500 hover:text-[#00D4AA] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <IssuerBadge name={selected.issuerLogo} color={selected.color} />
                <div>
                  <p className="text-xs font-mono dark:text-white/40 text-gray-400">{selected.badge}</p>
                  <p className="text-sm font-semibold dark:text-white text-gray-900">{selected.issuer}</p>
                </div>
              </div>

              <h2 className="text-xl font-extrabold dark:text-white text-gray-900 mb-2 leading-tight">
                {selected.title}
              </h2>
              <p className="text-sm dark:text-white/60 text-gray-600 mb-5 leading-relaxed">
                {selected.description}
              </p>

              {/* Topics */}
              <div className="mb-5">
                <p className="text-xs font-mono dark:text-white/40 text-gray-400 uppercase tracking-wider mb-2">Materi</p>
                <div className="flex flex-wrap gap-2">
                  {selected.topics.map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-full font-mono" style={{ backgroundColor: selected.color + "18", color: selected.color }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3 rounded-xl dark:bg-white/5 bg-gray-50">
                  <p className="text-xs dark:text-white/40 text-gray-400 mb-0.5">Tanggal Terbit</p>
                  <p className="text-sm font-semibold dark:text-white text-gray-900">{selected.date}</p>
                </div>
                <div className="p-3 rounded-xl dark:bg-white/5 bg-gray-50">
                  <p className="text-xs dark:text-white/40 text-gray-400 mb-0.5">Berlaku Hingga</p>
                  <p className="text-sm font-semibold dark:text-white text-gray-900">{selected.expiry ?? "Seumur Hidup"}</p>
                </div>
              </div>

              {/* Credential ID */}
              {selected.credentialId && (
                <div className="p-3 rounded-xl dark:bg-white/5 bg-gray-50 mb-5">
                  <p className="text-xs dark:text-white/40 text-gray-400 mb-0.5 font-mono">Credential ID</p>
                  <p className="text-sm font-mono font-semibold dark:text-white text-gray-900 tracking-wider">{selected.credentialId}</p>
                </div>
              )}

              {/* Action button */}
              {selected.verifyUrl ? (
                <a
                  href={selected.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm text-[#0D0D0D] transition-opacity hover:opacity-90"
                  style={{ backgroundColor: selected.color }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Verifikasi Sertifikat
                </a>
              ) : (
                <div className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm dark:bg-white/5 bg-gray-100 dark:text-white/40 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Computer Generated Certificate
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
