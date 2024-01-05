import React from 'react';
import { useSelector } from 'react-redux';
import { contactsData } from '../redux/contacts/selectors';
import { AddContactForm } from 'components/AddContact/AddContact';
import { SearchContact } from 'components/Search/SearchContact';
import ContactList from 'components/ContactList/ContactList';

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
