"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

export default function IdealAudiences() {
  const { lang } = useLanguage();
  const tr = translations.audiences;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="audiences" className="relative py-24 px-6 sm:px-10 lg:px-20 bg-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[#E5E2DE] to-transparent" />

      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            {t(tr.sectionTitle, lang)}
          </h2>
          <span className="mx-auto mt-4 block h-[3px] w-16 rounded-full bg-[#8B2332]" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {tr.items.map((audience, i) => (
            <span
              key={i}
              className="inline-block rounded-full px-6 py-3 text-sm font-medium sm:text-base
                         bg-[#F7F7F5] border border-[#E5E2DE] text-[#4A4A4A]
                         transition-all duration-300 hover:-translate-y-0.5
                         hover:border-[#8B2332]/50 hover:shadow-[0_4px_20px_rgba(139,35,50,0.08)]
                         cursor-default"
            >
              {t(audience, lang)}
            </span>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-base leading-relaxed text-[#7A7A7A] sm:text-lg">
            {t(tr.prompt, lang)}{" "}
            <button
              onClick={scrollToContact}
              className="cursor-pointer border-none bg-transparent font-bold text-[#8B2332]
                         underline underline-offset-4 decoration-[#8B2332]/40
                         transition-colors duration-300 hover:decoration-[#8B2332]
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B2332] focus-visible:ring-offset-2"
            >
              {t(tr.promptLink, lang)}
            </button>
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-l from-transparent via-[#E5E2DE] to-transparent" />
    </section>
  );
}
