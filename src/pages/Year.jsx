import { useEffect, useMemo, useRef, useState } from 'react';
import { useApp } from '../app-context.jsx';
import { CATALOG, stats } from '../data/catalog.js';
import { Empty, GameCard } from '../components/Cards.jsx';
import { SegNav } from '../components/SegNav.jsx';
import { VideoCard, VideoDialog } from '../components/Video.jsx';

const lessonId = (code) => `lesson-${code.replace('.', '-')}`;

// Highlights the lesson that is currently at the top of the screen.
function useActiveLesson(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const seen = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) seen.set(e.target.id, e.isIntersecting);
        const first = ids.find((id) => seen.get(id));
        if (first) setActive(first);
      },
      { rootMargin: '-25% 0px -65% 0px' },
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [ids]);
  return [active, setActive];
}

function Videos({ year }) {
  const { t, tc } = useApp();
  const [playing, setPlaying] = useState(null);
  const opener = useRef(null);
  const units = CATALOG[year].units;
  const ids = useMemo(() => units.flatMap((u) => u.lessons.map((l) => lessonId(l.code))), [units]);
  const [active, setActive] = useActiveLesson(ids);

  if (!units.length) return <Empty kind="videos" year={year} />;

  const jump = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {units.map((unit) => {
        const n = unit.lessons.reduce((sum, l) => sum + l.videos.length, 0);
        let card = 0;
        return (
          <section key={unit.name} className="unit" aria-labelledby={`u-${unit.name}`}>
            <header className="unit-head">
              <h2 id={`u-${unit.name}`}><bdi lang="en">{unit.name}</bdi></h2>
              <p>{tc('video', n)}</p>
            </header>

            <SegNav
              className="jump"
              label={t('videos.jump')}
              items={unit.lessons.map((l) => ({
                key: l.code,
                active: active === lessonId(l.code),
                onClick: () => jump(lessonId(l.code)),
                label: <bdi lang="en">{l.code}</bdi>,
              }))}
            />

            {unit.lessons.map((lesson) => (
              <section key={lesson.code} id={lessonId(lesson.code)} className="lesson">
                <h3 className="lesson-title">
                  <bdi lang="en"><span className="code">{lesson.code}</span> {lesson.title}</bdi>
                </h3>
                <div className="vgrid">
                  {lesson.videos.map((v) => (
                    <VideoCard
                      key={v.id}
                      video={v}
                      index={card++ % 4}
                      onPlay={(video, el) => { opener.current = el; setPlaying(video); }}
                    />
                  ))}
                </div>
              </section>
            ))}
          </section>
        );
      })}
      {playing && <VideoDialog video={playing} onClose={() => setPlaying(null)} />}
    </>
  );
}

function Games({ year }) {
  const games = CATALOG[year].games;
  if (!games.length) return <Empty kind="games" year={year} />;
  return (
    <div className="ggrid">
      {games.map((g, i) => <GameCard key={g.id} year={year} game={g} index={i} />)}
    </div>
  );
}

export default function Year({ year, tab }) {
  const { t, tc, href } = useApp();
  const s = stats(year);
  return (
    <div className="wrap yearpage">
      <header className="year-head">
        <h1 lang="en">Year {year}</h1>
        <p className="lead">{`${tc('video', s.videos)} · ${tc('game', s.games)}`}</p>
      </header>

      <SegNav
        className="tabs"
        label={t('tab.aria')}
        items={[
          { key: 'videos', active: tab === 'videos', href: href(`/year/${year}/videos`), label: <>{t('tab.videos')} <span className="count">{s.videos}</span></> },
          { key: 'games', active: tab === 'games', href: href(`/year/${year}/games`), label: <>{t('tab.games')} <span className="count">{s.games}</span></> },
        ]}
      />

      <div className="tab-body" key={tab}>
        {tab === 'videos' ? <Videos year={year} /> : <Games year={year} />}
      </div>
    </div>
  );
}
