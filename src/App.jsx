// import React, { useEffect } from 'react'
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import { useLocation } from 'react-router';

const App = () => {

  const { pathname } = useLocation();
  const hideNavbar = pathname === "/login" || pathname === "/register";

  
  return (
    <div className="bg-[#0d0d0d] h-screen" >

    {!hideNavbar && <Navbar />}
      <AppRoutes />
     
    </div>
  )
}

export default App
