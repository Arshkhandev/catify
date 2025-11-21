import React from 'react'
import { AiTwotoneDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slice/CartSlice';

const CartItem = ({post,postIndex}) => {
    const dispatch = useDispatch();

    function removeHandler() {
        dispatch(remove(post));
    }
  return (
    <div className="flex items-start bg-white p-4 rounded-lg shadow-sm gap-4">
  <div className="w-24 h-24 flex-shrink-0">
    <img src={post.image} alt="img" className="w-full h-full object-contain" />
  </div>
  <div className="flex-1 space-y-1">
    <div className="text-lg font-semibold">{post.title}</div>
    <div className="text-sm text-gray-500 line-clamp-2">{post.description}</div>
    <div className="text-green-600 font-bold">${post.price}</div>
  </div>
  <div onClick={removeHandler} className="text-red-600 text-xl cursor-pointer hover:text-red-800">
    <AiTwotoneDelete />
  </div>
</div>

  )
}

export default CartItem