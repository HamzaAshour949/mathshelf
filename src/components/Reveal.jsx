import { useEffect, useRef, useState } from 'react';

// One shared observer: every block fades up the first time it scrolls into view.
let observer;
const callbacks = new WeakMap();

function watch(el, cb) {
  if (typeof IntersectionObserver === 'undefined') { cb(); return () => {}; }
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          callbacks.get(e.target)?.();
          observer.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  callbacks.set(el, cb);
  observer.observe(el);
  return () => observer.unobserve(el);
}

export function Reveal({ as: Tag = 'div', index = 0, className = '', children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => watch(ref.current, () => setShown(true)), []);
  return (
    <Tag
      ref={ref}
      className={`rv ${shown ? 'in' : ''} ${className}`}
      style={{ '--i': Math.min(index, 7) }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
