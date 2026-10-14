import { useApp } from '../app-context.jsx';
import { YEARS } from '../data/catalog.js';
import { Badge } from '../components/Badge.jsx';
import { YearCard } from '../components/Cards.jsx';
import { Reveal } from '../components/Reveal.jsx';

// The shelf: one book spine for each year, in that year's colour, and an empty place for more. Pure SVG.
const SPINES = [
  { year: 7, x: 14, w: 54, h: 112, g: '7' },
  { year: 8, x: 76, w: 54, h: 150, g: '8' },
  { year: 9, x: 138, w: 54, h: 98, g: '9' },
  { year: 10, x: 200, w: 62, h: 132, g: '10', long: true },
];

function Spines() {
  return (
    <svg className="spines" viewBox="0 0 306 176" aria-hidden="true" focusable="false">
      {SPINES.map((s, i) => (
        <g key={s.year} className={`spine${s.long ? ' long' : ''}`} data-year={s.year} style={{ '--i': i }}>
          <rect x={s.x} y={160 - s.h} width={s.w} height={s.h} rx="2" />
          <path className="band" d={`M${s.x + 8} ${160 - s.h + 16}h${s.w - 16}M${s.x + 8} ${160 - s.h + 22}h${s.w - 16}`} />
          <text x={s.x + s.w / 2} y={160 - s.h + 58} textAnchor="middle">{s.g}</text>
        </g>
      ))}
      <rect className="spine-empty" x="272" y="48" width="28" height="112" rx="2" />
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
