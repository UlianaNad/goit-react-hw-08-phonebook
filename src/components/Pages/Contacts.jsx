import React from 'react';
import { AddContactForm } from './AddContact/AddContact';
import { SearchContact } from './Search/SearchContact';
import ContactList from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { contactsData } from '../../redux/contacts/selectors';

const Contacts = () => {
  const contacts = useSelector(contactsData);
  return (
    <div>
      <h3 className="text-xl font-bold tracking-tight text-teal-600 mt-5">
        Add your new contact
      </h3>
      <AddContactForm />
      {contacts.length > 0 && (
        <>
          <SearchContact />
          <ContactList />
        </>
      )}
    </div>
  );
};

export default Contacts;
