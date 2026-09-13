import type { MetadataRoute } from "next";
import { defaultLocale, localeHtmlLang, localePath, locales, siteUrl } from "./site-config";

const routes = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/products", priority: 0.9 },
  { path: "/craft", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    routes.map(({ path, priority }) => ({
      url: `${siteUrl}${localePath(path, locale)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: {
          ...Object.fromEntries(
            locales.map((code) => [localeHtmlLang[code], `${siteUrl}${localePath(path, code)}`]),
          ),
          "x-default": `${siteUrl}${localePath(path, defaultLocale)}`,
        },
      },
    })),
  );
}
