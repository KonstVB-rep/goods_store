import React from "react";
import { CartItem } from "../modules/ArticleCart/components/CartItem";
import { useSelector } from "react-redux";
import { cartBanner } from "../assets";
import OrderInfo from "../modules/ArticleCart/components/OrderInfo/OrderInfo";
import { ContentEmptyCart } from "../modules/ArticleCart";

const Cart = () => {
  const productsInCart = useSelector((state) => state.products.cart);

  return (
    <div className="max-w-screen-xl m-auto w-full px-2 flex-grow">
      <img
        className="w-full h-60 object-cover"
        src={cartBanner}
        alt="cartImg"
      />
      {productsInCart.length > 0 ? (
        <div className="max-w-screen-xl mx-auto py-20 flex">
          <CartItem />
          <OrderInfo />
        </div>
      ) : (
        <ContentEmptyCart />
      )}
    </div>
  );
};

export default Cart;
