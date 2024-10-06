import { createRoot } from 'react-dom/client';
import App from './components/App';
import React from 'react';

const root = createRoot(document.getElementById('root') as Element);

root.render(React.createElement(App));
