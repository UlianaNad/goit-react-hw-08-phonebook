import { StyledInput } from 'components/AddContact/AddContact.styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { searchContact } from '../../redux/selectors';

export const SearchContact = () => {
  const dispatch = useDispatch();
  const filter = useSelector(searchContact);

  const handleInputChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <h2>Search contact</h2>
      <StyledInput
        value={filter.filter}
        onChange={handleInputChange}
        placeholder="Search contact"
        type="search"
      />
    </div>
  );
};
