import { useInk } from '../lib/hooks.js';

// A row of links or buttons with one highlight that glides to the active item.
// items: [{ key, label, href?, onClick?, active, count? }]
export function SegNav({ items, className = '', label, role }) {
  const [ref, style, ready] = useInk(items.map((i) => i.active).join());
  return (
    <div
      ref={ref}
      className={`seg ${ready ? 'ready' : ''} ${className}`}
      style={style}
      role={role}
      aria-label={label}
    >
      <span className="ink" aria-hidden="true" />
      {items.map((it) => {
        const common = {
          className: 'seg-item',
          'data-active': it.active ? 'true' : 'false',
        };
        return it.href ? (
          <a key={it.key} {...common} href={it.href} aria-current={it.active ? 'page' : undefined}>
            {it.label}
          </a>
        ) : (
          <button
            key={it.key}
            {...common}
            type="button"
            role={role === 'tablist' ? 'tab' : undefined}
            aria-selected={role === 'tablist' ? it.active : undefined}
            onClick={it.onClick}
          >
            {it.label}
          </button>
        );
      })}
    </div>
  );
}
