import Image from "next/image";
import Link from "next/link";
import { ArrowOut } from "../components/brand";
import { BotanicalCanvas } from "../components/botanical-canvas";
import { stagger } from "../components/motion";
import { SiteFooter } from "../components/site-footer";
import { SiteNav } from "../components/site-nav";
import { SplitTitle } from "../components/typography";
import { VoteSection } from "../components/vote-section";
import { getDictionary, getLocale } from "../content";
import { brand, contact, localePath } from "../site-config";

export default async function Home() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  const t = dict.home;
  const path = (to: string) => localePath(to, locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.nameEn,
    alternateName: brand.nameAr,
    url: localePath("", locale),
    description: dict.rootMeta.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: contact.city,
      addressCountry: contact.country,
    },
    areaServed: { "@type": "Country", name: "Jordan" },
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero" id="top" aria-labelledby="hero-heading">
        <div className="hero__media" aria-hidden="true">
          <Image
            src="/images/olive-grove.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero__photo"
          />
          <div className="hero__veil" />
          <BotanicalCanvas className="botanical-canvas botanical-canvas--hero" />
          <div className="hero__grain" />
        </div>

        <SiteNav />

        <div className="hero__content wrap">
          <div className="hero__copy">
            <p className="brand-signal reveal reveal--hero" style={stagger(0)}>
              {brand.wordmark}
            </p>
            <p className="eyebrow eyebrow--light reveal reveal--hero" style={stagger(1)}>
              <span /> {t.hero.eyebrow}
            </p>
            <h1 id="hero-heading" className="reveal reveal--hero" style={stagger(2)}>
              <SplitTitle value={t.hero.title} />
            </h1>
            <p className="hero__lede reveal reveal--hero" style={stagger(3)}>
              {t.hero.lede}
            </p>
            <div className="hero__actions reveal reveal--hero" style={stagger(4)}>
              <a className="button button--gold" href="#products">
                {t.hero.primaryCta} <ArrowOut />
              </a>
              <a className="text-link text-link--light" href="#vote">
                {t.hero.secondaryCta} <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="products" aria-labelledby="products-heading">
        <div className="wrap">
          <header className="section-head reveal">
            <p className="eyebrow">
              <span /> {t.products.eyebrow}
            </p>
            <h2 id="products-heading">
              <SplitTitle value={t.products.title} />
            </h2>
            <p className="section-lede">{t.products.lede}</p>
          </header>

          <div className="product-grid">
            {t.products.items.map((item, i) => (
              <article key={item.id} className="product reveal" style={stagger(i)}>
                <div className="product__media">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={800}
                    height={1000}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="product__ph">{dict.ui.imagePlaceholderNote}</span>
                </div>
                <p className="product__cat">{item.category}</p>
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>

          <p className="section-foot reveal">
            <Link className="text-link" href={path("/products")}>
              {t.products.viewAll} <ArrowOut />
            </Link>
          </p>
        </div>
      </section>

      <section className="section section--alt" id="craft" aria-labelledby="craft-heading">
        <div className="wrap craft-grid">
          <header className="section-head reveal">
            <p className="eyebrow">
              <span /> {t.craft.eyebrow}
            </p>
            <h2 id="craft-heading">
              <SplitTitle value={t.craft.title} />
            </h2>
            <p className="section-lede">{t.craft.lede}</p>
            <Link className="text-link" href={path("/craft")}>
              {t.craft.linkLabel} <ArrowOut />
            </Link>
          </header>
          <ol className="craft-steps">
            {t.craft.steps.map((step, i) => (
              <li key={step.number} className="reveal" style={stagger(i)}>
                <span aria-hidden="true">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="about" aria-labelledby="about-heading">
        <div className="wrap about-grid">
          <div className="about__media reveal">
            <Image
              src="/images/oil-pour.jpg"
              alt={dict.ui.imagePlaceholderNote}
              width={900}
              height={1100}
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </div>
          <div className="about__copy">
            <p className="eyebrow reveal">
              <span /> {t.about.eyebrow}
            </p>
            <h2 id="about-heading" className="reveal">
              <SplitTitle value={t.about.title} />
            </h2>
            <p className="section-lede reveal">{t.about.lede}</p>
            {t.about.body.map((para) => (
              <p key={para.slice(0, 24)} className="about__p reveal">
                {para}
              </p>
            ))}
            <Link className="text-link reveal" href={path("/about")}>
              {t.about.linkLabel} <ArrowOut />
            </Link>
          </div>
        </div>
      </section>

      <VoteSection content={t.vote} shareTitle={dict.rootMeta.siteName} />

      <section className="section" id="contact" aria-labelledby="contact-heading">
        <div className="wrap contact-grid">
          <header className="section-head reveal">
            <p className="eyebrow">
              <span /> {t.contact.eyebrow}
            </p>
            <h2 id="contact-heading">
              <SplitTitle value={t.contact.title} />
            </h2>
            <p className="section-lede">{t.contact.lede}</p>
            <p className="contact__demo">{t.contact.demoNote}</p>
          </header>
          <dl className="contact-list reveal">
            <div>
              <dt>{t.contact.emailLabel}</dt>
              <dd>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <small> · {contact.emailNote}</small>
              </dd>
            </div>
            <div>
              <dt>{t.contact.phoneLabel}</dt>
              <dd>
                <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
                <small> · {contact.phoneNote}</small>
              </dd>
            </div>
            <div>
              <dt>{t.contact.locationLabel}</dt>
              <dd>
                {contact.city}, {contact.country}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
