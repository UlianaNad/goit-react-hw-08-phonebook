import React, { useState } from 'react';
import {
  StyledButtonSubmit,
  StyledForm,
  StyledInput,
} from './AddContact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactsData } from '../../redux/selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContactThunk } from '../../redux/operations';

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsData);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const notify = () => toast('Name exists in your list!');

  const handleSubmit = e => {
    e.preventDefault();

    const isExist = contacts.some(contact => contact.name === name);

    if (isExist) {
      notify();
    } else {
      const newContact = { name, phone };
      dispatch(addContactThunk(newContact));
    }

    setName('');
    setPhone('');
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          required
          placeholder="New name"
        />
        <StyledInput
          value={phone}
          onChange={e => setPhone(e.target.value)}
          type="tel"
          name="phone"
          required
          placeholder="Phone number"
        />

        <StyledButtonSubmit>Add new contact</StyledButtonSubmit>
      </StyledForm>
    </div>
  );
};
