import { useApp } from '../app-context.jsx';
import { stats } from '../data/catalog.js';
import { Badge } from './Badge.jsx';
import { warmGame } from './GameFrame.jsx';
import { Icon } from './Icons.jsx';
import { Reveal } from './Reveal.jsx';

export function YearCard({ year, index }) {
  const { t, tc, href } = useApp();
  const s = stats(year);
  const has = s.videos + s.games > 0;
  return (
    <Reveal as="li" index={index}>
      <a className={`card link ycard ${has ? '' : 'is-empty'}`} href={href(`/year/${year}`)}>
        <span className="y-label" lang="en">Year</span>
        <span className="y-num">{year}</span>
        <span className="y-meta">
          {has ? `${tc('video', s.videos)} · ${tc('game', s.games)}` : t('home.soon')}
        </span>
        <Icon name="arrow" className="y-arrow" size={20} />
      </a>
    </Reveal>
  );
}

// A small picture of 3-4-5 with a square on each side. Drawn once, no images to download.
function PythagorasArt() {
  const lines = [];
  for (let i = 1; i < 4; i += 1) lines.push(`M${i} 0V4M0 ${i}H4`);
  for (let i = 1; i < 3; i += 1) lines.push(`M${-i} 0V-3M0 ${-i}H-3`);
  for (let i = 1; i < 5; i += 1) {
    lines.push(`M${4 - 0.8 * i} ${-0.6 * i}l3 -4`);
    lines.push(`M${4 + 0.6 * i} ${-0.8 * i}l-4 -3`);
  }
  return (
    <svg className="art" viewBox="-3.6 -7.6 11.2 12.2" role="img" aria-label="Right-angled triangle with a square on each side">
      <polygon className="art-a" points="0,0 4,0 4,4 0,4" />
      <polygon className="art-b" points="0,0 -3,0 -3,-3 0,-3" />
      <polygon className="art-c" points="4,0 0,-3 3,-7 7,-4" />
      <path className="art-grid" d={lines.join('')} />
      <polygon className="art-tri" points="0,0 4,0 0,-3" />
    </svg>
  );
}

// Two blue jellies melting together and a pink one next to them. Drawn once, no images to download.
function JellyArt() {
  return (
    <svg className="art art-jelly" viewBox="0 0 120 100" role="img" aria-label="Two blue jelly blobs melting into one, and a pink one beside them">
      <defs>
        <filter id="jelly-goo" x="-30%" y="-30%" width="160%" height="160%" colorInterpolationFilters="sRGB">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="b" />
          <feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="g" />
          <feComposite in="SourceGraphic" in2="g" operator="atop" />
        </filter>
      </defs>
      <g filter="url(#jelly-goo)">
        <circle cx="38" cy="46" r="22" fill="#4f7bff" />
        <circle cx="64" cy="50" r="19" fill="#4f7bff" />
      </g>
      <circle cx="94" cy="62" r="15" fill="#ff5fa2" />
      <ellipse cx="30" cy="36" rx="7" ry="3.6" fill="#fff" opacity=".55" transform="rotate(-30 30 36)" />
      <ellipse cx="90" cy="55" rx="4.6" ry="2.4" fill="#fff" opacity=".55" transform="rotate(-30 90 55)" />
      <text x="48" y="56" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="700" fontSize="22" fill="#fff" stroke="#2447c9" strokeWidth="2.4" paintOrder="stroke">2x</text>
      <text x="94" y="68" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="700" fontSize="15" fill="#fff" stroke="#c82a74" strokeWidth="2" paintOrder="stroke">y</text>
    </svg>
  );
}

const ART = { 'pythagorean-theorem': PythagorasArt, 'jelly-terms': JellyArt };

export function GameCard({ year, game, index }) {
  const { t, href } = useApp();
  const Art = ART[game.id];
  const warm = () => warmGame(game.embed);
  return (
    <Reveal as="article" index={index}>
      <a
        className="card link gcard"
        href={href(`/year/${year}/games/${game.id}`)}
        onPointerEnter={warm}
        onFocus={warm}
        onTouchStart={warm}
      >
        <div className="gart">{Art && <Art />}</div>
        <div className="gbody">
          <h3 className="gtitle"><bdi lang="en">{game.title}</bdi></h3>
          <p className="gdesc">{t(game.blurb)}</p>
          <div className="gfoot">
            <Badge kind={game.by} />
            <span className="cta">
              {t('games.play')} <Icon name="arrow" size={18} />
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

export function Empty({ kind, year }) {
  const { t } = useApp();
  return (
    <div className="empty">
      <svg className="empty-art" viewBox="0 0 200 110" aria-hidden="true">
        <rect className="slot" x="22" y="26" width="30" height="62" rx="4" />
        <rect className="slot" x="60" y="40" width="30" height="48" rx="4" />
        <rect className="slot" x="98" y="18" width="30" height="70" rx="4" />
        <rect className="slot" x="136" y="34" width="30" height="54" rx="4" />
        <path className="shelf" d="M10 92h180" />
      </svg>
      <h3>{t('empty.title')}</h3>
      <p>{t(`empty.${kind}`, { y: year })}</p>
    </div>
  );
}
