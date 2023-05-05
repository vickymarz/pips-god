import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { QueryClientProvider, QueryClient } from 'react-query'
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
    </QueryClientProvider>
  // </React.StrictMode>
);

reportWebVitals();
