import React from "react";
import OrderInfo from "../OrderInfo/OrderInfo";
import { ContentEmptyCart } from "../ContentEmptyCart";
import { useSelector } from "react-redux";
import { selectProductsInCart } from "redux/features/appSlice";
import { CartList } from "../CartList";

const CartContent = () => {
  const productsInCart = useSelector(selectProductsInCart);

  return (
    <div>
      <h2 className="text-2xl py-10 uppercase pl-3 dark:text-white tex-center font-semibold">
        shopping cart
      </h2>
      {productsInCart.length > 0 && (
        <div className="flex flex-col">
          <div className="max-w-screen-xl w-full mx-auto pb-20 flex flex-col gap-4 lg:flex-row ">
            <CartList />
            <hr className="my-5 lg:hidden" />
            <OrderInfo />
          </div>
        </div>
      )}
      <ContentEmptyCart />
    </div>
  );
};

export default CartContent;
