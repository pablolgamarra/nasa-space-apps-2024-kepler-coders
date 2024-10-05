import { createRoot } from 'react-dom/client';
import App from './components/App';

const root = createRoot(document.getElementById('simulation-root') as Element);

root.render(<App />);
