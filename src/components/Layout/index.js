import { Outlet } from 'react-router-dom'
import './index.css' 
import React from 'react'
import Navbar from '../Navbar/index.js' 

const Layout = () => {
    return (
      <div className='App'>
        <Navbar />
      
          <Outlet />
          
      </div>
    )

}

export default Layout