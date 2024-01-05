import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from './redux/auth/operations';
import PrivateRoute from 'routesConfig/PrivateRoute';
import PublicRoute from 'routesConfig/PublicRoute';
import { selectRefresh } from './redux/auth/selectors';
import Loader from './components/Loader';
import HomePage from 'Pages/HomePage';
import Contacts from 'Pages/Contacts';
import Login from 'Pages/Login';
import Register from 'Pages/Register';
import NotFound from 'Pages/NotFound';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  const isRefresh = useSelector(selectRefresh);

  return isRefresh ? (
    <Loader />
  ) : (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
