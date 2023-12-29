import NavBar from 'components/NavBar/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
