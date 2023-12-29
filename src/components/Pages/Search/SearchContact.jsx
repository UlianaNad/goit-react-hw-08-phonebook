import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../redux/filterSlice';
import { searchContact } from '../../../redux/selectors';

export const SearchContact = () => {
  const dispatch = useDispatch();
  const filter = useSelector(searchContact);

  const handleInputChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <h2 className="text-xl font-bold tracking-tight text-gray-600 mt-4 mb-2">
        Search contact
      </h2>
      <input
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 text-center"
        value={filter.filter}
        onChange={handleInputChange}
        placeholder="Search contact"
        type="search"
      />
    </div>
  );
};
