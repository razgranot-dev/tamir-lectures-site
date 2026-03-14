"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { Language } from "./translations";

interface LanguageContextValue {
  lang: Language;
  dir: "rtl" | "ltr";
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "he",
  dir: "rtl",
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with "he" to match server-rendered HTML (dir="rtl" lang="he")
  const [lang, setLang] = useState<Language>("he");
  const [mounted, setMounted] = useState(false);

  // After hydration, read saved preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en") {
      setLang("en");
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
    }
    setMounted(true);
  }, []);

  // Sync <html> attributes whenever lang changes (after mount)
  useEffect(() => {
    if (!mounted) return;
    const dir = lang === "he" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    localStorage.setItem("lang", lang);
  }, [lang, mounted]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "he" ? "en" : "he"));
  };

  const dir = lang === "he" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
