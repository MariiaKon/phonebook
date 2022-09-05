import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations.js';
import { Loader } from 'components/Loader/Loader';
const Usermenu = lazy(() => import('components/Usermenu/Usermenu'));
const RegisterForm = lazy(() => import('views/Register/RegisterView'));
const LoginForm = lazy(() => import('views/Login/LogInView'));
const ContactsView = lazy(() => import('views/Contacts/ContactsView'));
const Modal = lazy(() => import('views/EditContactModal/EditContactView'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Usermenu />
            </Suspense>
          }
        >
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
              isLoggedIn ? (
                <Suspense fallback={<Loader />}>
                  <ContactsView />
                </Suspense>
              ) : (
                <Navigate to="/register" />
              )
            }
          />
          <Route
            path="edit/:contactId"
            element={
              isLoggedIn ? (
                <Suspense fallback={<Loader />}>
                  <Modal />
                </Suspense>
              ) : (
                <Navigate to="/register" />
              )
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// /register - публичный маршрут регистрации нового пользователя с формой
// /login - публичный маршрут логина сущестующего пользователя с формой
// /contacts - приватный маршрут для работы с коллекцией контактов пользователя
