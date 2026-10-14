const PATHS = {
  play: <path d="M8 5.5v13L19 12z" fill="currentColor" stroke="none" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  back: <path d="M19 12H5M11 6l-6 6 6 6" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
    </>
  ),
  moon: <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" />,
  star: <path d="M12 3.6l2.6 5.4 5.9.8-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z" />,
  expand: <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />,
  compress: <path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" />,
  pencil: (
    <>
      <path d="M4 20l1-4L16.5 4.5a2 2 0 0 1 3 3L8 19z" />
      <path d="M14 7l3 3" />
    </>
  ),
  external: <path d="M14 5h5v5M19 5l-8 8M18 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4" />,
};

// Arrows that point along the reading direction flip in right-to-left pages.
const DIRECTIONAL = new Set(['arrow', 'back']);

export function Icon({ name, size = 18, className = '' }) {
  return (
    <svg
      className={`icon ${DIRECTIONAL.has(name) ? 'dir-flip ' : ''}${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}

export function Logo({ size = 30 }) {
  // Four book spines, one in each year's colour.
  return (
    <svg className="logo" width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect className="l7" x="2.45" y="13" width="5.5" height="12" rx=".6" />
      <rect className="l8" x="9.65" y="6" width="5.5" height="19" rx=".6" />
      <rect className="l9" x="16.85" y="10" width="5.5" height="15" rx=".6" />
      <rect className="l10" x="24.05" y="3" width="5.5" height="22" rx=".6" />
      <rect className="lbase" x="2" y="26.4" width="27.6" height="2" rx=".6" />
    </svg>
  );
}
