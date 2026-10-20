import { useEffect, useRef, useState } from 'react';
import { useApp } from '../app-context.jsx';
import { Badge } from './Badge.jsx';
import { Icon } from './Icons.jsx';

// Warms the browser cache when someone points at, focuses or touches a game card.
export function warmGame(src) {
  try { fetch(src, { priority: 'low' }).catch(() => {}); } catch { /* not important */ }
}

// The game's address, with this build's id on it, so a browser always asks for the newest file.
export const gameSrc = (game) => `${game.embed}?v=${__BUILD__}`;

const inFull = () => !!(document.fullscreenElement || document.webkitFullscreenElement);

function enterFull(el) {
  const ask = el && (el.requestFullscreen || el.webkitRequestFullscreen);
  if (!ask) return;
  try { Promise.resolve(ask.call(el)).catch(() => {}); } catch { /* the screen is full anyway */ }
}

function leaveFull() {
  const out = document.exitFullscreen || document.webkitExitFullscreen;
  if (!out || !inFull()) return;
  try { Promise.resolve(out.call(document)).catch(() => {}); } catch { /* nothing to do */ }
}

// A game is one self-contained HTML file, shown unchanged. It opens on a screen of its own that fills the
// whole window: a slim bar with the Back button, and the game under it. The browser's full screen is never forced:
// it is only there if the student presses the expand button.
export function GameScreen({ year, game }) {
  const { t, href, back } = useApp();
  const box = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [slow, setSlow] = useState(false);
  const [full, setFull] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const canFull = !!(document.fullscreenEnabled || document.webkitFullscreenEnabled);
  const list = `/year/${year}/games`;

  useEffect(() => {
    setLoaded(false);
    setSlow(false);
    const id = setTimeout(() => setSlow(true), 15000);
    return () => clearTimeout(id);
  }, [attempt]);

  // The page behind the game does not scroll while it is open.
  useEffect(() => {
    document.documentElement.classList.add('locked');
    return () => document.documentElement.classList.remove('locked');
  }, []);

  // If the student chose full screen, leave it when the game closes.
  useEffect(() => leaveFull, []);

  useEffect(() => {
    const on = () => setFull(inFull());
    on();
    document.addEventListener('fullscreenchange', on);
    document.addEventListener('webkitfullscreenchange', on);
    return () => {
      document.removeEventListener('fullscreenchange', on);
      document.removeEventListener('webkitfullscreenchange', on);
    };
  }, []);

  const toggleFull = () => (inFull() ? leaveFull() : enterFull(box.current));

  const onBack = (e) => {
    // A modified click (new tab, new window) keeps the plain link; a normal click goes back.
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    leaveFull();
    back(list);
  };

  return (
    <div className="gscreen" ref={box}>
      <div className="gbar">
        <a className="gback" href={href(list)} onClick={onBack} aria-label={t('game.backTo', { y: year })}>
          <Icon name="back" size={18} />
          <span>{t('game.backShort')}</span>
        </a>
        <div className="gname">
          <h1 className="gname-t" lang="en">{game.title}</h1>
          {!game.selfCredit && <Badge kind={game.by} />}
        </div>
        <div className="gtools">
          {canFull && (
            <button type="button" className="gtool" onClick={toggleFull} aria-pressed={full} aria-label={t(full ? 'full.exit' : 'full.enter')}>
              <Icon name={full ? 'compress' : 'expand'} size={18} />
              <span>{t(full ? 'full.exit' : 'full.enter')}</span>
            </button>
          )}
          <a className="gtool" href={gameSrc(game)} target="_blank" rel="noopener" aria-label={t('game.newTab')}>
            <Icon name="external" size={18} />
            <span>{t('game.newTab')}</span>
          </a>
        </div>
      </div>

      <div className="gstage">
        {!loaded && (
          <div className="game-loading" role="status">
            {slow ? (
              <>
                <p>{t('game.error')}</p>
                <button type="button" className="btn" onClick={() => setAttempt((n) => n + 1)}>{t('game.retry')}</button>
              </>
            ) : t('game.loading')}
          </div>
        )}
        <iframe
          key={attempt}
          src={gameSrc(game)}
          title={game.title}
          allow="autoplay; fullscreen; gamepad"
          onLoad={(e) => {
            setLoaded(true);
            // Keys and the game pad go to the game straight away.
            try { e.currentTarget.contentWindow?.focus(); } catch { /* not important */ }
          }}
        />
      </div>
    </div>
  );
}
