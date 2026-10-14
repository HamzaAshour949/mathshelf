import { GameScreen } from '../components/GameFrame.jsx';

// A game takes the whole window (see GameScreen): there is no site header or footer around it.
export default function GamePage({ year, game }) {
  return <GameScreen year={year} game={game} />;
}
