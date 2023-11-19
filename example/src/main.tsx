import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ThemeInjection from './style/ThemeInjection.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeInjection>
      <App />
    </ThemeInjection>
  </React.StrictMode>
);
