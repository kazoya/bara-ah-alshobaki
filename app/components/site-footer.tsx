import Link from "next/link";
import { getDictionary, getLocale } from "../content";
import { contact, localePath } from "../site-config";
import { BrandMark } from "./brand";

export async function SiteFooter() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  const home = localePath("", locale);

  return (
    <footer className="footer">
      <div className="wrap footer__main">
        <Link href={home} className="brand brand--footer" aria-label={dict.brand.footerHomeAria}>
          <BrandMark />
          <span>
            <b>{dict.brand.wordmark}</b>
            <small>{dict.brand.tagline}</small>
          </span>
        </Link>
        <nav className="footer__links" aria-label={dict.footer.navAria}>
          {dict.nav.links.map(({ path, label, hash }) => {
            const href = hash ? `${home}#${hash}` : localePath(path, locale);
            return (
              <Link key={`${path}-${hash ?? label}`} href={href}>
                {label}
              </Link>
            );
          })}
          <Link href={`${home}#contact`}>{dict.footer.contactLabel}</Link>
        </nav>
      </div>
      <div className="wrap footer__meta">
        <p>{dict.footer.placeholderNote}</p>
        <p className="footer__demo">{dict.demo.disclaimer}</p>
        <p className="footer__contact-line">
          <span>
            {contact.email} <small>({contact.emailNote})</small>
          </span>
          <span>
            {contact.phoneDisplay} <small>({contact.phoneNote})</small>
          </span>
        </p>
      </div>
      <div className="wrap footer__bottom">
        <span>
          © {new Date().getFullYear()} {dict.footer.copyrightName}
        </span>
        <span>{dict.footer.status}</span>
      </div>
    </footer>
  );
}
