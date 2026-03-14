"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

export default function LectureTopics() {
  const { lang } = useLanguage();
  const tr = translations.topics;

  return (
    <section id="topics" className="relative py-24 px-6 sm:px-10 lg:px-20 bg-[#F7F7F5]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[#E5E2DE] to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-[#1A1A1A]">
            {t(tr.sectionTitle, lang)}
          </h2>
          <span className="mx-auto mt-4 block h-[3px] w-16 rounded-full bg-[#8B2332]" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg text-[#7A7A7A]">
            {t(tr.subtitle, lang)}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tr.items.map((topic, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-xl bg-white border border-[#E5E2DE]
                         shadow-[0_2px_16px_rgba(0,0,0,0.06)]
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#E5E2DE]/60"
            >
              <span
                className="absolute inset-y-0 start-0 w-[3px] rounded-s-xl bg-gradient-to-b from-[#2D5F3E] to-[#2D5F3E]/30
                           transition-all duration-300 group-hover:w-[4px]"
              />
              <div className="p-7 ps-9">
                <h3 className="mb-3 text-lg font-bold leading-snug sm:text-xl text-[#1A1A1A]">
                  {t(topic.title, lang)}
                </h3>
                <p className="text-sm leading-relaxed sm:text-base text-[#7A7A7A]">
                  {t(topic.description, lang)}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="mt-14 text-center">
          <p className="text-base leading-relaxed sm:text-lg text-[#7A7A7A]">
            {t(tr.midCta, lang)}{" "}
            <a
              href="#contact"
              className="font-bold text-[#8B2332] underline underline-offset-4 decoration-[#8B2332]/40
                         hover:decoration-[#8B2332] transition-colors duration-300
                         focus-visible:ring-2 focus-visible:ring-[#8B2332] rounded"
            >
              {t(tr.midCtaLink, lang)}
            </a>
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-l from-transparent via-[#E5E2DE] to-transparent" />
    </section>
  );
}
