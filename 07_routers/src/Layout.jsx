import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
function Layout() {
  return (
    <div>
     <Header />
     {/* To dynamically pass things and keep it as a base */}
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
