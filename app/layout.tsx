import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "תמיר ורצברגר | הרצאות על אירופה, הונגריה והמערב",
  description:
    "הזמינו הרצאה עם תמיר ורצברגר – מומחה לפוליטיקה אירופית, הונגריה, לאומיות וזהות. מרצה בכיר בנושאי גיאופוליטיקה, האיחוד האירופי והמאבקים האידיאולוגיים שמעצבים את המערב.",
  openGraph: {
    title: "תמיר ורצברגר | הרצאות על אירופה, הונגריה והמערב",
    description:
      "מומחה לפוליטיקה אירופית, לאומיות וזהות. הזמינו הרצאה מרתקת על הונגריה, אורבן והמאבקים שמעצבים את המערב.",
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "תמיר ורצברגר | הרצאות על אירופה, הונגריה והמערב",
    description:
      "מומחה לפוליטיקה אירופית, לאומיות וזהות. הזמינו הרצאה מרתקת.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} font-[family-name:var(--font-heebo)] antialiased bg-white text-[#1A1A1A]`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
