import React from "react";
import { cartBanner } from "../assets";
import { CartList } from "../modules/ArticleCart";
import ResetCart from "../modules/ArticleCart/components/ResetCart/ResetCart";

const Cart = () => {
  return (
    <div className="max-w-screen-xl m-auto w-full px-2 flex-grow">
      <img
        className="w-full h-60 object-cover"
        src={cartBanner}
        alt="cartImg"
      />
      <CartList />
      <ResetCart />
    </div>
  );
};

export default Cart;
