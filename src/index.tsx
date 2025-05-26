import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LiveAPIProvider } from './contexts/LiveAPIContext';
const API_KEY = process.env.REACT_APP_GEMINI_API_KEY as string;
if (typeof API_KEY !== "string") {
  throw new Error("set REACT_APP_GEMINI_API_KEY in .env");
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <LiveAPIProvider options={{ apiKey: API_KEY }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LiveAPIProvider>
);

reportWebVitals();
