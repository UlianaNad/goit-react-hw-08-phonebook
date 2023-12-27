import React from 'react';
import PropTypes from 'prop-types';
import { StyledLi } from './ContactItem.styled';
import { StyledButton, StyledSpanName, StyledSpanNumber } from '../ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../../redux/operations';

function ContactItem({ id, name, number}) {
  const dispatch = useDispatch();
  return(
    <StyledLi>
      <StyledSpanName>{name}</StyledSpanName>
      <StyledSpanNumber>{number}</StyledSpanNumber>
      <StyledButton onClick={()=> dispatch(deleteContactThunk(id))}>Delete</StyledButton>
    </StyledLi>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string,
  userName: PropTypes.string,
  phoneNumber: PropTypes.string,
};

export default ContactItem;
