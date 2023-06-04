import React from "react";
import SwitcherQuantity from "components/SwitcherQuantity/SwitcherQuantity";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { DeleteItem } from "../DeleteItem";
import { Image } from "antd";

const CartItemInfo = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.app.cart);

  const handleDetails = (product) => {
    const rootId = product.title.split("").join("");
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
        loading: false,
      },
    });
  };

  return (
    <div className="grid grid-cols-md gap-2 lg:grid-cols-1">
      {products.map((item) => (
        <div
          key={item._id}
          className="relative flex flex-col text-center lg:flex-row gap-2 items-center justify-between rounded-xl bg-gray-200 p-2 dark:bg-[darkslategrey] dark:text-white"
        >
          <div className="flex items-center rounded-xl overflow-hidden flex-shrink-0">
            <Image src={item.image} rootClassName="w-52" />
            {/*<img*/}
            {/*  className="w-52 h-52 lg:w-32 lg:h-32 object-cover "*/}
            {/*  src={item.image}*/}
            {/*  alt="productImg"*/}
            {/*/>*/}
          </div>
          <div className="flex-grow">
            <h2 className="font-bold">
              <button onClick={() => handleDetails(item)}>{item.title}</button>
            </h2>
            <p className="font-semibold">${item.price}</p>
          </div>
          <SwitcherQuantity id={item._id} quantity={item.quantity} />
          <div className="flex gap-2 items-center">
            <div className="px-2 min-w-[150px]">
              <p className="w-max m-auto">Total price:</p>
              <p className="font-bold text-lg">
                ${(item.quantity * item.price).toFixed(2)}
              </p>
            </div>
            <DeleteItem id={item._id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemInfo;
