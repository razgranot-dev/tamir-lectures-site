"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, t } from "@/lib/translations";

interface FormData {
  fullName: string;
  organization: string;
  phone: string;
  email: string;
  eventType: string;
  message: string;
}

const initialFormData: FormData = {
  fullName: "",
  organization: "",
  phone: "",
  email: "",
  eventType: "",
  message: "",
};

const inputClasses =
  "w-full bg-white border border-[#E5E2DE] rounded-lg px-4 py-3 text-[#1A1A1A] placeholder:text-[#7A7A7A]/50 focus:border-[#8B2332] focus:outline-none focus:ring-1 focus:ring-[#8B2332] transition [&:-webkit-autofill]:shadow-[inset_0_0_0_1000px_white] [&:-webkit-autofill]:[-webkit-text-fill-color:#1A1A1A]";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const { lang } = useLanguage();
  const tr = translations.contact;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = lang === "he"
      ? `פנייה חדשה מ${formData.fullName}`
      : `New inquiry from ${formData.fullName}`;

    const body = lang === "he"
      ? [
          `שם: ${formData.fullName}`,
          `ארגון: ${formData.organization}`,
          `טלפון: ${formData.phone}`,
          `אימייל: ${formData.email}`,
          `סוג אירוע: ${formData.eventType}`,
          `הודעה: ${formData.message}`,
        ].join("\n")
      : [
          `Name: ${formData.fullName}`,
          `Organization: ${formData.organization}`,
          `Phone: ${formData.phone}`,
          `Email: ${formData.email}`,
          `Event Type: ${formData.eventType}`,
          `Message: ${formData.message}`,
        ].join("\n");

    const mailto = `mailto:tamir@wertzbergerpr.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailto, "_blank");

    setSubmitted(true);
    setFormData(initialFormData);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F7F7F5]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A]">
            {t(tr.sectionTitle, lang)}
          </h2>
          <span className="block mx-auto w-16 h-[3px] bg-[#8B2332] rounded-full mb-6" />
          <p className="text-[#7A7A7A] text-lg max-w-xl mx-auto">
            {t(tr.subtitle, lang)}
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E5E2DE] shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
            <div className="text-[#2D5F3E] text-4xl mb-4">&#10003;</div>
            <h3 className="text-2xl font-bold mb-3 text-[#1A1A1A]">
              {t(tr.success.title, lang)}
            </h3>
            <p className="text-[#7A7A7A] text-lg mb-8">
              {t(tr.success.message, lang)}
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-[#2D5F3E] underline underline-offset-4 decoration-[#2D5F3E]/40 hover:no-underline transition cursor-pointer bg-transparent border-none
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5F3E] focus-visible:ring-offset-2"
            >
              {t(tr.success.again, lang)}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm text-[#4A4A4A] mb-1.5">
                  {t(tr.labels.fullName, lang)}
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={t(tr.placeholders.fullName, lang)}
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm text-[#4A4A4A] mb-1.5">
                  {t(tr.labels.organization, lang)}
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder={t(tr.placeholders.organization, lang)}
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm text-[#4A4A4A] mb-1.5">
                  {t(tr.labels.phone, lang)}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t(tr.placeholders.phone, lang)}
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[#4A4A4A] mb-1.5">
                  {t(tr.labels.email, lang)}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t(tr.placeholders.email, lang)}
                  dir="ltr"
                  className={`${inputClasses} text-left`}
                />
              </div>
            </div>

            <div>
              <label htmlFor="eventType" className="block text-sm text-[#4A4A4A] mb-1.5">
                {t(tr.labels.eventType, lang)}
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className={`${inputClasses} ${formData.eventType === "" ? "text-[#7A7A7A]/50" : ""}`}
              >
                <option value="" disabled>
                  {t(tr.placeholders.eventType, lang)}
                </option>
                {tr.eventTypes.map((et) => (
                  <option key={et.value} value={et.value}>
                    {t(et, lang)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-[#4A4A4A] mb-1.5">
                {t(tr.labels.message, lang)}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder={t(tr.placeholders.message, lang)}
                className={`${inputClasses} resize-none`}
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#8B2332] text-white font-bold rounded-full
                           px-10 py-4 text-lg hover:bg-[#722030] shadow-lg hover:shadow-xl
                           transition-all duration-300 cursor-pointer
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B2332] focus-visible:ring-offset-2"
              >
                {t(tr.submit, lang)}
              </button>
            </div>

            <p className="text-xs text-[#7A7A7A] text-center pt-2">
              {t(tr.privacy, lang)}
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
