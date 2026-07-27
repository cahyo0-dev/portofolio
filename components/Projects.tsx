"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const projects = [
  {
    id: 1,
    title: "Deteksi Anomali Penggunaan Listrik",
    subtitle: "Skripsi S1 · 2025",
    desc: "Sistem IoT berbasis ESP32 dan sensor PZEM-004T untuk monitoring dan deteksi anomali konsumsi listrik secara real-time menggunakan metode Seasonal Decomposition. Dilengkapi dashboard web, riwayat data, dan notifikasi Telegram Bot otomatis.",
    stack: ["ESP32", "PZEM-004T", "Laravel", "MySQL", "Telegram API", "Chart.js"],
    type: "IoT + Web",
    color: "#00D4AA",
    year: "2025",
    github: "https://github.com/cahyo0-dev/portofolio",
    images: [
      "/images/projects/anomali-listrik/1-dashboard.png",
      "/images/projects/anomali-listrik/2-history.png",
      "/images/projects/anomali-listrik/3-history-detail.png",
      "/images/projects/anomali-listrik/4-analisis.png",
      "/images/projects/anomali-listrik/5-seasonal.png",
      "/images/projects/anomali-listrik/6-residual.png",
      "/images/projects/anomali-listrik/7-hardware-wiring.png",
      "/images/projects/anomali-listrik/8-box-design1.png",
      "/images/projects/anomali-listrik/9-box-design2.png",
      "/images/projects/anomali-listrik/10-box-design3.png",
    ],
    highlights: [
      "Dashboard monitoring real-time: tegangan, arus, daya, energi",
      "Riwayat data kelistrikan dengan filter tanggal & export Excel",
      "Analisis anomali menggunakan Seasonal Decomposition",
      "Grafik Trend, Seasonal, dan Residual interaktif",
      "Desain enclosure hardware 3D untuk ESP32 & PZEM-004T",
      "Notifikasi anomali otomatis via Telegram Bot API",
    ],
  },
  {
    id: 2,
    title: "Platform E-Commerce Penjualan Parfum",
    subtitle: "Proyek Akademik · 2024",
    desc: "Toko online full-stack dengan katalog produk dinamis, keranjang belanja, proses checkout, dan manajemen pesanan. Dibangun dengan Laravel dan database relasional antar entitas user, produk, dan transaksi.",
    stack: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    type: "Web App",
    color: "#FF6B35",
    year: "2024",
    github: "https://github.com/cahyo0-dev/portofolio",
    images: [
      "/images/projects/ecommerce-parfum/1-hero.png",
      "/images/projects/ecommerce-parfum/2-tentang.png",
      "/images/projects/ecommerce-parfum/3-menu.png",
      "/images/projects/ecommerce-parfum/4-checkout.png",
    ],
    highlights: [
      "Landing page dengan hero section & katalog produk dinamis",
      "Halaman 'Tentang Kami' dan menu produk lengkap",
      "Add-to-cart dengan keranjang belanja interaktif",
      "Proses checkout dengan detail customer & kode diskon",
      "Database relasional: user, product, transaction",
    ],
  },
  {
    id: 3,
    title: "Sistem Presensi Digital BMKG",
    subtitle: "Proyek Magang · 2024",
    desc: "Sistem presensi dan SOP digital yang dikembangkan selama magang di BMKG Tarakan. Mencakup form absensi digital dengan tanda tangan elektronik, sistem SOP terstruktur, dan panel admin untuk manajemen data pegawai.",
    stack: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
    type: "Web App",
    color: "#0077FF",
    year: "2024",
    github: "https://github.com/cahyo0-dev/portofolio",
    images: [
      "/images/projects/presensi-bmkg/1-sop.png",
      "/images/projects/presensi-bmkg/2-form-absensi.png",
      "/images/projects/presensi-bmkg/3-login.png",
      "/images/projects/presensi-bmkg/4-admin-dashboard.png",
      "/images/projects/presensi-bmkg/5-admin-users.png",
      "/images/projects/presensi-bmkg/6-admin-laporan.png",
      "/images/projects/presensi-bmkg/7-pengawas-dashboard.png",
      "/images/projects/presensi-bmkg/8-inspeksi-form.png",
      "/images/projects/presensi-bmkg/9-laporan-inspeksi.png",
    ],
    highlights: [
      "SOP digital Stasiun Meteorologi Kelas III Juwata Tarakan",
      "Form absensi dengan tanda tangan elektronik (canvas)",
      "Admin panel: dashboard, manajemen users, laporan & analytics",
      "Panel Pengawas: dashboard, form inspeksi harian (checklist), laporan",
      "Role-based access: Admin, Pengawas",
      "Export data absensi & inspeksi ke Excel",
      "Form inspeksi checklist multi-kategori (kebersihan, toilet, parkir)",
    ],
  },
  {
    id: 4,
    title: "Monitoring Suhu & Kelembapan IoT",
    subtitle: "Proyek Mandiri · 2024",
    desc: "Sistem pemantau suhu dan kelembapan real-time menggunakan sensor DHT11 dan ESP8266 dengan LED indikator. Data dikirim ke cloud dan ditampilkan di dashboard web secara langsung.",
    stack: ["ESP8266", "DHT11", "Arduino", "Blynk", "ThingSpeak"],
    type: "IoT",
    color: "#8B5CF6",
    year: "2024",
    github: "https://github.com/cahyo0-dev/portofolio",
    images: [
      "/images/projects/monitoring-suhu/1-wiring.png",
      "/images/projects/monitoring-suhu/2-dashboard.png",
    ],
    highlights: [
      "Sensor DHT11 untuk pembacaan suhu dan kelembapan",
      "LED indikator status kondisi ruangan",
      "Tampilan real-time via dashboard web",
      "Arsitektur IoT end-to-end: hardware ke cloud",
    ],
  },
];

