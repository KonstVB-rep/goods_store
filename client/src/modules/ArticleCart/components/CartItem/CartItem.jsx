import React from "react";

import { CartItemInfo } from "../CartItemInfo";

const CartItem = () => {
  return (
    <div className="w-full flex flex-col gap-4 ">
      <div className="w-full">
        <CartItemInfo />
      </div>
    </div>
  );
};

export default CartItem;
