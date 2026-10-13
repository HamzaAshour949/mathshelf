import { useEffect, useRef, useState } from 'react';
import { useApp } from '../app-context.jsx';
import { Icon } from './Icons.jsx';

// Warms the browser cache when someone points at, focuses or touches a game card.
export function warmGame(src) {
  try { fetch(src, { priority: 'low' }).catch(() => {}); } catch { /* not important */ }
}

// A game is one self-contained HTML file. It is shown unchanged, in a frame of its own.
export function GameFrame({ game }) {
  const { t } = useApp();
  const box = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [slow, setSlow] = useState(false);
  const [full, setFull] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const canFull = !!(document.fullscreenEnabled || document.webkitFullscreenEnabled);

  useEffect(() => {
    setLoaded(false);
    setSlow(false);
    const id = setTimeout(() => setSlow(true), 15000);
    return () => clearTimeout(id);
  }, [attempt]);

  useEffect(() => {
    const on = () => setFull(!!(document.fullscreenElement || document.webkitFullscreenElement));
    document.addEventListener('fullscreenchange', on);
    document.addEventListener('webkitfullscreenchange', on);
    return () => {
      document.removeEventListener('fullscreenchange', on);
      document.removeEventListener('webkitfullscreenchange', on);
    };
  }, []);

  const toggleFull = () => {
    if (full) (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    else (box.current.requestFullscreen || box.current.webkitRequestFullscreen).call(box.current);
  };

  return (
    <div className="gframe">
      <div className="gframe-box" ref={box}>
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
          src={game.embed}
          title={game.title}
          allow="autoplay; fullscreen"
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className="gframe-tools">
        {canFull && (
          <button type="button" className="btn btn-quiet" onClick={toggleFull}>
            {t(full ? 'full.exit' : 'full.enter')}
          </button>
        )}
        <a className="btn btn-quiet" href={game.embed} target="_blank" rel="noopener">
          {t('game.newTab')} <Icon name="external" size={16} />
        </a>
      </div>
    </div>
  );
}
