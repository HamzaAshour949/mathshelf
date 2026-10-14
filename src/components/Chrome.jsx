import { useCallback, useState } from 'react';
import { useApp } from '../app-context.jsx';
import { YEARS } from '../data/catalog.js';
import { Icon, Logo } from './Icons.jsx';
import { SegNav } from './SegNav.jsx';

function useTheme() {
  const [theme, setTheme] = useState(() => {
    const set = document.documentElement.getAttribute('data-theme');
    if (set) return set;
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const toggle = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('mathshelf.theme', next); } catch { /* private mode: fine */ }
    setTheme(next);
  }, [theme]);
  return [theme, toggle];
}

export function Header() {
  const { t, lang, route, href, toggleLang } = useApp();
  const [theme, toggleTheme] = useTheme();

  const items = YEARS.map((y) => ({
    key: y,
    active: route.year === y,
    href: href(`/year/${y}${route.tab ? `/${route.tab}` : ''}`),
    label: (
      <>
        <span className="ymark" data-year={y} aria-hidden="true" />
        <bdi lang="en">
          <span className="yr-word">Year&nbsp;</span>
          {y}
        </bdi>
      </>
    ),
  }));

  return (
    <header className="site-header">
      <div className="wrap bar">
        <a className="brand" href={href('/')}>
          <Logo />
          <span className="brand-name">Mathshelf</span>
        </a>

        <SegNav className="years" items={items} label={t('nav.years')} />

        <div className="tools">
          <button
            type="button"
            className="tool tool-lang"
            lang={lang === 'ar' ? 'en' : 'ar'}
            aria-label={t('lang.aria')}
            onClick={toggleLang}
          >
            {t('lang.label')}
          </button>
          <button
            type="button"
            className="tool tool-icon"
            aria-label={theme === 'dark' ? t('theme.toLight') : t('theme.toDark')}
            onClick={toggleTheme}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={19} />
          </button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  const { t } = useApp();
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <span>{t('footer.credit')}</span>
        <span className="foot-note">{t('footer.note')}</span>
      </div>
    </footer>
  );
}
