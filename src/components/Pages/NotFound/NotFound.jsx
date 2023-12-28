import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center min-h-[80vh]'>
        <h1>Sorry page is not found!</h1>
        <Link to="/">Go to homepage!</Link>
    </div>
  )
}

export default NotFound