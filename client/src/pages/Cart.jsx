import React from "react";
import { cartBanner } from "../assets";
import { CartList } from "../modules/ArticleCart";

const Cart = () => {
  return (
    <div className="max-w-screen-xl m-auto w-full px-2 flex-grow">
      <img
        className="w-full h-60 object-cover"
        src={cartBanner}
        alt="cartImg"
      />
      <CartList />
    </div>
  );
};

export default Cart;
