import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm({
        defaultValues:{
            email:'unadorozhna1508@gmail.com',
            password:'unadorozhna1508@gmail.com',
        },
    });

    const dispatch = useDispatch()
    const submit = data =>{
        console.log(data);
       dispatch(loginThunk(data)).unwrap().then((res)=>{
        navigate('/contacts')
        toast.success(`Welcome ${res.user.name}`)
       }).catch(()=>{
        toast.error('Something went wrong!')
       })
    }
  return (
    <div className='flex justify-center items-center min-h-[80vh]'>
        <form onSubmit={handleSubmit(submit)} className='w-1/2 grid gap-4 '>
        <h1>Enter to your account</h1>
            <input {...register('email')} className='border-2 border-black p-1 rounded-md shadow-md' type="text" placeholder='Enter your email' />
            <input {...register('password')} className='border-2 border-black p-1 rounded-md shadow-md' type="password" placeholder='Enter your password' />
            <button className='border-2 border-black px-4 py-2 rounded-md shadow-md'>Log in </button>
        </form>
    </div>
  
  )
}

export default Login