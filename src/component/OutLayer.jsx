import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router'

function OutLayer() {
  
  
  
  
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <Outlet/>

        <Footer />

    </div>
  )
}

export default OutLayer


export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};