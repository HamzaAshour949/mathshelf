import { useCallback, useEffect, useRef, useState } from 'react';
import { useApp } from '../app-context.jsx';
import { Badge } from './Badge.jsx';
import { Icon } from './Icons.jsx';
import { Reveal } from './Reveal.jsx';

const FSI = '⁨';
const PDI = '⁩';

export function VideoCard({ video, index, onPlay }) {
  const { t } = useApp();
  const [imgOk, setImgOk] = useState(true);
  const [loaded, setLoaded] = useState(false);
  return (
    <Reveal as="article" index={index} className="card vcard">
      <button
        type="button"
        className="vthumb"
        onClick={(e) => onPlay(video, e.currentTarget)}
        aria-label={`${t('video.play')}: ${video.title}`}
      >
        {imgOk && (
          <img
            className={loaded ? 'loaded' : ''}
            src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
            alt=""
            width="320"
            height="180"
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => setImgOk(false)}
          />
        )}
        <span className="vplay"><Icon name="play" size={22} /></span>
      </button>
      <div className="vbody">
        <h4 className="vtitle"><bdi lang="en">{video.title}</bdi></h4>
        <p className="vsrc">{t('video.on', { channel: `${FSI}${video.channel}${PDI}` })}</p>
        <Badge kind={video.by} />
      </div>
    </Reveal>
  );
}

export function VideoDialog({ video, onClose }) {
  const { t } = useApp();
  const ref = useRef(null);
  const frame = useRef(null);
  const [closing, setClosing] = useState(false);
  const canFull = !!(document.fullscreenEnabled || document.webkitFullscreenEnabled);

  useEffect(() => {
    const d = ref.current;
    if (d && !d.open) d.showModal();
    document.documentElement.classList.add('locked');
    return () => document.documentElement.classList.remove('locked');
  }, []);

  // Full screen on a phone turns it sideways by itself. This covers our button and the player's own
  // full-screen button. Desktops and iPhones refuse the rotation, which is fine.
  useEffect(() => {
    const turn = () => {
      const on = !!(document.fullscreenElement || document.webkitFullscreenElement);
      try {
        if (on) screen.orientation?.lock?.('landscape')?.catch?.(() => {});
        else screen.orientation?.unlock?.();
      } catch { /* not supported here */ }
    };
    document.addEventListener('fullscreenchange', turn);
    document.addEventListener('webkitfullscreenchange', turn);
    return () => {
      document.removeEventListener('fullscreenchange', turn);
      document.removeEventListener('webkitfullscreenchange', turn);
      try { screen.orientation?.unlock?.(); } catch { /* not supported here */ }
    };
  }, []);

  const goFull = () => {
    const el = frame.current;
    try { (el.requestFullscreen || el.webkitRequestFullscreen).call(el)?.catch?.(() => {}); } catch { /* use the player's own button */ }
  };

  const close = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      ref.current?.close(); // gives focus back to the card that opened it
      onClose();
    }, 180);
  }, [onClose]);

  const src =
    `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&playsinline=1` +
    (video.start ? `&start=${video.start}` : '');
  const watch = `https://www.youtube.com/watch?v=${video.id}${video.start ? `&t=${video.start}s` : ''}`;

  return (
    <dialog
      ref={ref}
      className={`vdialog ${closing ? 'out' : ''}`}
      aria-label={video.title}
      onCancel={(e) => { e.preventDefault(); close(); }}
      onClick={(e) => { if (e.target === ref.current) close(); }}
    >
      <div className="vd-inner">
        <div className="vd-bar">
          <h3 className="vd-title"><bdi lang="en">{video.title}</bdi></h3>
          <button type="button" className="tool tool-icon" onClick={close} aria-label={t('video.close')}>
            <Icon name="close" size={20} />
          </button>
        </div>
        <div className="vd-frame" ref={frame}>
          <iframe
            src={src}
            title={video.title}
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <div className="vd-foot">
          <div className="vd-meta">
            <Badge kind={video.by} />
            <span className="vsrc">{t('video.on', { channel: `${FSI}${video.channel}${PDI}` })}</span>
          </div>
          <div className="vd-actions">
            {canFull && (
              <button type="button" className="btn" onClick={goFull}>
                <Icon name="expand" size={17} /> {t('full.enter')}
              </button>
            )}
            <a className="btn btn-quiet" href={watch} target="_blank" rel="noopener noreferrer">
              {t('video.watchYT')} <Icon name="external" size={16} />
            </a>
          </div>
        </div>
      </div>
    </dialog>
  );
}
