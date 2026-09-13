import Link from "next/link";
import { getDictionary, getLocale } from "../content";
import { localePath } from "../site-config";

export default async function NotFound() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return (
    <main className="not-found" id="main">
      <p className="eyebrow">{dict.notFound.eyebrow}</p>
      <h1>{dict.notFound.title}</h1>
      <p>{dict.notFound.text}</p>
      <Link className="button button--gold" href={localePath("", locale)}>
        {dict.notFound.actionLabel}
      </Link>
    </main>
  );
}
