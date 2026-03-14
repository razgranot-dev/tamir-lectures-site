"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

const symbols = ["\u2726", "\u25C7", "\u2736", "\u2662", "\u2734"];

export default function WhyInvite() {
  const { lang } = useLanguage();
  const tr = translations.why;

  return (
    <section id="why" className="relative py-24 px-6 sm:px-10 lg:px-20 bg-[#F7F7F5]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[#E5E2DE] to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            {t(tr.sectionTitle, lang)}
          </h2>
          <span className="mx-auto mt-4 block h-[3px] w-16 rounded-full bg-[#8B2332]" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tr.reasons.slice(0, 3).map((reason, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-xl bg-white border border-[#E5E2DE]
                         shadow-[0_2px_16px_rgba(0,0,0,0.06)]
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)]"
            >
              <div className="p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#2D5F3E]/[0.08] border border-[#2D5F3E]/15">
                  <span className="text-xl leading-none text-[#2D5F3E]">
                    {symbols[i]}
                  </span>
                </div>
                <h3 className="mb-3 text-lg font-bold leading-snug text-[#1A1A1A] sm:text-xl">
                  {t(reason.title, lang)}
                </h3>
                <p className="text-sm leading-relaxed text-[#7A7A7A] sm:text-base">
                  {t(reason.description, lang)}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:mx-auto lg:max-w-4xl">
          {tr.reasons.slice(3).map((reason, i) => (
            <article
              key={i + 3}
              className="group relative overflow-hidden rounded-xl bg-white border border-[#E5E2DE]
                         shadow-[0_2px_16px_rgba(0,0,0,0.06)]
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)]"
            >
              <div className="p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#2D5F3E]/[0.08] border border-[#2D5F3E]/15">
                  <span className="text-xl leading-none text-[#2D5F3E]">
                    {symbols[i + 3]}
                  </span>
                </div>
                <h3 className="mb-3 text-lg font-bold leading-snug text-[#1A1A1A] sm:text-xl">
                  {t(reason.title, lang)}
                </h3>
                <p className="text-sm leading-relaxed text-[#7A7A7A] sm:text-base">
                  {t(reason.description, lang)}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-block text-[#8B2332] font-bold rounded-full
                       px-8 py-3 border border-[#8B2332]
                       bg-transparent
                       hover:bg-[#8B2332] hover:text-white
                       transition-all duration-300
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B2332] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F7F5]"
          >
            {t(tr.cta, lang)}
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-l from-transparent via-[#E5E2DE] to-transparent" />
    </section>
  );
}
