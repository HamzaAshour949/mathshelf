import { useApp } from '../app-context.jsx';
import { Icon } from './Icons.jsx';

// Says who is behind a resource: collected by Mr. Hamza Ashour, or made by Hamza Ashour.
export function Badge({ kind }) {
  const { t } = useApp();
  return (
    <span className={`badge badge-${kind}`}>
      <Icon name={kind === 'made' ? 'pencil' : 'bookmark'} size={14} />
      <span>{t(`by.${kind}`)}</span>
    </span>
  );
}
