import { Route, Routes } from 'react-router'
import App from '../App'
import User from '../layout/User'
import Admin from '../layout/Admin'
import Home from '../pages/User/Home'

function Router() {
  return (
    <Routes>
        <Route element={<App />}>
            <Route path='/' element={<User />} >
                <Route path='/' element={<Home />} />
            </Route>
            <Route path='/admin' element={<Admin />} >

            </Route>   
        </Route>
    </Routes>
  )
}

export default Router