"use client";

import { useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Bahasa & Framework",
    icon: "💻",
    skills: [
      { name: "PHP / Laravel", level: 88 },
      { name: "JavaScript / TypeScript", level: 80 },
      { name: "HTML & CSS", level: 90 },
      { name: "Next.js / React", level: 72 },
    ],
  },
  {
    title: "Database & Tools",
    icon: "🛠️",
    skills: [
      { name: "MySQL", level: 82 },
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Postman / API", level: 75 },
    ],
  },
  {
    title: "IoT & Hardware",
    icon: "🔌",
    skills: [
      { name: "ESP32 / ESP8266", level: 85 },
      { name: "Arduino Uno", level: 80 },
      { name: "Sensor PZEM-004T", level: 78 },
      { name: "Blynk / ThingSpeak", level: 75 },
    ],
  },
];

const tags = [
  "Laravel", "Next.js", "TypeScript", "MySQL", "Git",
  "ESP32", "Arduino", "WhatsApp API", "Telegram Bot",
  "Blynk", "ThingSpeak", "PHP", "JavaScript",
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const barsAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            if (!barsAnimated.current) {
              barsAnimated.current = true;
              ref.current?.querySelectorAll<HTMLElement>(".skill-bar-fill").forEach((bar) => {
                const w = bar.dataset.width || "0";
                bar.style.setProperty("--skill-width", w + "%");
                bar.style.width = w + "%";
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 dark:bg-[#111] bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <p className="reveal text-xs font-mono text-[#00D4AA] tracking-widest uppercase mb-3">
            02. Keahlian
          </p>
          <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-extrabold dark:text-white text-gray-900">
            Tech Stack
          </h2>
        </div>

        <div className="reveal grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-2xl dark:bg-white/5 bg-[#F7F6F3] border dark:border-white/10 border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-bold dark:text-white text-gray-900">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm dark:text-white/70 text-gray-600">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-[#00D4AA]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full dark:bg-white/10 bg-gray-200 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#00D4AA] to-[#00A880] skill-bar-fill transition-all duration-1000 ease-out"
                        data-width={skill.level}
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tag cloud */}
        <div className="reveal flex flex-wrap gap-3 justify-center">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full text-sm font-mono dark:bg-white/5 bg-gray-100 dark:text-white/60 text-gray-600 dark:border-white/10 border border-gray-200 hover:border-[#00D4AA] hover:text-[#00D4AA] transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
