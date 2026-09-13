# BRIEF_FOR_CHATGPT — Bara'ah Alshobaki (براءة الشوبكي)

Copy everything below this line into ChatGPT (or another agent) to continue the project.

---

You are continuing work on a **premium bilingual Next.js 16 + Tailwind 4 concept demo** for Jordanian artisan food maker **Bara'ah Alshobaki / براءة الشوبكي** (also referred to socially as براءة المجالي — brand as **براءة الشوبكي · Bara'ah Alshobaki**).

## Paths & repos

- Local: `C:\bara.ah_alshobaki`
- Pattern references: `C:\zahaalmajali` (i18n/theme/a11y), `C:\apcasystems` (particle inspiration)
- Production URL: `https://baraahalshobaki.vercel.app` (GitHub: `https://github.com/kazoya/bara-ah-alshobaki`)
- Products: oils (زيوت), vinegar (خل), botanical extracts (مستخلصات نباتية)

## Already built (do not rebuild from scratch)

- `app/[lang]/` with `ar` (default, RTL) and `en` (LTR); `/` → `/ar`
- Dictionaries: `app/content/ar.ts`, `en.ts`, `types.ts`
- Theme light/dark/system + text size + language switch; preference script (no flash)
- Skip link, focus-visible, reduced-motion, botanical canvas (native, no CDN)
- Sections: hero, products, craft, about, vote/coffee, contact, footer with demo disclaimer
- Inner pages: `/about`, `/products`, `/craft`
- Vote: BuyMeACoffee `https://www.buymeacoffee.com/Asrawi612`, PayPal `innervision2016@gmail.com`, LocalStorage counter
- SEO: metadata, sitemap, robots
- Unsplash placeholders in `public/images/` — documented as temporary
- Design: olive `#14261a`, gold `#c4a35a`, parchment `#e6e2d4`; Amiri + Cormorant Garamond + IBM Plex Sans Arabic
- Hard rules: brand-first hero, no cards in hero, no fake awards/certs, no purple/cream-terracotta AI clichés, no negative letter-spacing on Arabic

## Your job when asked

1. Replace demo contact in `app/site-config.ts` only when real details are provided.
2. Swap `public/images/` for branded photos with logo labels; update alts/copy.
3. Add real product names, prices, SKUs when supplied — never invent certifications.
4. Keep demo badge until client signs off.
5. Run `npm run build` before claiming done; prefer minimal diffs.
6. Read `docs/AGENT_HANDOFF.md` and `public/images/README.md` first.

## Client still owes

- Logo SVG
- Product photos with لوغو براءة on labels
- Real phone/email
- Final product names / prices / SKUs
- Any **real** certifications only

## Inspirations (directional)

NutraOil oil templates → process/benefit sections; Aura Botanica → botanical luxury palette & quick product narrative; Villa Manodori → artisan oils+vinegar positioning.

## Voting note

Interest votes are **browser-local demos**, not a global leaderboard. Support links signal demand to complete this as a full team product.

Continue from the existing codebase. Do not invent fake awards. Mark any remaining placeholders clearly as DEMO.
