"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  title: string;
  desc: string;
  longDesc: string;
  stack: string[];
  type: string;
  color: string;
  year: string;
  highlights: string[];
  icon: React.ReactNode;
};

const projects: Project[] = [
  {
    title: "Deteksi Anomali Penggunaan Listrik",
    desc: "Sistem IoT berbasis ESP32 & PZEM-004T untuk monitoring dan deteksi anomali konsumsi listrik menggunakan metode Seasonal Decomposition. Notifikasi real-time via Telegram Bot.",
    longDesc: "Proyek skripsi ini membangun sistem end-to-end: sensor PZEM-004T membaca arus & tegangan listrik secara real-time, data dikirim via ESP32 ke backend Laravel, lalu algoritma Seasonal Decomposition mendeteksi pola konsumsi yang menyimpang. Jika anomali terdeteksi, sistem otomatis mengirim notifikasi ke Telegram.",
    highlights: ["Hardware: ESP32 + PZEM-004T", "Algoritma: Seasonal Decomposition", "Notifikasi real-time via Telegram Bot API", "Backend: Laravel + MySQL"],
    stack: ["ESP32", "PZEM-004T", "Laravel", "MySQL", "Telegram API"],
    type: "Skripsi · IoT + Web",
    color: "#00D4AA",
    year: "2025",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: "Platform E-Commerce Parfum",
    desc: "Aplikasi toko online full-stack dengan katalog produk dinamis, sistem keranjang belanja, proses checkout, dan database relasional antar entitas (user, product, transaction).",
    longDesc: "Dibangun dari nol sebagai proyek full-stack: desain database relasional (user, product, cart, transaction), katalog produk dengan filter & search, cart management, dan alur checkout lengkap. Menerapkan prinsip MVC dengan Laravel sebagai backend dan Blade untuk tampilan.",
    highlights: ["Full-stack: Laravel + Blade", "Fitur: katalog, cart, checkout", "Database relasional: 4+ entitas", "Autentikasi pengguna & admin panel"],
    stack: ["Laravel", "MySQL", "Blade", "Tailwind CSS", "JavaScript"],
    type: "Web App",
    color: "#FF6B35",
    year: "2024",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    title: "Sistem Presensi Digital",
    desc: "Sistem presensi berbasis web yang dikembangkan selama magang di BMKG Tarakan. Fitur absensi digital, rekap kehadiran, dan manajemen data karyawan menggunakan Laravel & MySQL.",
    longDesc: "Dikembangkan selama magang di BMKG Tarakan sebagai solusi pengganti absensi manual. Fitur mencakup pencatatan kehadiran harian, rekap bulanan otomatis, dan manajemen data pegawai. Sistem ini dipakai langsung oleh tim di BMKG selama periode magang.",
    highlights: ["Dikembangkan & dipakai langsung di BMKG", "Absensi digital & rekap otomatis", "Manajemen data karyawan", "Backend: Laravel + MySQL"],
    stack: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    type: "Magang · Web App",
    color: "#8B5CF6",
    year: "2024",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Monitoring Suhu Ruangan IoT",
    desc: "Sistem pemantau suhu & kelembapan real-time menggunakan sensor DHT11 dan mikrokontroler. Data divisualisasikan di dashboard dan dilengkapi alert otomatis jika suhu melewati ambang batas.",
    longDesc: "Merancang arsitektur sistem IoT lengkap: sensor DHT11 membaca suhu & kelembapan, mikrokontroler mengirim data ke platform cloud (ThingSpeak), dan dashboard menampilkan grafik real-time. Alert otomatis aktif jika suhu melewati threshold yang ditentukan.",
    highlights: ["Sensor: DHT11 (suhu & kelembapan)", "Dashboard real-time: ThingSpeak", "Alert otomatis jika melewati threshold", "Visualisasi data time-series"],
    stack: ["Arduino/ESP32", "DHT11", "ThingSpeak", "C++"],
    type: "IoT",
    color: "#0077FF",
    year: "2024",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close modal on escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section id="projects" ref={ref} className="py-24 dark:bg-[#0D0D0D] bg-[#F7F6F3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <p className="reveal text-xs font-mono text-[#00D4AA] tracking-widest uppercase mb-3">03. Proyek</p>
          <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-extrabold dark:text-white text-gray-900">Yang Sudah Dibuat</h2>
          <p className="reveal text-sm dark:text-white/40 text-gray-400 mt-3 font-mono">Klik kartu untuk detail lengkap</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setSelected(p)}
              className="reveal project-card p-6 rounded-2xl dark:bg-white/5 bg-white border dark:border-white/10 border-gray-200 hover:border-[#00D4AA]/50 hover:-translate-y-1 transition-all group text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00D4AA]/50"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: p.color + "20", color: p.color }}
                >
                  {p.icon}
                </div>
                <div className="flex items-center gap-1.5 ml-2">
                  <span className="text-xs font-mono dark:text-white/30 text-gray-400">{p.year}</span>
                  <span className="text-xs dark:text-white/20 text-gray-300">·</span>
                  <svg className="w-3.5 h-3.5 dark:text-white/30 text-gray-400 group-hover:text-[#00D4AA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>

              <span
                className="text-xs font-mono px-2.5 py-1 rounded-full mb-3 inline-block"
                style={{ backgroundColor: p.color + "15", color: p.color }}
              >
                {p.type}
              </span>

              <h3 className="font-bold dark:text-white text-gray-900 mb-2 leading-tight text-sm">
                {p.title}
              </h3>
              <p className="text-xs dark:text-white/50 text-gray-500 leading-relaxed mb-4 line-clamp-3">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.stack.slice(0, 3).map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-2 py-0.5 rounded-full dark:bg-white/5 bg-gray-100 dark:text-white/40 text-gray-500 dark:border-white/10 border border-gray-200"
                  >
                    {s}
                  </span>
                ))}
                {p.stack.length > 3 && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full dark:text-white/30 text-gray-400">
                    +{p.stack.length - 3}
                  </span>
                )}
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
          {/* Backdrop */}
          <div className="absolute inset-0 dark:bg-black/80 bg-black/40 backdrop-blur-sm" />

          {/* Modal card */}
          <div
            className="relative z-10 w-full max-w-lg dark:bg-[#111] bg-white rounded-2xl border dark:border-white/10 border-gray-200 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Color accent bar */}
            <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${selected.color}, transparent)` }} />

            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: selected.color + "20", color: selected.color }}
                  >
                    {selected.icon}
                  </div>
                  <div>
                    <span
                      className="text-xs font-mono px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: selected.color + "15", color: selected.color }}
                    >
                      {selected.type}
                    </span>
                    <p className="text-xs dark:text-white/40 text-gray-400 font-mono mt-1">{selected.year}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg dark:bg-white/5 bg-gray-100 dark:text-white/50 text-gray-500 hover:dark:text-white hover:text-gray-900 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-3">{selected.title}</h3>

              {/* Image placeholder */}
              <div
                className="w-full h-36 rounded-xl mb-4 flex items-center justify-center border dark:border-white/10 border-gray-200 relative overflow-hidden"
                style={{ backgroundColor: selected.color + "08" }}
              >
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `linear-gradient(${selected.color} 1px, transparent 1px), linear-gradient(90deg, ${selected.color} 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative flex flex-col items-center gap-2" style={{ color: selected.color + "60" }}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs font-mono" style={{ color: selected.color + "80" }}>Tambahkan screenshot di sini</span>
                </div>
              </div>

              <p className="text-sm dark:text-white/60 text-gray-600 leading-relaxed mb-4">{selected.longDesc}</p>

              {/* Highlights */}
              <div className="space-y-2 mb-5">
                {selected.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2 text-sm dark:text-white/70 text-gray-700">
                    <span className="mt-1 flex-shrink-0" style={{ color: selected.color }}>▸</span>
                    {h}
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {selected.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-2.5 py-1 rounded-full dark:bg-white/5 bg-gray-100 dark:text-white/50 text-gray-500 dark:border-white/10 border border-gray-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
