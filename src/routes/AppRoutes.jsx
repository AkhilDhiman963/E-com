import React from 'react'
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import Shop from '../pages/SHop';
import About from '../pages/About';
import Detail from '../pages/Detail';
import CartSection from '../pages/CartSection';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ProtectedRoute from '../components/ProtectedRoute';
// import ProtectedRoute from '../components/ProtectedRoute';

const AppRoutes = () => {
  return (
    <div>
    <Routes>
  <Route path="/login" element={<Login/>} />
  <Route path="/register" element={<Register/>} />

  <Route element={<ProtectedRoute />}>
    <Route path="/" element={<Home/>} />
    <Route path="/shop" element={<Shop/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/detail/:id" element={<Detail/>} />
    <Route path="/cart" element={<CartSection/>} />
  </Route>
</Routes>
    </div>
  )
}

export default AppRoutes
