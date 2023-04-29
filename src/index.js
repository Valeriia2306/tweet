import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'Components/App/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
// styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/tweet">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
