"use client";

import { useEffect, useRef } from "react";

type Mote = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  alpha: number;
  kind: "droplet" | "leaf";
  rot: number;
  spin: number;
};

/**
 * Lightweight canvas of floating oil droplets and leaf motes.
 * Inspired by APCA particles (nodes.js) but native — no CDN dependency.
 * Skips entirely when prefers-reduced-motion is set.
 */
export function BotanicalCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let running = true;
    let motes: Mote[] = [];
    let w = 0;
    let h = 0;

    const gold = { r: 196, g: 163, b: 90 };
    const leaf = { r: 90, g: 120, b: 70 };

    function resize() {
      if (!canvas || !ctx) return;
      const parent = canvas.parentElement;
      const rect = parent?.getBoundingClientRect() ?? { width: window.innerWidth, height: window.innerHeight };
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function seed() {
      const count = Math.min(48, Math.max(18, Math.floor((w * h) / 28000)));
      motes = Array.from({ length: count }, () => makeMote(true));
    }

    function makeMote(randomY: boolean): Mote {
      const kind = Math.random() > 0.55 ? "droplet" : "leaf";
      return {
        x: Math.random() * w,
        y: randomY ? Math.random() * h : h + 10,
        r: kind === "droplet" ? 1.2 + Math.random() * 3.2 : 2 + Math.random() * 4,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -0.12 - Math.random() * 0.28,
        alpha: 0.18 + Math.random() * 0.35,
        kind,
        rot: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.01,
      };
    }

    function drawDroplet(m: Mote) {
      if (!ctx) return;
      ctx.beginPath();
      ctx.ellipse(m.x, m.y, m.r * 0.7, m.r * 1.15, 0, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${gold.r},${gold.g},${gold.b},${m.alpha})`;
      ctx.fill();
    }

    function drawLeaf(m: Mote) {
      if (!ctx) return;
      ctx.save();
      ctx.translate(m.x, m.y);
      ctx.rotate(m.rot);
      ctx.beginPath();
      ctx.ellipse(0, 0, m.r * 0.55, m.r, 0, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${leaf.r},${leaf.g},${leaf.b},${m.alpha * 0.85})`;
      ctx.fill();
      ctx.restore();
    }

    function tick() {
      if (!running || !ctx) return;
      ctx.clearRect(0, 0, w, h);
      for (const m of motes) {
        m.x += m.vx;
        m.y += m.vy;
        m.rot += m.spin;
        if (m.y < -20 || m.x < -20 || m.x > w + 20) {
          Object.assign(m, makeMote(false), { y: h + 8, x: Math.random() * w });
        }
        if (m.kind === "droplet") drawDroplet(m);
        else drawLeaf(m);
      }
      raf = requestAnimationFrame(tick);
    }

    const onReduce = () => {
      if (reduce.matches) {
        running = false;
        cancelAnimationFrame(raf);
        ctx.clearRect(0, 0, w, h);
      }
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    reduce.addEventListener("change", onReduce);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      reduce.removeEventListener("change", onReduce);
    };
  }, []);

  return <canvas ref={ref} className={className ?? "botanical-canvas"} aria-hidden="true" />;
}
