"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

const linkKeys = ["hero", "about", "topics", "book", "contact"] as const;

export default function Footer() {
  const { lang } = useLanguage();
  const tr = translations.footer;

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1A1A1A] border-t border-[#8B2332]/30 py-14 md:py-16">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <h3 className="text-2xl font-bold text-[#8B2332]">{t(tr.name, lang)}</h3>

        <p className="text-white/50 text-sm tracking-wide">
          {t(tr.tagline, lang)}
        </p>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {linkKeys.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={(e) => scrollTo(e, key)}
              className="text-sm text-white/40 hover:text-[#8B2332] transition
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B2332] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A] rounded"
            >
              {t(tr.links[key], lang)}
            </a>
          ))}
        </nav>

        <p className="text-sm text-white/40">
          <a
            href="mailto:tamir@example.com"
            className="hover:text-[#8B2332] transition
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B2332] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A] rounded"
          >
            tamir@example.com
          </a>
        </p>

        <div className="w-20 h-px bg-[#8B2332]/20 mx-auto" />

        <p className="text-xs text-white/30">
          &copy; 2026 {t(tr.copyright, lang)}
        </p>
      </div>
    </footer>
  );
}
