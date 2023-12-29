import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../../../redux/contacts/operations';

function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <li className="flex justify-between gap-x-6 py-2">
      <div className="flex min-w-0 gap-x-4">
        <p className="text-sm font-semibold leading-6 text-gray-900">{name}</p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
          {number}
        </p>

        <button
          onClick={() => dispatch(deleteContactThunk(id))}
          className="text-sm leading-6 text-gray-900"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string,
  userName: PropTypes.string,
  phoneNumber: PropTypes.string,
};

export default ContactItem;
