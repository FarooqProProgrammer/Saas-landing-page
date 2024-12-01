import '@fontsource/poppins';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ScrollToTop from "react-scroll-to-top";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ScrollToTop smooth className='flex justify-center items-center' />
  </StrictMode>,
)
