"use client";

import { useEffect, useRef } from "react";

const timeline = [
  {
    role: "Observer Magang",
    company: "BMKG Tarakan",
    period: "Okt 2024 – Jan 2025",
    type: "Magang",
    color: "#8B5CF6",
    points: [
      "Melakukan observasi dan validasi data cuaca harian secara akurat",
      "Mengembangkan sistem presensi digital menggunakan Laravel dan MySQL, yang langsung digunakan tim BMKG",
      "Membantu pengolahan dan pelaporan data meteorologi digital",
      "Berkoordinasi dengan tim observer untuk keakuratan data real-time",
    ],
  },
  {
    role: "Mahasiswa Peneliti (Skripsi)",
    company: "STMIK PPKIA Tarakanita",
    period: "2025",
    type: "Akademik",
    color: "#00D4AA",
    points: [
      "Merancang dan membangun sistem IoT end-to-end untuk monitoring konsumsi listrik",
      "Implementasi algoritma Seasonal Decomposition untuk deteksi anomali",
      "Integrasi hardware ESP32 + PZEM-004T dengan backend Laravel & MySQL",
      "Notifikasi anomali real-time via Telegram Bot API",
    ],
  },
  {
    role: "Proyek Mandiri",
    company: "STMIK PPKIA Tarakanita",
    period: "2023 – 2024",
    type: "Akademik",
    color: "#0077FF",
    points: [
      "Membangun Platform E-Commerce Parfum (full-stack: katalog, cart, checkout, database relasional)",
      "Mengembangkan Sistem Monitoring Suhu Ruangan berbasis IoT (DHT11 + mikrokontroler)",
      "Membangun Sistem Monitoring Air Tangki berbasis IoT (ESP8266 + sensor ultrasonik)",
      "Mengembangkan Sistem Penggajian Karyawan dengan Laravel (CRUD, laporan PDF, role-based access)",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="py-24 dark:bg-[#111] bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="reveal text-xs font-mono text-[#00D4AA] tracking-widest uppercase mb-3">04. Pengalaman</p>
          <h2 className="reveal text-4xl md:text-5xl font-extrabold dark:text-white text-gray-900">Perjalanan</h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px dark:bg-white/10 bg-gray-200 hidden md:block" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div key={item.role} className="reveal md:pl-20 relative" style={{ transitionDelay: `${i * 120}ms` }}>
                <div
                  className="hidden md:flex absolute left-5 top-5 w-7 h-7 rounded-full border-2 items-center justify-center"
                  style={{ borderColor: item.color, backgroundColor: item.color + "20" }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                </div>

                <div className="p-6 rounded-2xl dark:bg-white/5 bg-[#F7F6F3] border dark:border-white/10 border-gray-200 hover:border-[#00D4AA]/30 transition-colors">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="text-xs font-mono px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: item.color + "15", color: item.color }}
                    >
                      {item.type}
                    </span>
                    <span className="text-xs dark:text-white/40 text-gray-400 font-mono">{item.period}</span>
                  </div>

                  <h3 className="font-bold dark:text-white text-gray-900 text-lg mb-0.5">{item.role}</h3>
                  <p className="text-sm dark:text-white/50 text-gray-500 mb-4">{item.company}</p>

                  <ul className="space-y-2">
                    {item.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm dark:text-white/60 text-gray-600">
                        <span className="text-[#00D4AA] mt-1 flex-shrink-0">▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
