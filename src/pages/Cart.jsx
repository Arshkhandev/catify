import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from "../componets/CartItem"
import { NavLink } from 'react-router-dom'


const Cart = () => {

  const cart =  useSelector((state) => state.cart);
  const [totalAmount,setTotalAmount] = useState(0);

 useEffect(() => {
  const total = cart.reduce((acc, curr) => acc + curr.price, 0);
  setTotalAmount(total.toFixed(2));   
}, [cart]);
 
 return (
<div className="min-h-screen bg-gray-50 p-6">
  {
    cart.length > 0 ? (
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 space-y-4">
          {
            cart.map((post, index) => (
              <CartItem key={post.id} post={post} postIndex={index} />
            ))
          }
        </div>

        <div className="lg:col-span-2 bg-white p-6 rounded shadow-md h-fit space-y-4">
          <div className="text-2xl font-semibold">Your Cart Summary</div>
          <div className="text-gray-600">Total Items: {cart.length}</div>
          <div className="text-xl font-bold text-green-600">Total Amount: ${totalAmount}</div>
        </div>
      </div>
    ) : (
      <div className="flex flex-col items-center justify-center h-full mt-20 space-y-4">
        <h1 className="text-2xl font-bold text-gray-600">Your cart is empty</h1>
        <NavLink to="/">
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500">
            Shop Now
          </button>
        </NavLink>
      </div>
    )
  }
</div>

  )
}

export default Cart