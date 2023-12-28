import React from 'react'
import { useForm } from 'react-hook-form'

const Register = () => {
    const {register, handleSubmit} = useForm()
  return (
    <div className='flex justify-center items-center min-h-[80vh]'>
        <form className='w-1/2 grid gap-4 '>
        <h1>Register your account</h1>
            <input className='border-2 border-black p-1 rounded-md shadow-md' type="text" placeholder='Enter your name' />
            <input className='border-2 border-black p-1 rounded-md shadow-md' type="text" placeholder='Enter your email' />
            <input className='border-2 border-black p-1 rounded-md shadow-md' type="text" placeholder='Enter your password' />
            <button className='border-2 border-black px-4 py-2 rounded-md shadow-md'>Register</button>
        </form>
    </div>
  )
}

export default Register