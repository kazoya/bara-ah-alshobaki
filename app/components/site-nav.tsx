import Link from "next/link";
import { getDictionary, getLocale } from "../content";
import { localePath } from "../site-config";
import { BrandMark } from "./brand";
import { DisplayControls } from "./display-controls";

export async function SiteNav({ tone = "on-band" }: { tone?: "on-band" | "on-surface" }) {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  const home = localePath("", locale);

  return (
    <header className={`nav wrap${tone === "on-surface" ? " nav--surface" : ""}`}>
      <Link href={home} className="brand" aria-label={dict.brand.homeAria}>
        <BrandMark />
        <span>
          <b>{dict.brand.wordmark}</b>
          <small>{dict.brand.tagline}</small>
        </span>
      </Link>

      <nav className="nav__links" aria-label={dict.nav.mainAria}>
        {dict.nav.links.map(({ path, label, hash }) => {
          const href = hash ? `${home}#${hash}` : localePath(path, locale);
          return (
            <Link key={`${path}-${hash ?? label}`} href={href}>
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="nav__aside">
        <DisplayControls labels={dict.controls} />
        <Link className="nav__contact" href={`${home}#contact`}>
          {dict.nav.contactLabel} <span aria-hidden="true">{dict.nav.contactArrow}</span>
        </Link>
      </div>

      <p className="demo-badge" role="status">
        {dict.demo.badge}
      </p>
    </header>
  );
}
