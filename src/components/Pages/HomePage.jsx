import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

const HomePage = () => {
  const user = useSelector(selectUser);
  return (
    <div className="py-6">
      {user && (
        <div className="flex items-center gap-x-6">
          <img
            className="h-16 w-16 rounded-full"
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/user-male-circle--v1.png"
            alt="user-male-circle--v1"
          />
          <div>
            <p className="text-sm font-semibold leading-6 text-teal-600">
              Your name:{' '}
              <span className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                {' '}
                {user.name}
              </span>
            </p>
            <p className="text-sm font-semibold leading-6 text-teal-600">
              Your email:{' '}
              <span className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                {user.email}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
