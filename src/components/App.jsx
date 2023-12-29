import React, { useEffect } from 'react';
import { StyledWrapper } from './App.styled';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from '../redux/auth/operations';
import Contacts from './Pages/Contacts';
import PrivateRoute from 'routesConfig/PrivateRoute';
import PublicRoute from 'routesConfig/PublicRoute';
import { selectRefresh } from '../redux/auth/selectors';
import Loader from './Loader';


export const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(refreshThunk())
  }, [dispatch])

  const isRefresh = useSelector(selectRefresh)

  return isRefresh ? (<Loader />) : (
    <StyledWrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/contacts" element={<PrivateRoute><Contacts/></PrivateRoute>} />
          <Route path="/login" element={<PublicRoute><Login/></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><Register/></PublicRoute>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
      
      <ToastContainer />
    </StyledWrapper>
  );
};

export default App;
