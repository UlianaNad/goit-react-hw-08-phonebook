import React, { useEffect } from 'react';
import ContactItem from './ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from '../../redux/contacts/operations';
import {
  selectError,
  selectLoading,
  contactsData,
  searchContact,
} from '../../redux/contacts/selectors';

function ContactList() {
  const contacts = useSelector(contactsData);
  const filter = useSelector(searchContact);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const searchWord = filter.filter.toLowerCase();
  const filteredData = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(searchWord);
  });

  return (
    <div>
      <h2 className="text-xl font-bold tracking-tight text-gray-600 mt-5">
        Contact list
      </h2>
      <div>
        {loading && (
          <h3 className="text-xl font-bold tracking-tight text-gray-400 ">
            Loading...
          </h3>
        )}
        {error && <h3>{error}</h3>}
      </div>
      <ul className="divide-y divide-gray-100">
        {filteredData?.map(contact => (
          <ContactItem key={contact.id} {...contact} />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
