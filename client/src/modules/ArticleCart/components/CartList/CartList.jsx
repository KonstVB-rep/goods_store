import React from "react";

import { useSelector } from "react-redux";
import { selectProductsInCart } from "redux/features/appSlice";
import { CartItem } from "../CartItem";

const CartList = () => {
  const products = useSelector(selectProductsInCart);

  return (
    <div className="w-full flex flex-col gap-4 ">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-1">
          {products.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartList;
