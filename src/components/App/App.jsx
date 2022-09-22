import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import authOperations from 'redux/auth/auth-operations.js';
import { Loader } from 'components/Loader/Loader';
import { PrivateRoute } from 'components/PrivateRoute.js';
import { PublicRoute } from 'components/PublicRoute.js';
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

  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <PublicRoute>
                <Usermenu />
                <ToastContainer
                  position="top-center"
                  autoClose={1000}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
              </PublicRoute>
            </Suspense>
          }
        >
          <Route
            path="register"
            element={
              <Suspense fallback={<Loader />}>
                <PublicRoute restricted>
                  <RegisterForm />
                </PublicRoute>
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<Loader />}>
                <PublicRoute restricted>
                  <LoginForm />
                </PublicRoute>
              </Suspense>
            }
          />
          <Route
            path="contacts"
            element={
              <Suspense fallback={<Loader />}>
                <PrivateRoute>
                  <ContactsView />
                </PrivateRoute>
              </Suspense>
            }
          >
            <Route
              path="edit/:contactId"
              element={
                <Suspense fallback={<Loader />}>
                  <PrivateRoute>
                    <Modal />
                  </PrivateRoute>
                </Suspense>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
