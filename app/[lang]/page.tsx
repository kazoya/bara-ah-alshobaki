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
  const featured = t.products.items.find((p) => p.featured) ?? t.products.items[0];
  const rest = t.products.items.filter((p) => p.id !== featured.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.nameEn,
    alternateName: brand.nameAr,
    url: localePath("", locale),
    description: dict.rootMeta.description,
    telephone: contact.phone,
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
            src="/images/landing-hero.png"
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

          <article className="featured-product reveal">
            <div className="featured-product__media">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                width={1200}
                height={900}
                sizes="(max-width: 900px) 100vw, 55vw"
                priority
              />
            </div>
            <div className="featured-product__copy">
              <p className="featured-product__label">{t.products.featuredLabel}</p>
              <p className="product__cat">{featured.category}</p>
              <h3>{featured.name}</h3>
              <p>{featured.summary}</p>
              {featured.disclaimer ? (
                <p className="product__disclaimer">{featured.disclaimer}</p>
              ) : null}
            </div>
          </article>

          <div className="product-grid product-grid--rest">
            {rest.map((item, i) => (
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

      <section className="section section--alt" id="reem" aria-labelledby="reem-heading">
        <div className="wrap">
          <header className="section-head reveal">
            <p className="eyebrow">
              <span /> {t.partner.eyebrow}
            </p>
            <h2 id="reem-heading">
              <SplitTitle value={t.partner.title} />
            </h2>
            <p className="section-lede">{t.partner.lede}</p>
          </header>

          <div className="partner-grid">
            <div className="partner-video reveal">
              <div className="partner-video__frame">
                <iframe
                  title={t.partner.videoTitle}
                  src={t.partner.videoEmbed}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <a
                className="text-link"
                href={t.partner.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.partner.videoTitle} <ArrowOut />
              </a>
            </div>

            <div className="partner-side">
              <div className="partner-block reveal">
                <h3>{t.partner.demoGoodsLabel}</h3>
                <ul className="partner-goods">
                  {t.partner.demoGoods.map((g) => (
                    <li key={g.name}>
                      <strong>{g.name}</strong>
                      <span>{g.summary}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="partner-block reveal">
                <h3>{t.partner.demoLinksLabel}</h3>
                <ul className="partner-links">
                  {t.partner.demoLinks.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                        {l.label} <ArrowOut />
                      </a>
                      <small>{l.note}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="makers" aria-labelledby="makers-heading">
        <div className="wrap">
          <header className="section-head reveal">
            <p className="eyebrow">
              <span /> {t.makers.eyebrow}
            </p>
            <h2 id="makers-heading">
              <SplitTitle value={t.makers.title} />
            </h2>
            <p className="section-lede">{t.makers.lede}</p>
          </header>
          <div className="makers-grid">
            {t.makers.items.map((m, i) => (
              <article key={m.id} className="maker reveal" style={stagger(i)}>
                <p className="maker__role">{m.role}</p>
                <h3>{m.name}</h3>
                <p>{m.text}</p>
                <p className="maker__cap">{m.capability}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--band progress" id="progress" aria-labelledby="progress-heading">
        <div className="wrap progress__grid">
          <div className="progress__copy">
            <p className="eyebrow eyebrow--light reveal">
              <span /> {t.progress.eyebrow}
            </p>
            <h2 id="progress-heading" className="reveal">
              <SplitTitle value={t.progress.title} />
            </h2>
            <p className="section-lede section-lede--light reveal">{t.progress.lede}</p>
            <a className="button button--gold reveal" href="#vote">
              {t.hero.secondaryCta} <ArrowOut />
            </a>
          </div>
          <ol className="progress__points">
            {t.progress.points.map((point, i) => (
              <li key={point} className="reveal" style={stagger(i)}>
                <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                {point}
              </li>
            ))}
          </ol>
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
              src="/images/product-mum-balm.png"
              alt={featured.imageAlt}
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
            <p className="contact__demo">{t.contact.whatsappHint}</p>
          </header>

          <div className="whatsapp-card reveal">
            <a
              className="whatsapp-card__qr"
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.contact.whatsappCta}
            >
              <Image
                src={contact.whatsappQrSrc}
                alt={t.contact.qrAlt}
                width={240}
                height={240}
                sizes="240px"
              />
            </a>
            <div className="whatsapp-card__meta">
              <p className="whatsapp-card__label">{t.contact.whatsappLabel}</p>
              <p className="whatsapp-card__number" dir="ltr">
                {contact.phoneDisplay}
              </p>
              <p className="whatsapp-card__prefill">{t.contact.prefillNote}</p>
              <a
                className="button button--gold"
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.contact.whatsappCta} <ArrowOut />
              </a>
              <p className="whatsapp-card__loc">
                {t.contact.locationLabel}: {contact.city}, {contact.country}
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
