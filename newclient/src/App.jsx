import React from 'react'

// Users Routes
import Home from './Pages/User/Home'
import Login from './Pages/User/Login'
import Register from './Pages/User/Register'

// Admin Pages
import AdminHome from './Pages/Admin/Home'
import AdminLogin from './Pages/Admin/Login'
import AdminRegister from './Pages/Admin/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/admin' element={<AdminHome />} />
                <Route path='/admin/login' element={<AdminLogin />} />
                <Route path='/admin/register' element={<AdminRegister />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App