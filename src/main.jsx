import { createRoot } from 'react-dom/client';
import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(<App />);

// If the browser kept an old copy of this page, the newest build id (never cached) tells it: it reloads once from a new address and gets everything fresh.
try {
  fetch('version.json', { cache: 'no-store' }).then((r) => r.json()).then((j) => {
    if (!j || !j.build || j.build === __BUILD__) return;
    const u = new URL(location.href);
    if (u.searchParams.get('v') === j.build) return;   // already tried: no loop
    u.searchParams.set('v', j.build);
    location.replace(u.toString());
  }).catch(() => {});
} catch { /* an old browser: nothing to do */ }

