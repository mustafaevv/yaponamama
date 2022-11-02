import { createSelector, createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addToCart: (state, action) => {
      state[action.payload.id] = {
        ...action.payload,
        quantity: 1,
      };
    },
    addOne: (state, action) => {
      state[action.payload].quantity++;
    },
    removeOne: (state, action) => {
      if (state[action.payload].quantity > 1) {
        state[action.payload].quantity--;
      }
    },
  },
});

export const getItemCount = createSelector(
  (state) => Object.values(state.cart),
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const { addToCart, addOne, removeOne } = cart.actions;

export default cart.reducer;
