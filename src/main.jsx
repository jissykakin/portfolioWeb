import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css';
import './i18n/i18n.js';
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      <App />
     </BrowserRouter>    
  </StrictMode>
)


