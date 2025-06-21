import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/User/Header/Header.jsx'

function User() {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default User