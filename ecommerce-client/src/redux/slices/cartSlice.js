import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addCartItems: (state, action) => {
      state.value.push(action.payload);
    },
    removeCartItems: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addCartItems, removeCartItems } = cartSlice.actions;

export default cartSlice.reducer;
