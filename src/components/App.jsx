import React, { useEffect } from 'react';
import { StyledWrapper } from './App.styled';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import { useDispatch } from 'react-redux';
import { refreshThunk } from '../redux/auth/operations';


export const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(refreshThunk())
  }, [dispatch])
  return (
    <StyledWrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<h1>Contact list</h1>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/*" element={<NotFound/>} />
        </Route>
      </Routes>
      
      <ToastContainer />
    </StyledWrapper>
  );
};

export default App;
