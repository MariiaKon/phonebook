import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import img from 'images/phonebook-welcome.png';
const Usermenu = lazy(() => import('components/Usermenu/Usermenu'));
const RegisterForm = lazy(() => import('views/Register/RegisterView'));
const LoginForm = lazy(() => import('views/Login/LogInView'));
const ContactsView = lazy(() => import('views/Contacts/ContactsView'));
const Modal = lazy(() => import('views/EditContactModal/EditContactView'));

export function App() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

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
            index
            element={
              <Suspense fallback={<Loader />}>
                <main
                  style={{
                    height: '90vh',
                    backgroundImage: `linear-gradient(90deg, #38170a83, #38170a83), url(${img})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                />
              </Suspense>
            }
          />
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
