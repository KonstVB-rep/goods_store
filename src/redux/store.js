import { configureStore } from "@reduxjs/toolkit";
import products from "./features/productsSlice";

export const store = configureStore({
  reducer: {
    products,
  },
});
