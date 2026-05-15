"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 dark:bg-[#0D0D0D] bg-[#F7F6F3]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="reveal text-xs font-mono text-[#00D4AA] tracking-widest uppercase mb-3">
              01. Tentang Saya
            </p>
            <h2 className="reveal text-4xl md:text-5xl font-extrabold dark:text-white text-gray-900 leading-tight mb-6">
              Membangun solusi
              <br />
              yang <span className="text-[#00D4AA]">nyata</span>.
            </h2>
            <p className="reveal dark:text-white/60 text-gray-600 leading-relaxed mb-6">
              Saya Nurcahyo Akbar, baru lulus Teknik Informatika dan sudah cukup
              sering begadang demi proyek yang "harusnya simpel tapi ternyata tidak."
            </p>
            <p className="reveal dark:text-white/60 text-gray-600 leading-relaxed mb-8">
              Selama kuliah saya aktif bikin hal nyata: toko online full-stack,
              sistem presensi yang langsung dipakai tim BMKG, sampai alat IoT yang
              bisa kirim notifikasi otomatis. Skripsi saya menggabungkan hardware
              ESP32 dengan algoritma deteksi anomali listrik — yang paling banyak
              ngajarin saya bahwa hardware dan software bisa bekerja sama kalau
              kamu mau repot sedikit. Sekarang lagi cari kesempatan untuk ikut
              bangun produk yang benar-benar dipakai orang.
            </p>

            {/* Education card */}
            <div className="reveal p-5 rounded-2xl dark:bg-white/5 bg-white border dark:border-white/10 border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00D4AA]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#00D4AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold dark:text-white text-gray-900 text-sm">
                    STMIK PPKIA Tarakanita Rahmawati
                  </p>
                  <p className="text-xs dark:text-white/50 text-gray-500 mt-0.5">
                    S1 Teknik Informatika · Sep 2022 – Mar 2026
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00D4AA]/10 border border-[#00D4AA]/30">
                    <span className="text-xs text-[#00D4AA] font-semibold">IPK 3.83 / 4.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: visual card grid */}
          <div className="reveal grid grid-cols-2 gap-4">
            {[
              {
                icon: (
                  <svg className="w-6 h-6 text-[#00D4AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: "Web Dev",
                desc: "Laravel, Next.js, TypeScript",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-[#00D4AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                  </svg>
                ),
                title: "Database",
                desc: "MySQL, Git, GitHub",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-[#00D4AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                ),
                title: "IoT",
                desc: "ESP32, Arduino, Sensor",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-[#00D4AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Data",
                desc: "Analisis & Observasi",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl dark:bg-white/5 bg-white border dark:border-white/10 border-gray-200 hover:border-[#00D4AA]/50 transition-colors group"
              >
                <div className="mb-3">{item.icon}</div>
                <p className="font-semibold dark:text-white text-gray-900 text-sm mb-1">
                  {item.title}
                </p>
                <p className="text-xs dark:text-white/40 text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
