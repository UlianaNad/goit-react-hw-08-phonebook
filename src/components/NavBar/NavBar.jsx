import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul className='flex justify-between gap-0.5 py-3.5'>
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/register">Register</NavLink>
    </ul>
  );
};

export default NavBar;
