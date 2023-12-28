import React from 'react';
import { StyledWrapper } from './App.styled';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';


export const App = () => {
  return (
    <StyledWrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<h1>Contact list</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/*" element={<NotFound/>} />
        </Route>
      </Routes>
      
      <ToastContainer />
    </StyledWrapper>
  );
};

export default App;
