"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function RevealMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (root.getAttribute("data-motion") !== "on") return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-revealed)"),
    );
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    for (const target of targets) observer.observe(target);
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
