import React from "react";
import GoShopping from "components/UI/GoShopping/GoShopping";
import { useSelector } from "react-redux";
import { selectProductsInCart } from "redux/features/appSlice";

const ContentEmptyCart = () => {
  const productsInCart = useSelector(selectProductsInCart);

  return (
    <>
      {productsInCart.length < 1 && (
        <div className="max-w-screen-xl mx-auto py-10 flex flex-col items-center gap-4 justify-center">
          <p className="text-xl text-orange-600 font-semibold">
            Your Cart is Empty. Please go back to Shopping and add products to
            Cart.
          </p>
          <GoShopping />
        </div>
      )}
    </>
  );
};

export default ContentEmptyCart;
