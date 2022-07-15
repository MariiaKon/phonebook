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
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <Routes>
          {/* <Route path='register' element={ } /> */}
          {/* <Route path='login' element={ } />  */}
          {/* <Route path='contacts' element={ } /> */}

          <Route path="/" element={<App />} />
          <Route path="edit/:contactId" element={<Modal />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// /register - публичный маршрут регистрации нового пользователя с формой
// /login - публичный маршрут логина сущестующего пользователя с формой
// /contacts - приватный маршрут для работы с коллекцией контактов пользователя
