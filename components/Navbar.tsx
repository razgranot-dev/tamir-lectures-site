"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLanguage } = useLanguage();
  const tr = translations.navbar;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: t(tr.links.about, lang), href: "#about" },
    { label: t(tr.links.topics, lang), href: "#topics" },
    { label: t(tr.links.book, lang), href: "#book" },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 py-3 px-6 sm:px-10 lg:px-16 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E5E2DE] shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Speaker name */}
        <span className="text-[#8B2332] font-bold text-lg select-none whitespace-nowrap">
          {t(tr.name, lang)}
        </span>

        {/* Center nav links — hidden on mobile */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className="text-sm text-[#4A4A4A] hover:text-[#8B2332] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B2332] rounded-sm"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side: language switcher + CTA */}
        <div className="flex items-center gap-4">
          {/* Language switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-sm text-[#4A4A4A] hover:text-[#8B2332] transition
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B2332] rounded-sm px-1"
            aria-label={lang === "he" ? "Switch to English" : "עבור לעברית"}
          >
            {lang === "he" ? (
              <>
                {/* UK flag */}
                <svg width="20" height="14" viewBox="0 0 60 42" className="shrink-0 rounded-[2px] shadow-sm">
                  <clipPath id="ukClip"><rect width="60" height="42" rx="2"/></clipPath>
                  <g clipPath="url(#ukClip)">
                    <rect width="60" height="42" fill="#012169"/>
                    <path d="M0 0L60 42M60 0L0 42" stroke="#fff" strokeWidth="7"/>
                    <path d="M0 0L60 42M60 0L0 42" stroke="#C8102E" strokeWidth="4.5" clipPath="url(#ukCenter)"/>
                    <clipPath id="ukCenter"><path d="M30 21L0 0v21H30V0H0zm0 0L60 42V21H30v21h30z"/></clipPath>
                    <path d="M30 0v42M0 21h60" stroke="#fff" strokeWidth="9"/>
                    <path d="M30 0v42M0 21h60" stroke="#C8102E" strokeWidth="5.5"/>
                  </g>
                </svg>
                <span className="hidden sm:inline">English</span>
              </>
            ) : (
              <>
                {/* Israel flag */}
                <svg width="20" height="14" viewBox="0 0 60 42" className="shrink-0 rounded-[2px] shadow-sm">
                  <rect width="60" height="42" fill="#fff"/>
                  <rect y="5" width="60" height="4.5" fill="#0038b8"/>
                  <rect y="32.5" width="60" height="4.5" fill="#0038b8"/>
                  <path d="M30 13l4.5 7.8H25.5zM30 29l-4.5-7.8h9z" fill="none" stroke="#0038b8" strokeWidth="1.5"/>
                </svg>
                <span className="hidden sm:inline">עברית</span>
              </>
            )}
          </button>

          {/* CTA button */}
          <button
            onClick={() => scrollTo("contact")}
            className="bg-[#8B2332] text-white font-bold text-sm rounded-full px-5 py-2 hover:bg-[#722030] transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B2332] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            {t(tr.cta, lang)}
          </button>
        </div>
      </div>
    </nav>
  );
}
