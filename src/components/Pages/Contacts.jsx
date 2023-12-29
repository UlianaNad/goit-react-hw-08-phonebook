import React from 'react';
import { AddContactForm } from './AddContact/AddContact';
import { SearchContact } from './Search/SearchContact';
import ContactList from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { contactsData } from '../../redux/selectors';

const Contacts = () => {
  const contacts = useSelector(contactsData);
  return (
    <div>
      <AddContactForm />
      {contacts.length === 0 ? <h3>Add your first contact</h3>  : (
        <>
          <SearchContact />
          <ContactList />
        </>
      )}
    </div>
  );
};

export default Contacts;
