import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn, selectUserName } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';

const NavBar = () => {
  const user = useSelector(selectUserName);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch()
  return (
    <ul className="flex justify-between gap-0.5 py-3.5">
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      {!isLoggedIn && (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      )}
      {user && <h2>{user}</h2>}
      {isLoggedIn && (
        <>
          <button onClick={() => dispatch(logoutThunk())}>Exit</button>
        </>
      )}
    </ul>
  );
};

export default NavBar;
