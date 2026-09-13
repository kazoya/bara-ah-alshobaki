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
      { path: "", label: "Reem Ghattas", hash: "reem" },
      { path: "", label: "Makers", hash: "makers" },
      { path: "/about", label: "About" },
      { path: "", label: "Support", hash: "vote" },
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
      eyebrow: "Jordanian craft · Herbs & extracts",
      title: { line1: "From the olive grove.", em: "To the home jar." },
      lede: "Bara'ah Alshobaki and Um Qatada — with Reem Ghattas demo goods — on a botanical marketing platform that grows with your generosity.",
      primaryCta: "First product: herbs & extracts",
      secondaryCta: "Support ongoing development",
      visualAlt: "Oil and extract bottles on a stone ledge before an olive grove at sunset",
    },
    products: {
      eyebrow: "Products",
      title: { line1: "We begin with herbs.", em: "And extracts." },
      lede: "The first product on the page is the herbs-and-extracts line — Mum’s balm — then oils and vinegar.",
      featuredLabel: "First product on the platform",
      items: [
        {
          id: "mum-balm",
          category: "Herbs & extracts",
          name: "Mum’s botanical balm",
          summary:
            "Tried in a personal family story — and more: a doctor’s testimony about what happened to her brother. We are not lying — open the video and press Share to hear it yourself.",
          image: "/images/product-mum-balm.png",
          imageAlt: "Green herbal balm jar with oils and extracts before an olive grove",
          disclaimer: "Personal experience — not medical advice.",
          featured: true,
        },
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
      ],
      viewAll: "View all lines",
    },
    partner: {
      eyebrow: "Demo partner showcase",
      title: { line1: "Reem Ghattas.", em: "Demo goods & links." },
      lede: "After the herbs product, we open space for Reem Ghattas: the testimony video, demo goods, and demo links that show how the showcase works before full launch.",
      name: "Reem Ghattas",
      videoTitle: "The doctor’s testimony — YouTube",
      videoUrl: "https://www.youtube.com/watch?v=W9wHX4fmuiQ",
      videoEmbed: "https://www.youtube-nocookie.com/embed/W9wHX4fmuiQ",
      demoLinksLabel: "Demo links",
      demoLinks: [
        {
          label: "Watch on YouTube",
          href: "https://www.youtube.com/watch?v=W9wHX4fmuiQ",
          note: "Direct video link",
        },
        {
          label: "Share the testimony",
          href: "https://www.youtube.com/watch?v=W9wHX4fmuiQ",
          note: "Open the video, then Share as invited",
        },
        {
          label: "Vote & support page",
          href: "#vote",
          note: "Internal demo on this platform",
        },
      ],
      demoGoodsLabel: "Demo goods",
      demoGoods: [
        {
          name: "Doctor testimony showcase",
          summary: "Demo narrative tied to the video — for display and development, not a final sales catalogue.",
        },
        {
          name: "Social share pack",
          summary: "Invites visitors to Share on YouTube and hear the testimony themselves.",
        },
        {
          name: "Platform demo link",
          summary: "Connects Reem’s story to the vote path and completing the platform through supporters’ generosity.",
        },
      ],
    },
    makers: {
      eyebrow: "Makers on the platform",
      title: { line1: "Bara'ah & Um Qatada.", em: "Auto product listing." },
      lede: "After Reem’s space come Bara'ah Alshobaki and Um Qatada — two makers who can insert products automatically once a batch is ready.",
      items: [
        {
          id: "baraah",
          name: "Bara'ah Alshobaki",
          role: "Maker · platform brand",
          text: "Oils, vinegar, and botanical extracts — the primary identity of the site.",
          capability: "Auto-list a new product when label and photo are ready",
        },
        {
          id: "um-qatada",
          name: "Um Qatada",
          role: "Co-maker",
          text: "Works with Bara'ah to widen the botanical shelf, and can add her products through the same auto-listing path.",
          capability: "Same auto-listing path — a ready batch appears on the page",
        },
      ],
    },
    progress: {
      eyebrow: "How far we are",
      title: { line1: "This far, for now.", em: "The rest with your kindness." },
      lede: "Development has reached this point: a premium interface, herbs first, Reem Ghattas showcase, and a path for Bara'ah and Um Qatada. Further progress will rely on your generosity — donate so the project can grow with you.",
      points: [
        "Visual landing from brand photography",
        "First product: herbs & extracts (Mum’s balm)",
        "Reem Ghattas: video + demo goods & links",
        "Bara'ah & Um Qatada: auto product listing (in progress)",
      ],
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
      lede: "If what we have built so far resonates, vote to finish the platform as a team — with a one-dollar coffee. Further progress will rely on your generosity so the project can grow with you.",
      supportNote:
        "Suggested amount: USD 1 — support for developing the marketing platform until it grows with your kindness, not a product price.",
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
        id: "mum-balm",
        category: "Herbs & extracts",
        name: "Mum’s botanical balm",
        summary:
          "First herbs-and-extracts product on the platform — personal story tied to Reem Ghattas’s video testimony.",
        image: "/images/product-mum-balm.png",
        imageAlt: "Herbal balm jar with oils before an olive grove",
        disclaimer: "Personal experience — not medical advice.",
        featured: true,
      },
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
    ],
    note: "The first image is client photography. Remaining images are temporary until Bara'ah and Um Qatada’s catalogues are complete.",
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
