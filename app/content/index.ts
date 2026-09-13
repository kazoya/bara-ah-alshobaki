import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import { defaultLocale, isLocale, type Locale } from "../site-config";
import { ar } from "./ar";
import { en } from "./en";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = { ar, en };

export function dictionaryFor(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export async function getDictionary(): Promise<Dictionary> {
  const locale = await getLocale();
  return dictionaries[locale];
}

export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!value || !isLocale(value)) notFound();
  return value;
}

export { defaultLocale };
export type { Dictionary, Locale };
