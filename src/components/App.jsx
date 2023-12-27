import React from 'react';
import ContactList from './ContactList/ContactList';
import { AddContactForm } from './AddContact/AddContact';
import { SearchContact } from './Search/SearchContact';
import { StyledWrapper } from './App.styled';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <StyledWrapper>
      <h1>Contact book</h1>
      <AddContactForm />
      <SearchContact />
      <ContactList />
      <ToastContainer />
    </StyledWrapper>
  );
};

export default App;
