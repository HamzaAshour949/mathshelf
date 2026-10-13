import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from 'react';
import { STRINGS, count, format } from './i18n.js';
import { CATALOG, YEARS } from './data/catalog.js';

// Routing is hash based, so the site works on any static host without server rules.
//   #/                          home (English)         #/ar                 home (Arabic)
//   #/year/9/videos             a year's videos        #/ar/year/9/games    the same, in Arabic
//   #/year/9/games/<game-id>    a game

const subscribe = (cb) => {
  addEventListener('hashchange', cb);
  return () => removeEventListener('hashchange', cb);
};
const snapshot = () => location.hash.replace(/^#/, '') || '/';

function parse(raw) {
  let p = raw.split('?')[0];
  if (!p.startsWith('/')) p = `/${p}`;
  let lang = 'en';
  if (p === '/ar' || p.startsWith('/ar/')) {
    lang = 'ar';
    p = p.slice(3) || '/';
  }
  p = p.replace(/\/+$/, '') || '/';
  return { lang, path: p };
}

function match(path) {
  const seg = path.split('/').filter(Boolean);
  if (seg.length === 0) return { name: 'home' };
  if (seg[0] === 'year' && YEARS.includes(Number(seg[1]))) {
    const year = Number(seg[1]);
    if (seg.length === 2) return { name: 'year', year, tab: 'videos' };
    if (seg.length === 3 && seg[2] === 'videos') return { name: 'year', year, tab: 'videos' };
    if (seg.length === 3 && seg[2] === 'games') return { name: 'year', year, tab: 'games' };
    if (seg.length === 4 && seg[2] === 'games') {
      const game = CATALOG[year].games.find((g) => g.id === seg[3]);
      if (game) return { name: 'game', year, tab: 'games', game };
    }
  }
  return { name: 'notfound' };
}

const Ctx = createContext(null);
export const useApp = () => useContext(Ctx);

const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* private mode: fine */ } },
};

export function AppProvider({ children }) {
  const raw = useSyncExternalStore(subscribe, snapshot, () => '/');
  const { lang, path } = useMemo(() => parse(raw), [raw]);
  const route = useMemo(() => match(path), [path]);

  // Someone who chose Arabic last time lands on the Arabic home page.
  useEffect(() => {
    if ((location.hash === '' || location.hash === '#/') && store.get('mathshelf.lang') === 'ar') {
      location.replace('#/ar');
    }
  }, []);

  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dir = lang === 'ar' ? 'rtl' : 'ltr';
    store.set('mathshelf.lang', lang);
  }, [lang]);

  const href = useCallback(
    (to) => `#${lang === 'ar' ? '/ar' : ''}${to === '/' ? (lang === 'ar' ? '' : '/') : to}`,
    [lang],
  );

  const toggleLang = useCallback(() => {
    const next = lang === 'ar' ? 'en' : 'ar';
    location.hash = next === 'ar' ? `/ar${path === '/' ? '' : path}` : path;
  }, [lang, path]);

  const value = useMemo(() => {
    const dict = STRINGS[lang];
    return {
      lang,
      path,
      route,
      href,
      toggleLang,
      t: (key, vars) => format(dict[key] ?? STRINGS.en[key] ?? key, vars),
      tc: (kind, n) => count(lang, kind, n),
    };
  }, [lang, path, route, href, toggleLang]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
