"use client";

import { useEffect, useRef } from "react";

const contacts = [
  {
    label: "Email",
    value: "nurcahyoakbar670@gmail.com",
    href: "mailto:nurcahyoakbar670@gmail.com",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+62 812-5486-2196",
    href: "https://wa.me/6281254862196",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/cahyo0-dev",
    href: "https://github.com/cahyo0-dev",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Lokasi",
    value: "Tarakan, Kalimantan Utara",
    href: "https://maps.google.com/?q=Tarakan,Kalimantan+Utara",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.1 },
    );
    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 dark:bg-[#0D0D0D] bg-[#F7F6F3]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="reveal text-xs font-mono text-[#00D4AA] tracking-widest uppercase mb-3">
            05. Kontak
          </p>
          <h2 className="reveal text-4xl md:text-5xl font-extrabold dark:text-white text-gray-900">
            Mari Terhubung
          </h2>
          <p className="reveal mt-4 dark:text-white/50 text-gray-500 max-w-md mx-auto">
            Terbuka untuk peluang kerja, kolaborasi proyek, atau sekadar diskusi
            teknologi.
          </p>
        </div>

        <div className="reveal max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl dark:bg-white/5 bg-white border dark:border-white/10 border-gray-200 hover:border-[#00D4AA]/50 hover:bg-[#00D4AA]/5 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00D4AA]/10 text-[#00D4AA] flex items-center justify-center flex-shrink-0 group-hover:bg-[#00D4AA]/20 transition-colors">
                {c.icon}
              </div>
              <div>
                <p className="text-xs dark:text-white/40 text-gray-400 mb-0.5">
                  {c.label}
                </p>
                <p className="text-sm font-medium dark:text-white text-gray-900 group-hover:text-[#00D4AA] transition-colors">
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-12">
          <a
            href="mailto:nurcahyoakbar670@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#00D4AA] text-[#0D0D0D] font-bold text-sm hover:bg-[#00A880] transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Kirim Email
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t dark:border-white/10 border-gray-200 text-center">
        <p className="text-xs font-mono dark:text-white/30 text-gray-400">
          © 2026 <span className="text-[#00D4AA]">Nurcahyo Akbar</span> · Built
          with Next.js & Tailwind CSS · Hosted on Vercel
        </p>
      </div>
    </section>
  );
}
