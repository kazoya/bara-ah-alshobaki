"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useLayoutEffect, useState } from "react";
import type { Dictionary } from "../content/types";
import { isLocale, locales, type Locale } from "../site-config";

export const THEME_KEY = "theme";
export const TEXT_SIZE_KEY = "text-size";

type ThemeChoice = "system" | "light" | "dark";
const themeChoices: ThemeChoice[] = ["system", "light", "dark"];
const MAX_TEXT_STEP = 2;

function readTheme(): ThemeChoice {
  if (typeof window === "undefined") return "system";
  try {
    const stored = window.localStorage.getItem(THEME_KEY);
    return stored === "light" || stored === "dark" ? stored : "system";
  } catch {
    return "system";
  }
}

function readTextStep(): number {
  if (typeof window === "undefined") return 0;
  try {
    const stored = Number(window.localStorage.getItem(TEXT_SIZE_KEY));
    return Number.isInteger(stored) && stored > 0 && stored <= MAX_TEXT_STEP ? stored : 0;
  } catch {
    return 0;
  }
}

function applyTheme(choice: ThemeChoice) {
  const root = document.documentElement;
  if (choice === "system") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", choice);
}

function applyTextStep(step: number) {
  const root = document.documentElement;
  if (step === 0) root.removeAttribute("data-text-size");
  else root.setAttribute("data-text-size", String(step));
}

export function DisplayControls({ labels }: { labels: Dictionary["controls"] }) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<ThemeChoice>("system");
  const [textStep, setTextStep] = useState(0);

  useLayoutEffect(() => {
    const storedTheme = readTheme();
    const storedStep = readTextStep();
    applyTheme(storedTheme);
    applyTextStep(storedStep);
    queueMicrotask(() => {
      setTheme(storedTheme);
      setTextStep(storedStep);
    });
  }, []);

  const chooseTheme = useCallback((choice: ThemeChoice) => {
    setTheme(choice);
    applyTheme(choice);
    try {
      if (choice === "system") window.localStorage.removeItem(THEME_KEY);
      else window.localStorage.setItem(THEME_KEY, choice);
    } catch {
      /* storage blocked */
    }
  }, []);

  const stepText = useCallback((delta: number) => {
    setTextStep((current) => {
      const next = Math.min(MAX_TEXT_STEP, Math.max(0, current + delta));
      applyTextStep(next);
      try {
        if (next === 0) window.localStorage.removeItem(TEXT_SIZE_KEY);
        else window.localStorage.setItem(TEXT_SIZE_KEY, String(next));
      } catch {
        /* storage blocked */
      }
      return next;
    });
  }, []);

  const otherLocales = locales.filter((code) => code !== currentLocale(pathname));

  return (
    <div className="controls" role="group" aria-label={labels.groupAria}>
      <div className="controls__set" role="group" aria-label={labels.theme.label}>
        {themeChoices.map((choice) => (
          <button
            key={choice}
            type="button"
            className="controls__button"
            aria-pressed={theme === choice}
            onClick={() => chooseTheme(choice)}
          >
            {labels.theme[choice]}
          </button>
        ))}
      </div>

      <div className="controls__set" role="group" aria-label={labels.textSize.label}>
        <button
          type="button"
          className="controls__button controls__button--icon"
          onClick={() => stepText(-1)}
          disabled={textStep === 0}
          aria-label={labels.textSize.decrease}
        >
          <span aria-hidden="true">A−</span>
        </button>
        <span className="controls__meter">
          <span className="visually-hidden">{labels.textSize.current}</span>
          <span aria-hidden="true">{textStep + 1}</span>
        </span>
        <button
          type="button"
          className="controls__button controls__button--icon"
          onClick={() => stepText(1)}
          disabled={textStep === MAX_TEXT_STEP}
          aria-label={labels.textSize.increase}
        >
          <span aria-hidden="true">A+</span>
        </button>
      </div>

      <div className="controls__set" role="group" aria-label={labels.language.label}>
        {otherLocales.map((code) => (
          <Link key={code} className="controls__button" href={swapLocale(pathname, code)} lang={code}>
            {labels.language[code]}
          </Link>
        ))}
      </div>
    </div>
  );
}

function currentLocale(pathname: string): Locale | null {
  const segment = pathname.split("/")[1] ?? "";
  return isLocale(segment) ? segment : null;
}

function swapLocale(pathname: string, target: Locale): string {
  const segments = pathname.split("/");
  if (isLocale(segments[1] ?? "")) {
    segments[1] = target;
    return segments.join("/");
  }
  return `/${target}`;
}
