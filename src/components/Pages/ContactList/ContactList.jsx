import React, { useEffect } from 'react';
import ContactItem from './ContactItem/ContactItem';
import { StyledUl } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from '../../../redux/operations';
import {
  selectError,
  selectLoading,
  contactsData,
  searchContact,
} from '../../../redux/selectors';

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
      <h2 className="text-3xl font-bold tracking-tight text-gray-600 mt-5">Contact list</h2>
      <div>
        {loading && <h3 className="text-3xl font-bold tracking-tight text-gray-400 ">Loading...</h3>}
        {error && <h3>{error}</h3>}
      </div>
      <StyledUl>
        {filteredData?.map(contact => (
          <ContactItem key={contact.id} {...contact} />
        ))}
      </StyledUl>
    </div>
  );
}

export default ContactList;
