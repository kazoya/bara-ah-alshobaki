// Canonical origin for metadata, sitemap and robots.
// Update after the production domain is confirmed.
export const siteUrl = "https://baraahalshobaki.vercel.app";

export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

/** Jordanian artisan audience first — bare "/" redirects here. */
export const defaultLocale: Locale = "ar";

export const localeDir: Record<Locale, "rtl" | "ltr"> = { ar: "rtl", en: "ltr" };

export const localeHtmlLang: Record<Locale, string> = { ar: "ar-JO", en: "en" };

export const localeOgLocale: Record<Locale, string> = { ar: "ar_JO", en: "en_US" };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Route paths without a locale prefix. */
export const routePaths = ["", "/about", "/products", "/craft"] as const;
export type RoutePath = (typeof routePaths)[number];

export function localePath(path: string, locale: Locale): string {
  return path === "" || path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export const brand = {
  nameAr: "براءة الشوبكي",
  nameEn: "Bara'ah Alshobaki",
  wordmark: "براءة الشوبكي · Bara'ah Alshobaki",
  shortAr: "براءة الشوبكي",
  shortEn: "Bara'ah Alshobaki",
} as const;

/**
 * DEMO PLACEHOLDERS — replace with real client contact before launch.
 * Do not treat these as live business channels.
 */
export const contact = {
  email: "demo@bara-ah-alshobaki.example",
  emailNote: "DEMO PLACEHOLDER",
  phone: "+962700000000",
  phoneDisplay: "+962 70 000 0000",
  phoneNote: "DEMO PLACEHOLDER",
  city: "Amman",
  country: "JO",
} as const;

/** Interest / "buy me a coffee" links for the vote section. */
export const support = {
  buyMeACoffee: "https://www.buymeacoffee.com/Asrawi612",
  paypalEmail: "innervision2016@gmail.com",
  paypalMailto: "mailto:innervision2016@gmail.com?subject=Bara%27ah%20Alshobaki%20demo%20support",
  voteStorageKey: "bara-ah-interest-votes",
} as const;
