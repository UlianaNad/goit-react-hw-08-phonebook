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
    <header className=' px-6 py-14'>
    <ul className="hidden lg:flex justify-between">
      <NavLink className="text-sm font-semibold leading-6 text-gray-900" to="/">Homepage</NavLink>
      <NavLink className="text-sm font-semibold leading-6 text-gray-900" to="/contacts">Contacts</NavLink>
      {!isLoggedIn && (
        <>
          <NavLink className="text-sm font-semibold leading-6 text-gray-900" to="/login">Login</NavLink>
          <NavLink className="text-sm font-semibold leading-6 text-gray-900" to="/register">Register</NavLink>
        </>
      )}
      {user && <h2 className="text-sm font-semibold leading-6 text-gray-900">{user}</h2>}
      {isLoggedIn && (
        <>
          <button className="text-sm font-semibold leading-6 text-gray-900" onClick={() => dispatch(logoutThunk())}>Exit</button>
        </>
      )}
    </ul>
    </header>
  );
};

export default NavBar;
