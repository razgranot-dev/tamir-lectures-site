"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

export default function BookSection() {
  const { lang } = useLanguage();
  const tr = translations.book;

  return (
    <section id="book" className="relative py-28 md:py-32 px-6 sm:px-10 lg:px-20 bg-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[#E5E2DE] to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[auto_1fr] lg:gap-20">
          {/* Book Cover */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Subtle shadow behind the book */}
              <div className="absolute -inset-3 bg-gradient-to-b from-[#8B2332]/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div
                className="relative w-[220px] sm:w-[260px] md:w-[280px] overflow-hidden rounded-lg
                           shadow-[0_8px_40px_rgba(0,0,0,0.15)] ring-1 ring-black/5
                           transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ aspectRatio: "0.65" }}
              >
                <Image
                  src="/images/book-cover.jpeg"
                  alt={t(tr.coverAlt, lang)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, 280px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Book Content */}
          <div className="flex flex-col justify-center text-center lg:text-start">
            <span className="mb-4 inline-block text-sm font-semibold tracking-widest text-[#2D5F3E]">
              {t(tr.label, lang)}
            </span>

            <h2 className="mb-2 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.65rem] text-[#1A1A1A]">
              {t(tr.title, lang)}
            </h2>

            <p className="mb-2 text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
              {t(tr.subtitle, lang)}
            </p>

            <p className="mb-8 text-base font-medium text-[#7A7A7A]">
              {t(tr.author, lang)}
            </p>

            <blockquote className="relative mb-10 rounded-lg py-5 pe-6 ps-5 border-s-[3px] border-[#8B2332] bg-[#F7F7F5]">
              <p className="text-base leading-[1.85] sm:text-lg text-[#4A4A4A]">
                {t(tr.quote, lang)}
              </p>
            </blockquote>

            <div className="flex justify-center lg:justify-start">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold
                           text-[#2D5F3E] border-2 border-[#2D5F3E]/50 bg-transparent
                           hover:bg-[#2D5F3E] hover:text-white hover:border-[#2D5F3E]
                           transition-all duration-300
                           focus-visible:ring-2 focus-visible:ring-[#2D5F3E] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {t(tr.cta, lang)}
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 rtl:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
