import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../redux/auth/operations';
import { toast } from 'react-toastify';

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: 'unadorozhna1508@gmail.com',
      password: 'unadorozhna1508@gmail.com',
    },
  });

  const dispatch = useDispatch();
  const submit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(res => {
        toast.success(`Welcome ${res.user.name}`);
      })
      .catch(() => {
        toast.error('Try again!');
      });
  };
  return (
    <div className="flex justify-center items-center min-h-[10vh]">
      <form onSubmit={handleSubmit(submit)} className="grid gap-4 ">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <input
          {...register('email')}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 text-center"
          type="text"
          placeholder="Enter your email"
        />
        <input
          {...register('password')}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 text-center"
          type="password"
          placeholder="Enter your password"
        />
        <button className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
          Log in{' '}
        </button>
      </form>
    </div>
  );
};

export default Login;
