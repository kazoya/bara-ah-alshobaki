import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { ar } from "./content/ar";
import { defaultLocale, localeDir, localeHtmlLang } from "./site-config";

const body = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: ar.notFound.title,
  description: ar.notFound.text,
};

export default function GlobalNotFound() {
  return (
    <html
      lang={localeHtmlLang[defaultLocale]}
      dir={localeDir[defaultLocale]}
      className={body.variable}
    >
      <body>
        <main className="not-found">
          <p className="eyebrow">{ar.notFound.eyebrow}</p>
          <h1>{ar.notFound.title}</h1>
          <p>{ar.notFound.text}</p>
          <a className="button button--gold" href={`/${defaultLocale}`}>
            {ar.notFound.actionLabel}
          </a>
        </main>
      </body>
    </html>
  );
}
