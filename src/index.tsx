import * as React from 'react';
import { createRoot } from 'react-dom/client';

import './css/index.css';

import App from './app';

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);

root.render(<App />)