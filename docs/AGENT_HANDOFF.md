# AGENT_HANDOFF — براءة الشوبكي / Bara'ah Alshobaki

**Project path:** `C:\bara.ah_alshobaki`  
**Site URL (placeholder):** `https://bara-ah-alshobaki.vercel.app`  
**Status:** Concept demo under development — not a finished commercial catalogue.

---

## العربية — ماذا بُني؟

منصة Next.js 16 تجريبية ثنائية اللغة (عربي افتراضي RTL + إنجليزي LTR) لعرض علامة حرفية أردنية لمنتجات:

- زيوت
- خل
- مستخلصات نباتية

### الميزات المسلّمة

1. **i18n:** `app/[lang]/` مع قواميس كاملة في `app/content/ar.ts` و `en.ts`. المسار `/` يعيد التوجيه إلى `/ar`.
2. **سمة العرض:** فاتح / داكن / نظام عبر `data-theme` + سكربت تفضيل يمنع وميض الثيم.
3. **إتاحة:** رابط تخطٍ، `:focus-visible`، تحكم بحجم النص `data-text-size`، احترام `prefers-reduced-motion`.
4. **عناصر التحكم في الترويسة:** ثيم، حجم نص، تبديل لغة.
5. **حركة:** ظهور عند التمرير + خلفية canvas خفيفة لقطرات زيت وأوراق (بدون CDN).
6. **صور مؤقتة:** Unsplash في `public/images/` — موثّقة كمؤقتة حتى صور اللوغو.
7. **أقسام:** بطل، منتجات، صنعة، عن براءة، تصويت/قهوة، تواصل، تذييل مع إخلاء مسؤولية تجريبي.
8. **SEO:** metadata، `sitemap.ts`، `robots.ts`، Open Graph أساسي.
9. **تصويت الاهتمام:** Buy Me a Coffee + PayPal بريد + عدّاد LocalStorage + مشاركة/نسخ.

### قرارات التصميم

- لوحة نباتية هادئة: زيتون عميق `#14261a`، ذهب زيت `#c4a35a`، رقّ ناعم `#e6e2d4` — ليست تدرجات بنفسجية ولا كليشيه كريمي+تيراكوتا.
- خطوط: Amiri (عرض عربي)، Cormorant Garamond (عرض إنجليزي)، IBM Plex Sans Arabic (متن).
- لا بطاقات في البطل؛ مستوى بصري كامل الخلفية؛ العلامة أولاً.
- لا جوائز أو شهادات مختلقة.
- خصائص منطقية (logical) لـ RTL/LTR؛ بلا `letter-spacing` سالب على العربي.

### إلهامات GitHub / مواقع مرجعية (اتجاه وليس نسخاً)

| مرجع | ما أُخذ منه |
|------|-------------|
| NutraOil-style oil templates | سرد العملية / الفوائد بهدوء مقطعي |
| Aura Botanica–style botanical luxury | لوحة نباتية فاخرة + سرد منتج سريع |
| Villa Manodori–style artisan oils+vinegar | تموضع زيوت+خل حرفي |

### ماذا يجب أن يوفّره العميل؟

- صور منتجات حقيقية مع ملصقات لوغو براءة
- ملف لوغو SVG
- أسماء المنتجات النهائية والأسعار / SKUs
- بريد وهاتف حقيقيان (حالياً DEMO PLACEHOLDER)
- أي شهادات موثّقة فقط إن وُجدت (لا اختلاق)

### آلية التصويت

- الرابط الأساسي: `https://www.buymeacoffee.com/Asrawi612`
- بديل PayPal: `innervision2016@gmail.com`
- مفتاح LocalStorage: `bara-ah-interest-votes` (+ `:voted` لمنع التكرار في نفس المتصفح)
- العدّاد تجريبي محلي — ليس خادماً عالمياً

### تحسينات لاحقة

- استبدال الصور والشعار
- نموذج تواصل حقيقي / واتساب
- متجر أو كتالوج بأسعار
- عدّاد اهتمامات على الخادم إن لزم
- مراجعة تباين ألوان نهائية بعد الصور الحقيقية

---

## English — What was built?

A bilingual (Arabic default RTL + English LTR) Next.js 16 concept demo for Jordanian artisan **Bara'ah Alshobaki** (براءة الشوبكي): oils, vinegar, botanical extracts.

### Shipped features

Same list as Arabic section: i18n, theme/text/lang controls, a11y, reveal motion + botanical canvas, Unsplash placeholders, sectioned marketing page + thin inner routes, SEO, vote/coffee support block, demo disclaimers.

### Design decisions

Quiet botanical luxury palette; self-hosted Google fonts via `next/font`; brand-first hero with full-bleed atmospheric image; no cards in hero; no fake awards; logical CSS properties; Arabic typography without negative tracking.

### Client must provide

Branded product photography with logo labels, SVG logo, real product names/prices/SKUs, real phone/email, verified certifications only if they exist.

### Voting mechanics

Buy Me a Coffee primary link; PayPal mailto alternative; client-side LocalStorage interest counter + Web Share / copy link. Demo-only tally.

### Next improvements

Replace placeholders; real contact/CRM; optional shop; optional server-side vote store; final contrast pass with real photos.

---

## Key files

| Path | Role |
|------|------|
| `app/site-config.ts` | URL, locales, demo contact, support links |
| `app/content/ar.ts` / `en.ts` | Full dictionaries |
| `app/[lang]/layout.tsx` | Fonts, metadata, preference script |
| `app/[lang]/page.tsx` | Home composition |
| `app/components/botanical-canvas.tsx` | Oil droplet / leaf canvas |
| `app/components/vote-section.tsx` | Coffee + vote + share |
| `app/globals.css` | Theme tokens + layout |
| `public/images/` | Placeholder photography |
| `docs/BRIEF_FOR_CHATGPT.md` | Paste-ready continuation prompt |

---

*Generated for ChatGPT / agent handoff. Demo content is clearly marked.*
