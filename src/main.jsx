import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all'

createRoot(document.getElementById('root')).render(
  <>
    <App/>
  </>,
)
