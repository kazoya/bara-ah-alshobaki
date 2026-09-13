export function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="18" rx="7" ry="10" stroke="currentColor" strokeWidth="1.4" />
        <path d="M16 6c2 3 2 6 0 9M16 6c-2 3-2 6 0 9" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="16" cy="5" r="1.6" fill="currentColor" />
      </svg>
    </span>
  );
}

/** Outward arrow; mirrored under dir="rtl" in CSS. */
export function ArrowOut() {
  return (
    <svg className="arrow-out" aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4 16 16 4M6 4h10v10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
