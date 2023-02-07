import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClientProvider, QueryClient } from 'react-query'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient()
console.log(queryClient)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