// Image carousel component
function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const [errored, setErrored] = useState<Record<number, boolean>>({});

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  // Touch swipe
  const touchStart = useRef<number>(0);
  const handleTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
  };

  return (
    <div className="relative w-full bg-black rounded-t-xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
      {/* Images */}
      <div
        className="flex h-full transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)`, width: `${images.length * 100}%` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((src, i) => (
          <div key={i} className="relative flex-shrink-0" style={{ width: `${100 / images.length}%` }}>
            {!errored[i] ? (
              <img
                src={src}
                alt={`${title} - ${i + 1}`}
                className={`w-full h-full object-contain transition-opacity duration-300 ${loaded[i] ? "opacity-100" : "opacity-0"}`}
                onLoad={() => setLoaded((p) => ({ ...p, [i]: true }))}
                onError={() => setErrored((p) => ({ ...p, [i]: true }))}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-900 text-gray-500 text-xs font-mono">
                gambar {i + 1}
              </div>
            )}
            {!loaded[i] && !errored[i] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="w-6 h-6 border-2 border-[#00D4AA] border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Nav arrows — only if more than 1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors z-10"
            aria-label="Sebelumnya"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors z-10"
            aria-label="Selanjutnya"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all ${i === current ? "w-5 h-1.5 bg-[#00D4AA]" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"}`}
                aria-label={`Gambar ${i + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="absolute top-2 right-2 text-xs font-mono bg-black/60 text-white px-2 py-0.5 rounded-full z-10">
            {current + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
}

// Modal
function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 dark:bg-black/80 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full sm:max-w-xl dark:bg-[#141414] bg-white rounded-t-2xl sm:rounded-2xl border dark:border-white/10 border-gray-200 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent bar */}
        <div className="h-1 w-full flex-shrink-0" style={{ background: `linear-gradient(to right, ${project.color}, #00D4AA)` }} />

        {/* Carousel */}
        <ImageCarousel images={project.images} title={project.title} />

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 p-5">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-lg bg-black/60 text-white hover:text-[#00D4AA] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Meta */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded-full" style={{ backgroundColor: project.color + "20", color: project.color }}>
              {project.type}
            </span>
            <span className="text-xs dark:text-white/40 text-gray-400 font-mono">{project.subtitle}</span>
          </div>

          <h2 className="text-lg font-extrabold dark:text-white text-gray-900 mb-2 leading-tight">{project.title}</h2>
          <p className="text-sm dark:text-white/60 text-gray-600 leading-relaxed mb-4">{project.desc}</p>

          {/* Highlights */}
          <p className="text-xs font-mono dark:text-white/40 text-gray-400 uppercase tracking-wider mb-2">Fitur</p>
          <ul className="space-y-1.5 mb-4">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm dark:text-white/70 text-gray-700">
                <span className="mt-1 flex-shrink-0 text-xs" style={{ color: project.color }}>▸</span>
                {h}
              </li>
            ))}
          </ul>

          {/* Stack */}
          <p className="text-xs font-mono dark:text-white/40 text-gray-400 uppercase tracking-wider mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.stack.map((s) => (
              <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-full" style={{ backgroundColor: project.color + "15", color: project.color }}>
                {s}
              </span>
            ))}
          </div>

          {/* GitHub link */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm dark:bg-white/5 bg-gray-100 dark:text-white text-gray-900 hover:border hover:border-[#00D4AA] hover:text-[#00D4AA] transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Lihat di GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

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

  return (
    <>
      <section id="projects" ref={ref} className="py-24 dark:bg-[#111] bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="reveal text-xs font-mono text-[#00D4AA] tracking-widest uppercase mb-3">03. Proyek</p>
            <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-extrabold dark:text-white text-gray-900">Yang Sudah Dibuat</h2>
            <p className="reveal mt-3 dark:text-white/40 text-gray-400 text-sm font-mono">
              Klik untuk lihat detail & geser gambar
            </p>
          </div>

          <div className="reveal grid sm:grid-cols-2 gap-5">
            {projects.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelected(p)}
                className="text-left rounded-2xl dark:bg-white/5 bg-[#F7F6F3] border dark:border-white/10 border-gray-200 hover:border-[#00D4AA]/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group w-full overflow-hidden focus:outline-none"
              >
                {/* Preview image — first image */}
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9", background: p.color + "10" }}>
                  <img
                    src={p.images[0]}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex";
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center" style={{ color: p.color }}>
                    <svg className="w-8 h-8 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                    <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                      </svg>
                      {p.images.length} foto · lihat detail
                    </span>
                  </div>
                  {/* Image count badge */}
                  <div className="absolute top-2 right-2 text-xs font-mono bg-black/60 text-white px-2 py-0.5 rounded-full">
                    {p.images.length} foto
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full" style={{ backgroundColor: p.color + "18", color: p.color }}>
                      {p.type}
                    </span>
                    <span className="text-xs dark:text-white/30 text-gray-400 font-mono">{p.year}</span>
                  </div>
                  <h3 className="font-bold dark:text-white text-gray-900 text-sm leading-snug mb-1 group-hover:text-[#00D4AA] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs dark:text-white/40 text-gray-500 mb-3">{p.subtitle}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((s) => (
                      <span key={s} className="text-xs font-mono px-2 py-0.5 rounded-full dark:bg-white/5 bg-gray-200 dark:text-white/40 text-gray-500">
                        {s}
                      </span>
                    ))}
                    {p.stack.length > 4 && (
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full dark:bg-white/5 bg-gray-200 dark:text-white/40 text-gray-500">
                        +{p.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
