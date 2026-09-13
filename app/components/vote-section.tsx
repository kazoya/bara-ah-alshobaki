"use client";

import { useCallback, useEffect, useState } from "react";
import type { Dictionary } from "../content/types";
import { support } from "../site-config";
import { ArrowOut } from "./brand";

export function VoteSection({
  content,
  shareTitle,
}: {
  content: Dictionary["home"]["vote"];
  shareTitle: string;
}) {
  const [count, setCount] = useState(0);
  const [voted, setVoted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(support.voteStorageKey);
      const n = raw ? Number(raw) : 0;
      setCount(Number.isFinite(n) && n >= 0 ? Math.floor(n) : 0);
      setVoted(window.localStorage.getItem(`${support.voteStorageKey}:voted`) === "1");
    } catch {
      /* ignore */
    }
  }, []);

  const vote = useCallback(() => {
    if (voted) return;
    setVoted(true);
    setCount((c) => {
      const next = c + 1;
      try {
        window.localStorage.setItem(support.voteStorageKey, String(next));
        window.localStorage.setItem(`${support.voteStorageKey}:voted`, "1");
      } catch {
        /* ignore */
      }
      return next;
    });
  }, [voted]);

  const share = useCallback(async () => {
    const url = window.location.href.split("#")[0] + "#vote";
    try {
      if (navigator.share) {
        await navigator.share({ title: shareTitle, url });
        return;
      }
    } catch {
      /* fall through to copy */
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }, [shareTitle]);

  const copy = useCallback(async () => {
    const url = window.location.href.split("#")[0] + "#vote";
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <section className="section section--band vote" id="vote" aria-labelledby="vote-heading">
      <div className="wrap vote__grid">
        <div className="vote__copy">
          <p className="eyebrow eyebrow--light reveal">
            <span /> {content.eyebrow}
          </p>
          <h2 id="vote-heading" className="reveal">
            {content.title.line1}
            <br />
            <em>{content.title.em}</em>
          </h2>
          <p className="section-lede section-lede--light reveal">{content.lede}</p>
          <p className="vote__note reveal">{content.note}</p>
        </div>

        <div className="vote__panel reveal">
          <p className="vote__count">
            <strong>{count}</strong>
            <span>{content.countLabel}</span>
          </p>

          <div className="vote__actions">
            <a
              className="button button--gold"
              href={support.buyMeACoffee}
              target="_blank"
              rel="noreferrer"
            >
              {content.coffeeCta} <ArrowOut />
            </a>
            <a className="button button--ghost-light" href={support.paypalMailto}>
              {content.paypalCta}
            </a>
            <button
              type="button"
              className="button button--outline-light"
              onClick={vote}
              disabled={voted}
              aria-pressed={voted}
            >
              {voted ? content.votedLabel : content.voteCta}
            </button>
          </div>

          <div className="vote__share">
            <button type="button" className="text-link text-link--light" onClick={share}>
              {content.shareLabel}
            </button>
            <button type="button" className="text-link text-link--light" onClick={copy}>
              {copied ? content.copiedLabel : content.copyLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
