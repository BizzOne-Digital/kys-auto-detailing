/** Custom brand SVG icons not covered by lucide-react. */
export function GiftTagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="gift-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#CFF8FF" />
          <stop offset="1" stopColor="#00D9F5" />
        </linearGradient>
      </defs>
      <rect x="14" y="38" width="68" height="46" rx="6" stroke="url(#gift-g)" strokeWidth="3" />
      <rect x="9" y="26" width="78" height="14" rx="4" stroke="url(#gift-g)" strokeWidth="3" />
      <path d="M48 26v58" stroke="url(#gift-g)" strokeWidth="3" />
      <path d="M48 26c-6-12-22-16-24-6-1.6 7.6 14 8 24 6Z" stroke="url(#gift-g)" strokeWidth="3" strokeLinejoin="round" />
      <path d="M48 26c6-12 22-16 24-6 1.6 7.6-14 8-24 6Z" stroke="url(#gift-g)" strokeWidth="3" strokeLinejoin="round" />
      <path d="M60 58h14M60 66h10" stroke="#00D9F5" strokeWidth="3" strokeLinecap="round" opacity=".6" />
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9Z" />
    </svg>
  );
}
