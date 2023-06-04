import React from "react";
import GoShopping from "components/UI/GoShopping/GoShopping";

const ContentEmptyCart = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 flex flex-col items-center gap-4 justify-center">
      <p className="text-xl text-orange-600 font-semibold">
        Your Cart is Empty. Please go back to Shopping and add products to Cart.
      </p>
      <GoShopping />
    </div>
  );
};

export default ContentEmptyCart;
