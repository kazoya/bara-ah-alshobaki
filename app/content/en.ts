import type { Dictionary } from "./types";

export const en: Dictionary = {
  brand: {
    wordmark: "Bara'ah Alshobaki",
    tagline: "Oils · Vinegar · Botanical Extracts",
    homeAria: "Bara'ah Alshobaki — home",
    footerHomeAria: "Home",
  },

  demo: {
    badge: "Concept demo under development",
    disclaimer:
      "This is a conceptual demo. Images are public placeholders, and contact details are fake until real brand materials arrive.",
  },

  nav: {
    mainAria: "Main navigation",
    links: [
      { path: "/products", label: "Products" },
      { path: "/craft", label: "Craft" },
      { path: "/about", label: "About" },
      { path: "", label: "Vote", hash: "vote" },
    ],
    contactLabel: "Contact",
    contactArrow: "↘",
  },

  footer: {
    navAria: "Footer navigation",
    contactLabel: "Contact",
    copyrightName: "Bara'ah Alshobaki",
    status: "Concept demo — in development",
    placeholderNote: "Contact details below are placeholders for display only.",
  },

  ui: {
    skipToContent: "Skip to content",
    imagePlaceholderNote: "Placeholder until branded photos with the Bara'ah logo arrive",
  },

  controls: {
    groupAria: "Display settings",
    theme: { label: "Theme", system: "System", light: "Light", dark: "Dark" },
    textSize: {
      label: "Text size",
      decrease: "Decrease text size",
      increase: "Increase text size",
      current: "Current text size",
    },
    language: { label: "Language", ar: "العربية", en: "English" },
  },

  rootMeta: {
    defaultTitle: "Bara'ah Alshobaki | Oils, Vinegar & Botanical Extracts",
    titleTemplate: "%s | Bara'ah Alshobaki",
    description:
      "Bara'ah Alshobaki — Jordanian artisan oils, vinegar, and botanical extracts. A quiet-luxury concept demo for the brand.",
    siteName: "Bara'ah Alshobaki",
    ogTitle: "براءة الشوبكي · Bara'ah Alshobaki",
    ogDescription: "Oils · Vinegar · Botanical extracts — Jordanian craft, quiet luxury.",
    twitterTitle: "Bara'ah Alshobaki | Oils, Vinegar & Extracts",
    twitterDescription: "A concept demo for a Jordanian botanical artisan brand.",
  },

  notFound: {
    eyebrow: "Bara'ah Alshobaki",
    title: "This page is not here.",
    text: "Return home to explore products and craft.",
    actionLabel: "Back to home",
  },

  home: {
    hero: {
      eyebrow: "Jordanian craft · Botanical products",
      title: { line1: "The quiet of oil.", em: "The clarity of plant." },
      lede: "Bara'ah Alshobaki makes oils, vinegar, and botanical extracts with artisan calm — from Jordan to your table.",
      primaryCta: "Explore products",
      secondaryCta: "Support completing this",
      visualAlt: "Olive and botanical atmosphere — placeholder image",
    },
    products: {
      eyebrow: "Products",
      title: { line1: "Three lines.", em: "One spirit." },
      lede: "Oils, vinegar, and botanical extracts — each line carries plant craft without invented awards or unverified seals.",
      items: [
        {
          id: "oils",
          category: "Oils",
          name: "Plant oils",
          summary: "Oils prepared with care — warm, golden character for the table and quiet daily use.",
          image: "/images/oil-bottle.jpg",
          imageAlt: "Oil bottle — placeholder",
        },
        {
          id: "vinegar",
          category: "Vinegar",
          name: "Artisan vinegar",
          summary: "Balanced vinegar that complements the oils and lends simple botanical depth to dishes.",
          image: "/images/vinegar.jpg",
          imageAlt: "Vinegar and spices — placeholder",
        },
        {
          id: "extracts",
          category: "Extracts",
          name: "Botanical extracts",
          summary: "Herb and plant extracts with a calm concentration for kitchen and everyday botanical care.",
          image: "/images/botanical-herbs.jpg",
          imageAlt: "Botanical herbs — placeholder",
        },
      ],
      viewAll: "View product lines",
    },
    craft: {
      eyebrow: "Craft",
      title: { line1: "From plant.", em: "To bottle." },
      lede: "A quiet process: select, extract, balance, bottle — without marketing noise.",
      steps: [
        {
          number: "01",
          title: "Plant selection",
          text: "Botanical materials chosen for quality and fit — oil, vinegar, or extract.",
        },
        {
          number: "02",
          title: "Quiet extraction",
          text: "Methods that preserve aromatic and plant character, away from loud industrial claims.",
        },
        {
          number: "03",
          title: "Balance & bottle",
          text: "Review of flavour and body, then elegant filling — awaiting final brand photography with the Bara'ah logo.",
        },
      ],
      linkLabel: "Craft details",
    },
    about: {
      eyebrow: "About Bara'ah",
      title: { line1: "Jordanian artisan.", em: "Quiet voice." },
      lede: "Bara'ah Alshobaki — a Jordanian artisan working in oils, vinegar, and botanical extracts.",
      body: [
        "This page stays conservative: a maker and her products — no invented awards or unconfirmed certificates.",
        "When the project is completed, placeholder images will be replaced with branded product photos, and contact details will become real.",
      ],
      linkLabel: "Read more",
    },
    vote: {
      eyebrow: "Support completion",
      title: { line1: "Vote to finish", em: "this product." },
      lede: "If this demo resonates, vote that you want it completed as a full team product — with a coffee, or a local interest tally.",
      supportNote:
        "Suggested amount: USD 1 — support for developing the marketing platform, not a product price.",
      coffeeCta: "Buy me a coffee — $1",
      paypalCta: "PayPal — $1",
      voteCta: "Register my interest",
      votedLabel: "Interest recorded",
      countLabel: "interest votes so far",
      shareLabel: "Share page",
      copyLabel: "Copy link",
      copiedLabel: "Copied",
      note: "The vote counter is local to your browser (demo). Coffee opens buymeacoffee.com/Asrawi612; PayPal opens a direct $1 checkout to innervision2016@gmail.com.",
    },
    contact: {
      eyebrow: "Contact",
      title: { line1: "Write to us.", em: "When channels are ready." },
      lede: "Contact details below are placeholders for this demo only.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      demoNote: "Replace these values with Bara'ah’s real details before launch.",
    },
  },

  aboutPage: {
    meta: {
      title: "About",
      description: "The story of Bara'ah Alshobaki — Jordanian botanical artisan.",
    },
    eyebrow: "About",
    title: { line1: "From Jordan.", em: "With quiet craft." },
    lede: "A conservative portrait of a maker working in oils, vinegar, and extracts — no invented awards.",
    paragraphs: [
      "Bara'ah Alshobaki is a Jordanian artisan focused on plant products: oils, vinegar, and extracts presented with calm, simple luxury.",
      "This site is a concept demo under development. The copy here describes brand direction — not a final catalogue with prices or certifications.",
      "What we need from the client to finish: product photos with the Bara'ah logo, an SVG mark, product names and prices, real contact details, and any verified certifications if they exist.",
    ],
  },

  productsPage: {
    meta: {
      title: "Products",
      description: "Bara'ah Alshobaki product lines: oils, vinegar, botanical extracts.",
    },
    eyebrow: "Products",
    title: { line1: "Clear lines.", em: "Botanical character." },
    lede: "Three showcase lines — final names and prices arrive with real brand materials.",
    items: [
      {
        id: "oils",
        category: "Oils",
        name: "Plant oils",
        summary: "Oil line: warm gold and a calm texture for table and daily use.",
        image: "/images/oil-bottle.jpg",
        imageAlt: "Oil bottle — placeholder",
      },
      {
        id: "vinegar",
        category: "Vinegar",
        name: "Artisan vinegar",
        summary: "Vinegar line: balanced acidity that complements oils and dishes.",
        image: "/images/vinegar.jpg",
        imageAlt: "Vinegar — placeholder",
      },
      {
        id: "extracts",
        category: "Extracts",
        name: "Botanical extracts",
        summary: "Extract line: quiet plant concentration for kitchen and daily care.",
        image: "/images/botanical-herbs.jpg",
        imageAlt: "Herbs — placeholder",
      },
    ],
    note: "Images are Unsplash placeholders until branded photos with the logo arrive.",
  },

  craftPage: {
    meta: {
      title: "Craft",
      description: "From plant to bottle — Bara'ah Alshobaki’s craft steps.",
    },
    eyebrow: "Craft",
    title: { line1: "A quiet process.", em: "A clear result." },
    lede: "Inspired by artisan oil-and-vinegar storytelling — without lab theatre or awards.",
    steps: [
      {
        number: "01",
        title: "Plant selection",
        text: "We start with the material: olives, herbs, or plants suited to each product line.",
      },
      {
        number: "02",
        title: "Extraction",
        text: "Extraction that keeps aromatic and plant character — artisan pace, not loud industry.",
      },
      {
        number: "03",
        title: "Balance",
        text: "Review of body, flavour, and steadiness before a batch is approved for bottling.",
      },
      {
        number: "04",
        title: "Bottle & present",
        text: "An elegant bottle awaiting final identity: Bara'ah logo, label, and real product photography.",
      },
    ],
    closing: "When Bara'ah shares real process details, these steps will be updated precisely — without exaggeration.",
  },
};
