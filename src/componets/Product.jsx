import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slice/CartSlice';
import { toast } from 'react-toastify';

const Product = ({post}) => {
    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    function removeFromCart (){
      dispatch(remove(post));
      toast.error("item remmoved sussesfully");
    }
  

    function AddtoCart () {
      dispatch(add(post));
      toast.success("item add to cart");
    }
  return (
   <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center hover:scale-[1.02] transition">
  <div className="h-40 w-full flex justify-center items-center mb-4">
    <img src={post.image} alt="img" className="h-full object-contain" />
  </div>
  <div className="text-lg font-semibold truncate w-full mb-2">{post.title}</div>
  <div className="text-sm text-gray-500 mb-2 line-clamp-2">{post.description}</div>
  <div className="text-green-600 font-bold mb-3">${post.price}</div>
  <div>
    {
      cart.some((p) => p.id == post.id) ?
        (<button onClick={removeFromCart} className="px-4 py-2 rounded bg-gray-800 text-white text-sm hover:bg-gray-700">Remove</button>) :
        (<button onClick={AddtoCart} className="px-4 py-2 rounded bg-green-600 text-white text-sm hover:bg-green-500">Add to Cart</button>)
    }
  </div>
</div>

  )
}

export default Product