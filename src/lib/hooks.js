import { useEffect, useLayoutEffect, useRef, useState } from 'react';

// Slides a highlight under the active item of a segmented control.
// The container must be position:relative; the item that is active carries data-active="true".
export function useInk(key) {
  const ref = useRef(null);
  const [box, setBox] = useState(null);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const measure = () => {
      const on = el.querySelector('[data-active="true"]');
      const next = on ? { x: on.offsetLeft, w: on.offsetWidth } : null;
      setBox((prev) => (prev?.x === next?.x && prev?.w === next?.w ? prev : next));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    // Switching language flips the reading direction without resizing anything.
    const mo = new MutationObserver(measure);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['dir', 'lang'] });
    document.fonts?.ready.then(measure);
    return () => { ro.disconnect(); mo.disconnect(); };
  }, [key]);

  // Animate only after the first placement, so the highlight never slides in from nowhere.
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const style = box
    ? { '--ink-x': `${box.x}px`, '--ink-w': `${box.w}px`, '--ink-o': 1 }
    : { '--ink-o': 0 };
  return [ref, style, ready];
}
