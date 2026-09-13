import type { Metadata } from "next";
import { PageHero } from "../../components/page-hero";
import { SiteFooter } from "../../components/site-footer";
import { dictionaryFor, getDictionary, getLocale } from "../../content";
import { localePath } from "../../site-config";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = dictionaryFor(locale);
  return {
    title: dict.aboutPage.meta.title,
    description: dict.aboutPage.meta.description,
    alternates: { canonical: localePath("/about", locale) },
  };
}

export default async function AboutPage() {
  const dict = await getDictionary();
  const page = dict.aboutPage;

  return (
    <main id="main">
      <PageHero content={page} />
      <section className="section">
        <div className="wrap prose">
          {page.paragraphs.map((p) => (
            <p key={p.slice(0, 32)} className="reveal">
              {p}
            </p>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
