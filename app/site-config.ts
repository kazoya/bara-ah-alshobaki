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
 * Live WhatsApp for Bara'ah — scan or tap opens chat with a ready greeting.
 * Number: +962 7 9767 4753 → wa.me digits 962797674753
 */
const whatsappNumber = "962797674753";
const whatsappPrefill = "مرحباً أنسة براءة هل تخبرينا عن منتجاتك؟";

export const contact = {
  city: "Amman",
  country: "JO",
  phone: "+962797674753",
  phoneDisplay: "+962 7 9767 4753",
  whatsappNumber,
  whatsappPrefill,
  whatsappHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappPrefill)}`,
  whatsappQrSrc: "/images/whatsapp-qr.png",
} as const;

/**
 * Interest / support links for the vote section.
 * Amount is fixed at USD 1 — support for developing the marketing platform.
 */
export const support = {
  amountUsd: 1,
  /** Direct page for Asrawi’s Buy Me a Coffee account. */
  buyMeACoffee: "https://www.buymeacoffee.com/Asrawi612",
  paypalEmail: "innervision2016@gmail.com",
  /**
   * PayPal checkout (not mailto): opens payment for $1 to the business email,
   * labelled as marketing-platform development support.
   */
  paypalCheckout:
    "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=innervision2016%40gmail.com&item_name=Support%20for%20developing%20the%20marketing%20platform%20%28%D8%AF%D8%B9%D9%85%20%D9%84%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D9%85%D9%86%D8%B5%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B3%D9%88%D9%8A%D9%82%29&amount=1.00&currency_code=USD&no_shipping=1&no_note=0",
  voteStorageKey: "bara-ah-interest-votes",
} as const;
