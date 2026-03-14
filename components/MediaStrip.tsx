"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

const photoSrcs = [
  "/images/netanyahu.jpeg",
  "/images/eu-parliament.jpeg",
  "/images/speaking-podium.jpeg",
  "/images/speaking-conference.jpeg",
];

export default function MediaStrip() {
  const { lang } = useLanguage();
  const tr = translations.media;

  return (
    <section id="media" className="relative py-16 sm:py-20 px-6 sm:px-10 lg:px-20 bg-[#F0EEEB]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[#E5E2DE] to-transparent" />

      <div className="mx-auto max-w-6xl">
        <p className="mb-10 text-center text-xs font-medium uppercase tracking-[0.2em] text-[#7A7A7A] sm:text-sm">
          {t(tr.label, lang)}
        </p>

        {/* Photo strip */}
        <div
          className="flex items-center justify-start gap-6 overflow-x-auto sm:justify-center
                      [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
                      pb-2"
        >
          {tr.photos.map((photo, i) => (
            <div
              key={i}
              className="relative w-[200px] h-[140px] sm:w-[250px] sm:h-[170px] shrink-0
                         rounded-xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
            >
              <Image
                src={photoSrcs[i]}
                alt={t(photo.alt, lang)}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 200px, 250px"
              />
            </div>
          ))}
        </div>

        {/* Credential labels */}
        <div className="mt-10 flex items-center justify-start gap-0 overflow-x-auto sm:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {tr.credentials.map((item, i) => (
            <div key={i} className="flex shrink-0 items-center">
              {i > 0 && (
                <span className="mx-3 sm:mx-6 h-4 sm:h-5 w-px bg-[#E5E2DE]" />
              )}
              <span className="whitespace-nowrap text-sm font-medium tracking-wide text-[#7A7A7A] sm:text-base">
                {t(item, lang)}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-l from-transparent via-[#E5E2DE] to-transparent" />
    </section>
  );
}
