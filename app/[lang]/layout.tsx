import type { Metadata, Viewport } from "next";
import { Amiri, Cormorant_Garamond, IBM_Plex_Sans_Arabic } from "next/font/google";
import "../globals.css";
import { PageTransition } from "../components/page-transition";
import { RevealMotion } from "../components/reveal-motion";
import { dictionaryFor, getDictionary, getLocale } from "../content";
import {
  defaultLocale,
  localeDir,
  localeHtmlLang,
  localeOgLocale,
  locales,
  localePath,
  siteUrl,
} from "../site-config";

const displayAr = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400"],
  variable: "--font-display-ar",
  display: "swap",
});

const displayEn = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-display-en",
  display: "swap",
});

const body = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const preferenceScript = `(function(){try{var d=document.documentElement,t=localStorage.getItem("theme");if(t==="light"||t==="dark")d.setAttribute("data-theme",t);var s=localStorage.getItem("text-size");if(s==="1"||s==="2")d.setAttribute("data-text-size",s);if("IntersectionObserver" in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches)d.setAttribute("data-motion","on")}catch(e){}})()`;

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = dictionaryFor(locale);

  const languages = {
    ...Object.fromEntries(locales.map((code) => [localeHtmlLang[code], localePath("", code)])),
    "x-default": localePath("", defaultLocale),
  };

  return {
    metadataBase: new URL(siteUrl),
    title: { default: dict.rootMeta.defaultTitle, template: dict.rootMeta.titleTemplate },
    description: dict.rootMeta.description,
    alternates: { canonical: localePath("", locale), languages },
    openGraph: {
      type: "website",
      siteName: dict.rootMeta.siteName,
      title: dict.rootMeta.ogTitle,
      description: dict.rootMeta.ogDescription,
      locale: localeOgLocale[locale],
      alternateLocale: locales.filter((c) => c !== locale).map((c) => localeOgLocale[c]),
      url: localePath("", locale),
      images: [{ url: "/images/olive-grove.jpg", width: 1600, height: 1067, alt: dict.rootMeta.siteName }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.rootMeta.twitterTitle,
      description: dict.rootMeta.twitterDescription,
      images: ["/images/olive-grove.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e6e2d4" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1a13" },
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return (
    <html
      lang={localeHtmlLang[locale]}
      dir={localeDir[locale]}
      data-locale={locale}
      className={`${displayAr.variable} ${displayEn.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: preferenceScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          {dict.ui.skipToContent}
        </a>
        <RevealMotion />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
