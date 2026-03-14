"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

export default function Hero() {
  const { lang } = useLanguage();
  const tr = translations.hero;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F7F7F5] to-white overflow-hidden">
      {/* Thin green accent strip at very top */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-[#2D5F3E]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 pt-28">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center md:text-start order-2 md:order-1">
            <div className="hidden md:block w-16 h-[3px] bg-[#8B2332] mb-8 rounded-full" />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.35] tracking-tight mb-6 text-[#1A1A1A]">
              {t(tr.title1, lang)}
              <br />
              <span className="text-[#8B2332]">{t(tr.title2, lang)}</span>
            </h1>

            <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed mb-6 max-w-2xl">
              {t(tr.subtitle, lang)}
            </p>

            {/* Authority line */}
            <div className="flex items-center justify-center md:justify-start gap-2 mb-10">
              <span className="block w-1.5 h-1.5 rounded-full bg-[#2D5F3E] shrink-0" />
              <p className="text-sm md:text-base text-[#7A7A7A] leading-relaxed">
                {t(tr.authority, lang)}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-4 bg-[#8B2332] text-white font-bold text-lg rounded-full
                           hover:bg-[#722030] shadow-[0_2px_16px_rgba(139,35,50,0.2)]
                           transition-all duration-300 cursor-pointer
                           focus-visible:ring-2 focus-visible:ring-[#8B2332] focus-visible:ring-offset-2 focus-visible:ring-offset-white
                           w-full sm:w-auto"
              >
                {t(tr.ctaPrimary, lang)}
              </button>
              <button
                onClick={() => scrollTo("topics")}
                className="px-8 py-4 border-2 border-[#2D5F3E] text-[#2D5F3E] font-bold text-lg rounded-full
                           hover:bg-[#2D5F3E] hover:text-white
                           transition-all duration-300 cursor-pointer
                           focus-visible:ring-2 focus-visible:ring-[#2D5F3E] focus-visible:ring-offset-2 focus-visible:ring-offset-white
                           w-full sm:w-auto"
              >
                {t(tr.ctaSecondary, lang)}
              </button>
            </div>
          </div>

          {/* Portrait image */}
          <div className="order-1 md:order-2 shrink-0">
            <div
              className="w-[220px] h-[275px] md:w-[280px] md:h-[350px]
                          rounded-2xl
                          relative overflow-hidden
                          shadow-[0_2px_16px_rgba(0,0,0,0.06)]
                          border-r-[3px] border-[#8B2332]"
            >
              <Image
                src="/images/portrait.jpeg"
                alt={t(tr.portraitAlt, lang)}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[#7A7A7A] text-xs tracking-widest">{t(tr.scrollHint, lang)}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#7A7A7A]">
          <path d="M4 7L10 13L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
