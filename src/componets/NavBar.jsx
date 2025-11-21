import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"
import { MdShoppingCart } from "react-icons/md";

const NavBar = () => {
  return (
   <div  style={{ backgroundColor: '#AED002' }} className="text-white flex justify-between items-center p-4 px-6 shadow-md">
  <div>
    <NavLink to="/">
      <img src={logo} alt="logo" className="h-10" />
    </NavLink>
  </div>
  <div className="flex items-center space-x-6">
    <NavLink to="/" className="hover:text-green-400 text-lg font-medium">Home</NavLink>
    <NavLink to="/cart" className="text-2xl hover:text-green-400">
      <MdShoppingCart />
    </NavLink>
  </div>
</div>

  )
}

export default NavBar