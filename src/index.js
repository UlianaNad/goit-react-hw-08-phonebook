import App from 'components/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {  persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='goit-react-hw-08-phonebook'>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate >
    </Provider>
  </BrowserRouter>
);
