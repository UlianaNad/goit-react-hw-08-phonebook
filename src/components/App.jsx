import React from 'react';
import ContactList from './ContactList/ContactList';
import { AddContactForm } from './AddContact/AddContact';
import { SearchContact } from './Search/SearchContact';
import { StyledWrapper } from './App.styled';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';


export const App = () => {
  return (
    <StyledWrapper>
      <h1>Contact book</h1>
      <Routes>
        <Route path='/' element={<h1>Homepage</h1>} />
        <Route path='contacts' element={<h1>Contact list</h1>} />
        <Route path='/login' element={<h1>Login</h1>} />
        <Route path='/register' element={<h1>Register</h1>} />
      </Routes>
      <AddContactForm />
      <SearchContact />
      <ContactList />
      <ToastContainer />
    </StyledWrapper>
  );
};

export default App;
