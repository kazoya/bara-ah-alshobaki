/**
 * Every visible string lives in a dictionary that satisfies this type, so a
 * missing translation is a build error rather than a silent fallback.
 */

export type SplitHeading = {
  line1: string;
  line2Prefix?: string;
  em: string;
};

export type PageMeta = { title: string; description: string };

export type PageHeroContent = {
  eyebrow: string;
  title: SplitHeading;
  lede: string;
};

export type ProductCard = {
  id: string;
  category: string;
  name: string;
  summary: string;
  image: string;
  imageAlt: string;
  /** Optional caution line (e.g. personal experience, not medical advice). */
  disclaimer?: string;
  featured?: boolean;
};

export type MakerCard = {
  id: string;
  name: string;
  role: string;
  text: string;
  capability: string;
};

export type PartnerDemo = {
  eyebrow: string;
  title: SplitHeading;
  lede: string;
  name: string;
  videoTitle: string;
  videoUrl: string;
  videoEmbed: string;
  demoLinksLabel: string;
  demoLinks: { label: string; href: string; note: string }[];
  demoGoodsLabel: string;
  demoGoods: { name: string; summary: string }[];
};

export type ProgressBand = {
  eyebrow: string;
  title: SplitHeading;
  lede: string;
  points: string[];
};

export type CraftStep = {
  number: string;
  title: string;
  text: string;
};

export type Dictionary = {
  brand: {
    wordmark: string;
    tagline: string;
    homeAria: string;
    footerHomeAria: string;
  };

  demo: {
    badge: string;
    disclaimer: string;
  };

  nav: {
    mainAria: string;
    links: { path: string; label: string; hash?: string }[];
    contactLabel: string;
    contactArrow: string;
  };

  footer: {
    navAria: string;
    contactLabel: string;
    copyrightName: string;
    status: string;
    placeholderNote: string;
  };

  ui: {
    skipToContent: string;
    imagePlaceholderNote: string;
  };

  controls: {
    groupAria: string;
    theme: { label: string; system: string; light: string; dark: string };
    textSize: { label: string; decrease: string; increase: string; current: string };
    language: { label: string; ar: string; en: string };
  };

  rootMeta: {
    defaultTitle: string;
    titleTemplate: string;
    description: string;
    siteName: string;
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };

  notFound: {
    eyebrow: string;
    title: string;
    text: string;
    actionLabel: string;
  };

  home: {
    hero: {
      eyebrow: string;
      title: SplitHeading;
      lede: string;
      primaryCta: string;
      secondaryCta: string;
      visualAlt: string;
    };
    products: {
      eyebrow: string;
      title: SplitHeading;
      lede: string;
      items: ProductCard[];
      viewAll: string;
      featuredLabel: string;
    };
    partner: PartnerDemo;
    makers: {
      eyebrow: string;
      title: SplitHeading;
      lede: string;
      items: MakerCard[];
    };
    progress: ProgressBand;
    craft: {
      eyebrow: string;
      title: SplitHeading;
      lede: string;
      steps: CraftStep[];
      linkLabel: string;
    };
    about: {
      eyebrow: string;
      title: SplitHeading;
      lede: string;
      body: string[];
      linkLabel: string;
    };
    vote: {
      eyebrow: string;
      title: SplitHeading;
      lede: string;
      /** Clarifies $1 support is for developing the marketing platform. */
      supportNote: string;
      coffeeCta: string;
      paypalCta: string;
      voteCta: string;
      votedLabel: string;
      countLabel: string;
      shareLabel: string;
      copyLabel: string;
      copiedLabel: string;
      note: string;
    };
    contact: {
      eyebrow: string;
      title: SplitHeading;
      lede: string;
      whatsappLabel: string;
      whatsappHint: string;
      whatsappCta: string;
      qrAlt: string;
      locationLabel: string;
      prefillNote: string;
    };
  };

  aboutPage: PageHeroContent & {
    meta: PageMeta;
    paragraphs: string[];
  };

  productsPage: PageHeroContent & {
    meta: PageMeta;
    items: ProductCard[];
    note: string;
  };

  craftPage: PageHeroContent & {
    meta: PageMeta;
    steps: CraftStep[];
    closing: string;
  };
};
