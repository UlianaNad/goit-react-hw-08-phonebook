import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';

const NavBar = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();
  return (
    <header className=" px-16 py-4 bg-teal-100">
      <ul className="flex justify-between">
        <div className="flex gap-8">
          <NavLink
            className="text-sm font-semibold leading-6 text-gray-900"
            to="/"
          >
            Homepage
          </NavLink>
          <NavLink
            className="text-sm font-semibold leading-6 text-gray-900"
            to="/contacts"
          >
            Contacts
          </NavLink>
        </div>
        <div className="flex gap-8">
          {!isLoggedIn && (
            <>
              <NavLink
                className="text-sm font-semibold leading-6 text-gray-900"
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className="text-sm font-semibold leading-6 text-gray-900"
                to="/register"
              >
                Register
              </NavLink>
            </>
          )}
          {user && (
            <h2 className="text-sm font-semibold leading-6 text-teal-600">
              {user.name}
            </h2>
          )}
          {isLoggedIn && (
            <>
              <button
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={() => dispatch(logoutThunk())}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </ul>
    </header>
  );
};

export default NavBar;
