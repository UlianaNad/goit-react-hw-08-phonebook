import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../redux/auth/selectors';

const HomePage = () => {
  const user = useSelector(selectUserName);
  return (
    <div>
       {user && <h2>{user}</h2>}
  </div>
  );
};

export default HomePage;
