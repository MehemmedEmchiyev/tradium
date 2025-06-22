import { Outlet } from 'react-router'
import Header from '../components/User/Header/Header.jsx'
import Footer from '../components/User/Footer/Footer.jsx'

function User() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default User