import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'



const LogoutBtn = () => {

  const dispatch = useDispatch()
  //handle logout state
  const logoutHandler = () => {
    //actually in authservice logout is promise
    authService.logout().then(() => {
      dispatch(logout()) //update the state as logout
    })
  }

  return (
    <button className='inline-block px-6 py-2 duration-200  hover:bg-blue-100 rounded-full' onClick={logoutHandler}>
      LogoutBtn
    </button>
  )
}

export default LogoutBtn