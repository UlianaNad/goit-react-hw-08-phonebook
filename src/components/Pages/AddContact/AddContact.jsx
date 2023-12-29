import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsData } from '../../../redux/contacts/selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContactThunk } from '../../../redux/contacts/operations';

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsData);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const notify = () => toast('Name exists in your list!');

  const handleSubmit = e => {
    e.preventDefault();

    const isExist = contacts.some(contact => contact.name === name);

    if (isExist) {
      notify();
    } else {
      const newContact = { name, number };
      dispatch(addContactThunk(newContact));
    }

    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className="mx-auto mt-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 ">
          <input
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            name="name"
            required
            placeholder="New name"
          />
          <input
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            value={number}
            onChange={e => setNumber(e.target.value)}
            type="tel"
            name="number"
            required
            placeholder="Phone number"
          />

          <button className="block w-full rounded-md bg-teal-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
            Add new contact
          </button>
        </div>
      </form>
    </div>
  );
};
