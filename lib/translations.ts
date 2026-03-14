export type Language = "he" | "en";

export const translations = {
  // Navbar
  navbar: {
    name: { he: "תמיר ורצברגר", en: "Tamir Watzberger" },
    links: {
      about: { he: "אודות", en: "About" },
      topics: { he: "נושאים", en: "Topics" },
      book: { he: "הספר", en: "Book" },
    },
    cta: { he: "להזמנת הרצאה", en: "Book a Lecture" },
    langSwitch: { he: "English", en: "עברית" },
  },

  // Hero
  hero: {
    title1: {
      he: "הרצאות על אירופה, הונגריה",
      en: "Lectures on Europe, Hungary",
    },
    title2: {
      he: "והמאבקים שמעצבים את המערב",
      en: "& the Struggles Shaping the West",
    },
    subtitle: {
      he: "תמיר ורצברגר – מומחה לפוליטיקה אירופית, לאומיות וזהות, מביא את הסיפור מבפנים",
      en: "Tamir Watzberger — European politics, nationalism & identity expert, telling the story from the inside",
    },
    authority: {
      he: "מנהל קשרי החוץ של הליגה לפעולה והגנה באירופה | סרן (מיל\u0027) | מחבר הספר על ויקטור אורבן והונגריה",
      en: "Director of Foreign Relations, European Jewish Association | Captain (Res.) | Author of the book on Viktor Orbán and Hungary",
    },
    ctaPrimary: { he: "להזמנת הרצאה", en: "Book a Lecture" },
    ctaSecondary: { he: "לנושאי ההרצאות", en: "View Lecture Topics" },
    scrollHint: { he: "גלילה", en: "Scroll" },
    portraitAlt: { he: "תמיר ורצברגר", en: "Tamir Watzberger" },
  },

  // About
  about: {
    sectionTitle: { he: "על תמיר ורצברגר", en: "About Tamir Watzberger" },
    bio1: {
      he: "תמיר ורצברגר הוא מנהל קשרי החוץ של הליגה לפעולה והגנה באירופה, סרן במיל\u0027 ומומחה ליחסים בין-לאומיים ולפוליטיקה אירופית. הוא נולד וגדל במושב לימן שבגליל המערבי, וחי כיום בבודפשט.",
      en: "Tamir Watzberger is the Director of Foreign Relations at the European Jewish Association, a Captain in the IDF reserves, and an expert in international relations and European politics. Born and raised in Moshav Liman in the Western Galilee, he currently lives in Budapest.",
    },
    bio2: {
      he: "בעל תואר ראשון במדעי המדינה והמזרח התיכון ותואר שני ביחסים בין-לאומיים, תמיר מביא ניסיון מעשי ואקדמי רחב בהבנת הדינמיקות הפוליטיות באירופה. מתוך חיי היומיום בבודפשט והיכרות אישית עם המרחב הפוליטי ההונגרי, הוא מציע פרספקטיבה ייחודית שמחברת בין התיאוריה לשטח.",
      en: "Holding a B.A. in Political Science and Middle Eastern Studies and an M.A. in International Relations, Tamir brings broad academic and practical experience in understanding European political dynamics. Living day-to-day in Budapest with first-hand knowledge of Hungarian politics, he offers a unique perspective that bridges theory and ground-level reality.",
    },
    credentials: [
      {
        he: "מומחה לפוליטיקה אירופית ויחסים בין-לאומיים",
        en: "Expert in European politics and international relations",
      },
      {
        he: "חי ופועל בבודפשט – מכיר את אירופה מבפנים",
        en: "Based in Budapest — knows Europe from the inside",
      },
      {
        he: 'סרן (מיל\') בצה"ל',
        en: "Captain (Res.) in the IDF",
      },
      {
        he: "מחבר ספר על ויקטור אורבן והדמוקרטיה ההונגרית",
        en: "Author of a book on Viktor Orbán and Hungarian democracy",
      },
    ],
    imageAlt: { he: "תמיר ורצברגר נואם", en: "Tamir Watzberger speaking" },
  },

  // Lecture Topics
  topics: {
    sectionTitle: { he: "נושאי הרצאות", en: "Lecture Topics" },
    subtitle: {
      he: "הרצאות מותאמות לקהלים מגוונים – מאקדמיה ועד קהילות יהודיות בתפוצות",
      en: "Lectures tailored to diverse audiences — from academia to Jewish communities worldwide",
    },
    items: [
      {
        title: {
          he: "ויקטור אורבן והונגריה של היום",
          en: "Viktor Orbán and Today's Hungary",
        },
        description: {
          he: "כיצד מנהיג אחד שינה את פני מדינה אירופית, ומה ישראל יכולה ללמוד מכך",
          en: "How one leader reshaped a European nation — and what Israel can learn from it",
        },
      },
      {
        title: {
          he: "המאבק על עתידה של אירופה",
          en: "The Battle for Europe's Future",
        },
        description: {
          he: "בין הריבונות הלאומית לפרויקט האירופי – מי מנצח?",
          en: "National sovereignty vs. the European project — who is winning?",
        },
      },
      {
        title: {
          he: "לאומיות, זהות ומסורת במערב",
          en: "Nationalism, Identity & Tradition in the West",
        },
        description: {
          he: "האם חזרת הלאומיות היא איום או הזדמנות? מבט מתוך אירופה של היום",
          en: "Is the return of nationalism a threat or an opportunity? A view from inside today's Europe",
        },
      },
      {
        title: {
          he: "ההגירה, האיחוד האירופי ומשבר הריבונות",
          en: "Immigration, the EU & the Sovereignty Crisis",
        },
        description: {
          he: "כיצד סוגיית ההגירה הפכה לקו השבר המרכזי בפוליטיקה האירופית",
          en: "How immigration became the central fault line in European politics",
        },
      },
      {
        title: {
          he: "הפוליטיקה החדשה של היבשת האירופית",
          en: "Europe's New Political Landscape",
        },
        description: {
          he: "ימין ושמאל, ישן וחדש – מפת הכוחות שמעצבת את אירופה",
          en: "Left and right, old and new — the power map reshaping Europe",
        },
      },
      {
        title: {
          he: "בין ישראל לאירופה: מבט מבפנים",
          en: "Israel & Europe: A View from the Inside",
        },
        description: {
          he: "יחסי ישראל-אירופה דרך עיניים ישראליות החיות בלב היבשת",
          en: "Israel-Europe relations through the eyes of an Israeli living at the heart of the continent",
        },
      },
    ],
    midCta: {
      he: "מעוניינים באחד הנושאים?",
      en: "Interested in one of these topics?",
    },
    midCtaLink: {
      he: "השאירו פרטים ונתאים את ההרצאה עבורכם",
      en: "Get in touch and we'll tailor the lecture for you",
    },
  },

  // Book Section
  book: {
    label: { he: "הספר", en: "The Book" },
    title: { he: "שומר הסף של אירופה", en: "Europe's Gatekeeper" },
    subtitle: {
      he: "ויקטור אורבן והמלחמה על עצמאות הונגריה",
      en: "Viktor Orbán and the Fight for Hungary's Independence",
    },
    author: { he: "מאת תמיר ורצברגר", en: "By Tamir Watzberger" },
    quote: {
      he: "מתוך היכרות אינטימית עם ההיסטוריה ההונגרית ועם הדימוי העצמי ההונגרי, חושף תמיר ורצברגר את מה שאורבן רואה כשליחותו – לנשל את ה\u2018נאו-קומוניזם\u2019 ממוקדי הכוח, להקים מבצר פטריוטי בלב היבשת ולהפוך את הונגריה למקרה מבחן מוצלח של חברה שמגינה על הקדוש והיקר לה, ועדיין לכל אזרח יש בה מקום.",
      en: "Drawing on intimate knowledge of Hungarian history and national self-image, Tamir Watzberger reveals what Orbán sees as his mission — to dismantle \u2018neo-communism\u2019 from the centres of power, to build a patriotic fortress at the heart of Europe, and to turn Hungary into a successful test case for a society that defends what it holds sacred while still making room for every citizen.",
    },
    cta: {
      he: "להזמנת הרצאה בעקבות הספר",
      en: "Book a Lecture Inspired by This Book",
    },
    coverAlt: {
      he: "שומר הסף של אירופה – ויקטור אורבן והמלחמה על עצמאות הונגריה, מאת תמיר ורצברגר",
      en: "Europe's Gatekeeper — Viktor Orbán and the Fight for Hungary's Independence, by Tamir Watzberger",
    },
  },

  // Why Invite
  why: {
    sectionTitle: { he: "למה להזמין את תמיר?", en: "Why Invite Tamir?" },
    reasons: [
      {
        title: {
          he: "היכרות אישית עם אירופה מבפנים",
          en: "First-hand knowledge of Europe from within",
        },
        description: {
          he: "תמיר חי בבודפשט ומנהל קשרים עם גורמים פוליטיים ודיפלומטיים ברחבי היבשת. הוא לא מדבר על אירופה מרחוק – הוא שם.",
          en: "Tamir lives in Budapest and maintains relationships with political and diplomatic figures across the continent. He doesn't speak about Europe from afar — he's there.",
        },
      },
      {
        title: {
          he: "ידע גיאופוליטי מעמיק",
          en: "Deep geopolitical expertise",
        },
        description: {
          he: "הכשרה אקדמית ביחסים בין-לאומיים ומדעי המדינה, בשילוב ניסיון מעשי בזירה הבין-לאומית.",
          en: "Academic training in international relations and political science, combined with hands-on experience in the international arena.",
        },
      },
      {
        title: {
          he: "סגנון הרצאה ברור ומרתק",
          en: "Clear and compelling speaking style",
        },
        description: {
          he: "תמיר מצליח להנגיש נושאים מורכבים בצורה בהירה, מעניינת ורלוונטית – בפני כל קהל.",
          en: "Tamir makes complex subjects accessible, engaging, and relevant — for any audience.",
        },
      },
      {
        title: {
          he: "חיבור בין רעיונות, מדיניות והיסטוריה",
          en: "Connecting ideas, policy & history",
        },
        description: {
          he: "ההרצאות שלו משלבות ניתוח פוליטי עדכני עם עומק היסטורי ותיאורטי.",
          en: "His lectures blend current political analysis with historical and theoretical depth.",
        },
      },
      {
        title: {
          he: "יכולת התאמה לקהלים מגוונים",
          en: "Adaptable to any audience",
        },
        description: {
          he: 'מקהלים אקדמיים ועד קהילות יהודיות בחו"ל, מפורומים מקצועיים ועד אירועים ציבוריים – תמיר יודע לדבר בגובה העיניים.',
          en: "From academic audiences to Jewish communities abroad, from professional forums to public events — Tamir speaks at eye level with every crowd.",
        },
      },
    ],
    cta: { he: "שלחו פנייה עכשיו", en: "Get in Touch Now" },
  },

  // Ideal Audiences
  audiences: {
    sectionTitle: {
      he: "למי מתאימות ההרצאות?",
      en: "Who Are the Lectures For?",
    },
    items: [
      { he: "אוניברסיטאות ומכללות", en: "Universities & Colleges" },
      { he: "פורומים מדיניים ואסטרטגיים", en: "Policy & Strategy Forums" },
      { he: "ארגונים ציוניים", en: "Zionist Organizations" },
      { he: "קהילות יהודיות בתפוצות", en: "Jewish Communities Worldwide" },
      { he: "תוכניות מנהיגות", en: "Leadership Programs" },
      { he: "פאנלים תקשורתיים", en: "Media Panels" },
      { he: "כנסים וסמינרים", en: "Conferences & Seminars" },
      { he: "מוסדות חינוך", en: "Educational Institutions" },
    ],
    prompt: {
      he: "יש לכם אירוע שמתאים?",
      en: "Have an event that fits?",
    },
    promptLink: { he: "דברו איתנו", en: "Talk to us" },
  },

  // Media Strip
  media: {
    label: { he: "פעילות בינלאומית", en: "International Activity" },
    photos: [
      {
        alt: {
          he: "תמיר ורצברגר עם ראש הממשלה נתניהו",
          en: "Tamir Watzberger with Prime Minister Netanyahu",
        },
      },
      {
        alt: { he: "בפרלמנט האירופי", en: "At the European Parliament" },
      },
      {
        alt: {
          he: "הרצאה בכנס בינלאומי",
          en: "Speaking at an international conference",
        },
      },
      {
        alt: { he: "פעילות בינלאומית", en: "International activity" },
      },
    ],
    credentials: [
      {
        he: "הליגה לפעולה והגנה באירופה",
        en: "European Jewish Association",
      },
      { he: "מרצה אורח", en: "Guest Lecturer" },
      { he: "ניתוח תקשורתי", en: "Media Analysis" },
      {
        he: 'קהילות יהודיות בחו"ל',
        en: "Jewish Communities Abroad",
      },
      { he: "פורומים בין-לאומיים", en: "International Forums" },
    ],
  },

  // Booking CTA
  bookingCta: {
    title: { he: "מוכנים להזמין הרצאה?", en: "Ready to Book a Lecture?" },
    subtitle: {
      he: 'תמיר ורצברגר זמין להרצאות, פאנלים והופעות מדיה בארץ ובחו"ל. השאירו פרטים ונחזור אליכם בהקדם.',
      en: "Tamir Watzberger is available for lectures, panels, and media appearances in Israel and abroad. Leave your details and we'll get back to you shortly.",
    },
    cta: { he: "דברו איתנו עכשיו", en: "Contact Us Now" },
  },

  // Contact Form
  contact: {
    sectionTitle: { he: "צרו קשר", en: "Contact Us" },
    subtitle: {
      he: "מעוניינים להזמין הרצאה? מלאו את הטופס ונחזור אליכם בהקדם.",
      en: "Interested in booking a lecture? Fill out the form and we'll get back to you shortly.",
    },
    labels: {
      fullName: { he: "שם מלא", en: "Full Name" },
      organization: { he: "ארגון / חברה", en: "Organization / Company" },
      phone: { he: "טלפון", en: "Phone" },
      email: { he: "אימייל", en: "Email" },
      eventType: { he: "סוג האירוע", en: "Event Type" },
      message: { he: "הודעה", en: "Message" },
    },
    placeholders: {
      fullName: { he: "שם מלא", en: "Full name" },
      organization: { he: "שם הארגון או החברה", en: "Organization or company name" },
      phone: { he: "050-0000000", en: "050-0000000" },
      email: { he: "your@email.com", en: "your@email.com" },
      eventType: { he: "בחרו סוג אירוע", en: "Select event type" },
      message: {
        he: "ספרו לנו קצת על האירוע...",
        en: "Tell us a bit about the event...",
      },
    },
    eventTypes: [
      { value: "lecture", he: "הרצאה", en: "Lecture" },
      { value: "panel", he: "פאנל", en: "Panel" },
      { value: "seminar", he: "סמינר או כנס", en: "Seminar or Conference" },
      { value: "community", he: "אירוע קהילתי", en: "Community Event" },
      { value: "media", he: "הופעה תקשורתית", en: "Media Appearance" },
      { value: "other", he: "אחר", en: "Other" },
    ],
    submit: {
      he: "שלחו פנייה – נחזור אליכם בהקדם",
      en: "Send Inquiry — We'll Get Back to You Shortly",
    },
    privacy: {
      he: "הפרטים שלכם נשמרים בסודיות מלאה ומשמשים ליצירת קשר בלבד.",
      en: "Your details are kept fully confidential and used only to contact you.",
    },
    success: {
      title: { he: "תודה על פנייתכם!", en: "Thank You for Reaching Out!" },
      message: {
        he: "נחזור אליכם בהקדם האפשרי.",
        en: "We'll get back to you as soon as possible.",
      },
      again: { he: "שליחת פנייה נוספת", en: "Send Another Inquiry" },
    },
  },

  // Footer
  footer: {
    name: { he: "תמיר ורצברגר", en: "Tamir Watzberger" },
    tagline: {
      he: "מומחה לפוליטיקה אירופית | מרצה | סופר",
      en: "European Politics Expert | Lecturer | Author",
    },
    links: {
      hero: { he: "ראשי", en: "Home" },
      about: { he: "אודות", en: "About" },
      topics: { he: "נושאי הרצאות", en: "Lecture Topics" },
      book: { he: "הספר", en: "Book" },
      contact: { he: "צרו קשר", en: "Contact" },
    },
    copyright: {
      he: "תמיר ורצברגר. כל הזכויות שמורות.",
      en: "Tamir Watzberger. All rights reserved.",
    },
  },
} as const;

export function t(
  obj: { he: string; en: string },
  lang: Language
): string {
  return obj[lang];
}
