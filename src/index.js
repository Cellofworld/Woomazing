import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes/Routes';
import { Provider } from 'react-redux';
import store from './store/store';
import ScrollToTop from './helpers/scrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Provider store={store}>
        <Routing /> 
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
