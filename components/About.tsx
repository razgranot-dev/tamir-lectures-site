"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

export default function About() {
  const { lang } = useLanguage();
  const tr = translations.about;

  return (
    <section id="about" className="relative py-24 md:py-32 bg-white">
      {/* Subtle top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-l from-transparent via-[#E5E2DE] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Content panel */}
        <div className="relative bg-[#F7F7F5] rounded-3xl border border-[#E5E2DE] p-8 md:p-14 lg:p-20 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Text content */}
            <div className="flex-1 order-2 lg:order-1">
              {/* Section title */}
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A]">
                  {t(tr.sectionTitle, lang)}
                </h2>
                <div className="w-20 h-[3px] bg-[#8B2332] rounded-full" />
              </div>

              {/* Bio paragraphs */}
              <div className="space-y-6 mb-10">
                <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
                  {t(tr.bio1, lang)}
                </p>
                <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed">
                  {t(tr.bio2, lang)}
                </p>
              </div>

              {/* Credentials list */}
              <ul className="space-y-4">
                {tr.credentials.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2.5 block w-2 h-2 rounded-full bg-[#2D5F3E] shrink-0" />
                    <span className="text-base md:text-lg text-[#4A4A4A] leading-relaxed">
                      {t(item, lang)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Portrait image */}
            <div className="order-1 lg:order-2 shrink-0 mx-auto lg:mx-0 lg:mt-8">
              <div className="relative w-[220px] h-[280px] md:w-[260px] md:h-[340px] rounded-2xl overflow-hidden shadow-lg ring-1 ring-[#8B2332]/20">
                <Image
                  src="/images/speaking-eja.jpeg"
                  alt={t(tr.imageAlt, lang)}
                  fill
                  className="object-cover"
                />
                {/* Subtle decorative border accent */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-inset ring-[#8B2332]/15 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
