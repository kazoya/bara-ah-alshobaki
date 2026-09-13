import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "../../components/page-hero";
import { SiteFooter } from "../../components/site-footer";
import { stagger } from "../../components/motion";
import { dictionaryFor, getDictionary, getLocale } from "../../content";
import { localePath } from "../../site-config";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = dictionaryFor(locale);
  return {
    title: dict.productsPage.meta.title,
    description: dict.productsPage.meta.description,
    alternates: { canonical: localePath("/products", locale) },
  };
}

export default async function ProductsPage() {
  const dict = await getDictionary();
  const page = dict.productsPage;

  return (
    <main id="main">
      <PageHero content={page} />
      <section className="section">
        <div className="wrap">
          <div className="product-grid">
            {page.items.map((item, i) => (
              <article key={item.id} className="product reveal" style={stagger(i)}>
                <div className="product__media">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={800}
                    height={1000}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {!item.featured ? (
                    <span className="product__ph">{dict.ui.imagePlaceholderNote}</span>
                  ) : null}
                </div>
                <p className="product__cat">{item.category}</p>
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
                {item.disclaimer ? <p className="product__disclaimer">{item.disclaimer}</p> : null}
              </article>
            ))}
          </div>
          <p className="section-note reveal">{page.note}</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
