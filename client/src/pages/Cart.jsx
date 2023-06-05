import React from "react";
import { cartBanner } from "../assets";
import { CartContent } from "../modules/ArticleCart";
import { ResetCart } from "../modules/ArticleCart";

const Cart = () => {
  return (
    <div className="max-w-screen-xl m-auto w-full px-2 flex-grow">
      <img
        className="w-full h-60 object-cover"
        src={cartBanner}
        alt="cartImg"
      />
      <CartContent />
      <ResetCart />
    </div>
  );
};

export default Cart;
