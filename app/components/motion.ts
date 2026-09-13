import type { CSSProperties } from "react";

export function stagger(index: number): CSSProperties {
  return { "--reveal-i": index } as CSSProperties;
}
