import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Apply the saved theme before the first render so the page doesn't flash.
try {
  const saved = localStorage.getItem('cholo-theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const theme = saved || (prefersDark ? 'dark' : 'light')
  document.documentElement.setAttribute('data-theme', theme)
} catch {
  document.documentElement.setAttribute('data-theme', 'light')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
