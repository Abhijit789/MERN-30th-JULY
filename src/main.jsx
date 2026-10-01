import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all'
import { Provider } from 'react-redux';
import store from './redux config/store/store';

createRoot(document.getElementById('root')).render(
  <>
  <Provider store={store}>
    <App/>
  </Provider>
  </>,
)
