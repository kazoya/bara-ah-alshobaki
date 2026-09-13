import type { Metadata } from "next";
import { PageHero } from "../../components/page-hero";
import { SiteFooter } from "../../components/site-footer";
import { stagger } from "../../components/motion";
import { dictionaryFor, getDictionary, getLocale } from "../../content";
import { localePath } from "../../site-config";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = dictionaryFor(locale);
  return {
    title: dict.craftPage.meta.title,
    description: dict.craftPage.meta.description,
    alternates: { canonical: localePath("/craft", locale) },
  };
}

export default async function CraftPage() {
  const dict = await getDictionary();
  const page = dict.craftPage;

  return (
    <main id="main">
      <PageHero content={page} />
      <section className="section">
        <div className="wrap">
          <ol className="craft-steps craft-steps--page">
            {page.steps.map((step, i) => (
              <li key={step.number} className="reveal" style={stagger(i)}>
                <span aria-hidden="true">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="section-note reveal">{page.closing}</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
