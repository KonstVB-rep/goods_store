import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  userInfo: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: {
      reducer: (state, { payload }) => {
        const item = state.cart.find((item) => item._id === payload._id);
        if (item) {
          item.quantity += payload.quantity;
        } else {
          state.cart.push(payload);
        }
      },
      prepare: (item) => {
        const count = item.quantity ? item.quantity : 1;
        return { payload: { ...item, quantity: count } };
      },
    },
    increment: (state, { payload }) => {
      const item = state.cart.find((item) => item._id === payload._id);
      if (item) {
        item.quantity++;
      }
    },
    decrement: (state, { payload }) => {
      const item = state.cart.find((item) => item._id === payload._id);
      if (item.quantity < 1) {
        item.quantity = 0;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, { payload }) => {
      const itemIndex = state.cart.findIndex(
        (item) => item._id === payload._id
      );
      state.cart.splice(itemIndex, 1);
    },
    resetCart: (state) => {
      state.cart = [];
    },
    addUser: (state, { payload }) => {
      state.userInfo = payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  increment,
  decrement,
  addUser,
  removeUser,
} = productsSlice.actions;

export default productsSlice.reducer;
