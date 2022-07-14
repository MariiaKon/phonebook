import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { App } from 'components/App';
import { Modal } from 'components/EditContactModal/EditContactModal';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-07-phonebook">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="edit/:contactId" element={<Modal />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
