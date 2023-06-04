import React from "react";
import { CartItem } from "../CartItem";
import OrderInfo from "../OrderInfo/OrderInfo";
import { ContentEmptyCart } from "../ContentEmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "redux/features/appSlice";
import GoShopping from "components/UI/GoShopping/GoShopping";

const CartList = () => {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.app.cart);
  return (
    <div>
      <h2 className="text-2xl py-10 uppercase pl-3 dark:text-white tex-center font-semibold">
        shopping cart
      </h2>
      {productsInCart.length > 0 ? (
        <div className="flex flex-col">
          <div className="max-w-screen-xl w-full mx-auto pb-20 flex flex-col gap-4 lg:flex-row ">
            <CartItem />
            <hr className="my-5 lg:hidden" />
            <OrderInfo />
          </div>
          <div className="flex flex-col gap-2 pb-10">
            <div>
              <button
                onClick={() => dispatch(resetCart())}
                className="uppercase text-md rounded-3xl bg-red-500 text-white ml-3 py-1 px-6 hover:bg-red-700 focus-visible::bg-red-700 hover:scale-105 focus-visible:scale-105 duration-300 active:scale-95"
              >
                Reset Cart
              </button>
            </div>
            <GoShopping />
          </div>
        </div>
      ) : (
        <ContentEmptyCart />
      )}
    </div>
  );
};

export default CartList;
