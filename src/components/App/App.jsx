import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
const RegisterForm = lazy(() => import('views/Register/RegisterView'));
const LoginForm = lazy(() => import('views/Login/LogInView'));
const ContactsView = lazy(() => import('views/Contacts/ContactsView'));
const Modal = lazy(() => import('views/EditContactModal/EditContactView'));

export function App() {
  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook/">
      <Routes>
        <Route path="/" element={<Navigate to="register" />} />

        <Route
          path="register"
          element={
            <Suspense fallback={<Loader />}>
              <RegisterForm />
            </Suspense>
          }
        />
        <Route
          path="login"
          element={
            <Suspense fallback={<Loader />}>
              <LoginForm />
            </Suspense>
          }
        />
        <Route
          path="contacts"
          element={
            <Suspense fallback={<Loader />}>
              <ContactsView />
            </Suspense>
          }
        />
        <Route
          path="edit/:contactId"
          element={
            <Suspense fallback={<Loader />}>
              <Modal />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

// /register - публичный маршрут регистрации нового пользователя с формой
// /login - публичный маршрут логина сущестующего пользователя с формой
// /contacts - приватный маршрут для работы с коллекцией контактов пользователя
