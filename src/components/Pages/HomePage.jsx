import React from 'react';
import { AddContactForm } from './AddContact/AddContact';
import { SearchContact } from './Search/SearchContact';
import ContactList from './ContactList/ContactList';

const HomePage = () => {
  return (
    <div>
      <AddContactForm />
      <SearchContact />
      <ContactList />
    </div>
  );
};

export default HomePage;
