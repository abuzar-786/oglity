// Safe polyfill for fetch setter in automation/extension environments
(function() {
  try {
    const rawFetch = window.fetch;
    let currentFetch = typeof rawFetch === 'function' ? rawFetch.bind(window) : rawFetch;
    const desc = Object.getOwnPropertyDescriptor(window, 'fetch');
    if (!desc || !desc.set) {
      Object.defineProperty(window, 'fetch', {
        configurable: true,
        enumerable: true,
        get: () => currentFetch,
        set: (fn) => {
          currentFetch = fn;
        },
      });
    }

    const originalWarn = console.warn;
    console.warn = (...args: unknown[]) => {
      if (typeof args[0] === 'string' && args[0].includes('Reduced Motion enabled')) {
        return;
      }
      originalWarn.apply(console, args);
    };
  } catch (_) {}
})();

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
