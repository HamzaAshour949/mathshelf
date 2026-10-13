import { useApp } from '../app-context.jsx';
import { Badge } from '../components/Badge.jsx';
import { GameFrame } from '../components/GameFrame.jsx';
import { Icon } from '../components/Icons.jsx';

export default function GamePage({ year, game }) {
  const { t, href } = useApp();
  return (
    <div className="wrap gamepage">
      <div className="game-head">
        <a className="back" href={href(`/year/${year}/games`)}>
          <Icon name="back" size={18} />
          <bdi>{t('game.back', { y: year })}</bdi>
        </a>
        <div className="game-title">
          <h1 lang="en">{game.title}</h1>
          <Badge kind={game.by} />
        </div>
      </div>
      <GameFrame game={game} />
    </div>
  );
}
