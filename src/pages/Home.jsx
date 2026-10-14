import { useApp } from '../app-context.jsx';
import { YEARS } from '../data/catalog.js';
import { Badge } from '../components/Badge.jsx';
import { YearCard } from '../components/Cards.jsx';
import { Reveal } from '../components/Reveal.jsx';

// Five book spines that rise into place. Pure SVG, a few hundred bytes.
const SPINES = [
  { x: 14, w: 50, h: 118, g: 'π' },
  { x: 72, w: 44, h: 150, g: '√' },
  { x: 124, w: 54, h: 96, g: '∑' },
  { x: 186, w: 46, h: 134, g: '%' },
  { x: 240, w: 52, h: 108, g: 'x²' },
];

function Spines() {
  return (
    <svg className="spines" viewBox="0 0 306 176" aria-hidden="true" focusable="false">
      {SPINES.map((s, i) => (
        <g key={s.g} className="spine" style={{ '--i': i }}>
          <rect x={s.x} y={160 - s.h} width={s.w} height={s.h} rx="5" />
          <path className="band" d={`M${s.x + 8} ${160 - s.h + 16}h${s.w - 16}M${s.x + 8} ${160 - s.h + 22}h${s.w - 16}`} />
          <text x={s.x + s.w / 2} y={160 - s.h + 56} textAnchor="middle">{s.g}</text>
        </g>
      ))}
      <path className="shelf-line" d="M0 162h306" />
    </svg>
  );
}

export default function Home() {
  const { t } = useApp();
  return (
    <div className="wrap home">
      <section className="hero">
        <div className="hero-copy">
          <h1>{t('home.title')}</h1>
          <p className="lead">{t('home.sub')}</p>
        </div>
        <Spines />
      </section>

      <section aria-labelledby="pick">
        <h2 id="pick" className="section-title">{t('home.pick')}</h2>
        <ul className="ygrid">
          {YEARS.map((y, i) => <YearCard key={y} year={y} index={i} />)}
        </ul>
      </section>

      <Reveal as="section" className="legend" aria-labelledby="legend">
        <h2 id="legend" className="section-title">{t('home.legend')}</h2>
        <ul className="legend-list">
          <li><Badge kind="picked" /><p>{t('home.legendPicked')}</p></li>
          <li><Badge kind="made" /><p>{t('home.legendMade')}</p></li>
        </ul>
      </Reveal>
    </div>
  );
}
