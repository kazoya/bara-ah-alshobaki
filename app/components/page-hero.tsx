import type { PageHeroContent } from "../content/types";
import { stagger } from "./motion";
import { SiteNav } from "./site-nav";
import { SplitTitle } from "./typography";

export function PageHero({ content }: { content: PageHeroContent }) {
  return (
    <section className="page-hero" aria-labelledby="page-heading">
      <div className="hero__grain" aria-hidden="true" />
      <SiteNav />
      <div className="wrap page-hero__body">
        <p className="eyebrow eyebrow--light reveal reveal--hero" style={stagger(0)}>
          <span /> {content.eyebrow}
        </p>
        <h1 id="page-heading" className="reveal reveal--hero" style={stagger(1)}>
          <SplitTitle value={content.title} />
        </h1>
        <p className="page-hero__lede reveal reveal--hero" style={stagger(2)}>
          {content.lede}
        </p>
      </div>
    </section>
  );
}
