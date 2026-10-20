import { useEffect, useRef } from 'react';
import { AppProvider, useApp } from './app-context.jsx';
import { Footer, Header } from './components/Chrome.jsx';
import GamePage from './pages/GamePage.jsx';
import Home from './pages/Home.jsx';
import Year from './pages/Year.jsx';

function NotFound() {
  const { t, href } = useApp();
  return (
    <div className="wrap notfound">
      <h1>{t('nf.title')}</h1>
      <a className="btn" href={href('/')}>{t('nf.back')}</a>
    </div>
  );
}

function Shell() {
  const { t, lang, route, path } = useApp();
  const main = useRef(null);
  const first = useRef(true);

  // A new page starts at the top, and keyboard focus moves with it.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (first.current) { first.current = false; return; }
    main.current?.focus({ preventScroll: true });
  }, [route.name, route.year, route.game?.id]);

  // The page takes the colour of its year (see tokens.css); the home page stays neutral.
  useEffect(() => {
    const el = document.documentElement;
    if (route.year) el.dataset.year = String(route.year);
    else delete el.dataset.year;
  }, [route.year]);

  useEffect(() => {
    const name =
      route.name === 'game' ? (route.game.lesson || route.game.title)
        : route.name === 'year' ? `Year ${route.year} · ${t(`tab.${route.tab}`)}`
          : route.name === 'notfound' ? t('nf.title') : '';
    document.title = name ? `${name} — Mathshelf` : 'Mathshelf';
  }, [route, lang, t, path]);

  // A game takes the whole window, so it has no site header or footer around it.
  const immersive = route.name === 'game';
  const key = `${route.name}:${route.year ?? ''}:${route.game?.id ?? ''}`;
  return (
    <>
      <a className="skip" href="#main" onClick={(e) => { e.preventDefault(); main.current?.focus(); }}>{t('skip')}</a>
      {!immersive && <Header />}
      <main id="main" ref={main} tabIndex={-1} key={key} className={immersive ? 'immersive' : route.name === 'year' ? 'page page-year' : 'page'}>
        {route.name === 'home' && <Home />}
        {route.name === 'year' && <Year year={route.year} tab={route.tab} />}
        {route.name === 'game' && <GamePage year={route.year} game={route.game} />}
        {route.name === 'notfound' && <NotFound />}
      </main>
      {!immersive && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Shell />
    </AppProvider>
  );
}
