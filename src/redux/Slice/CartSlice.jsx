import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const exists = state.find(item => item.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
    },
    remove: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
