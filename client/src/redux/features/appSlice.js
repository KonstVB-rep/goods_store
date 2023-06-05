import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  userInfo: null,
  theme: "light",
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state, { payload }) => {
      state.theme = payload;
    },
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
      const item = state.cart.find((item) => item._id === payload);
      if (item) {
        item.quantity++;
      }
    },
    decrement: (state, { payload }) => {
      const item = state.cart.find((item) => item._id === payload);
      if (item.quantity === 1) {
        const itemIndex = state.cart.findIndex((item) => item._id === payload);
        state.cart.splice(itemIndex, 1);
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, { payload }) => {
      const itemIndex = state.cart.findIndex((item) => item._id === payload);
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
  setTheme,
} = appSlice.actions;

export const selectTheme = (state) => state.app.theme;
export const selectProductsInCart = (state) => state.app.cart;
export const selectUser = (state) => state.app.userInfo;

export default appSlice.reducer;
