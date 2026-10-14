import { useApp } from '../app-context.jsx';
import { Icon } from './Icons.jsx';

// Every resource, the videos he found and the games he made alike, says "Mr. Hamza's pick".
export function Badge() {
  const { t } = useApp();
  return (
    <span className="badge badge-picked">
      <Icon name="star" size={14} />
      <span>{t('by.picked')}</span>
    </span>
  );
}
