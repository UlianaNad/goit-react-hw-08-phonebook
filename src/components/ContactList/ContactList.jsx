import React, { useEffect } from 'react';
import ContactItem from './ContactItem/ContactItem';
import { StyledUl } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from '../../redux/operations';
import {
  selectError,
  selectLoading,
  contactsData,
  searchContact,
} from '../../redux/selectors';

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
      <h2>Contact list</h2>
      <div>
        {loading && <h3>Loading...</h3>}
        {error && <h3>{error}</h3>}
      </div>
      {filteredData?.length !== 0 ? (
        <StyledUl>
          {filteredData?.map(contact => (
          
            <ContactItem key={contact.id} {...contact} />
            
          ))}
        </StyledUl>
      ) : (
        <h3>You don`t have any contacts yet...</h3>
      )}
    </div>
  );
}

export default ContactList;
