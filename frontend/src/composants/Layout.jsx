import React from 'react'
 import { Outlet } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
    

const Layout = () => {
  return (
    <>
     <Footer />
      <Outlet />
      <Header />
      
    </>
  )
}

export default Layout
