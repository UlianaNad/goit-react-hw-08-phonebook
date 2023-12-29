import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { selectIsLoggedIn } from '../redux/auth/selectors'

const PrivateRoute = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    const location = useLocation()

    if (isLoggedIn){
        return children
    }
  return <Navigate state={{from:location}} to='/login' />
}

export default PrivateRoute