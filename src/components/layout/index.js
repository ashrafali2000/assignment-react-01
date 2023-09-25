import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./index.css"

const Layout = () => {
  return (
    <div>
      <div className = "layout">
        <Link to="/">Home</Link>
        <Link to="/allProducts">AllProducts</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/account">Account</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Layout