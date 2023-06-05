import React from "react";

import { Image } from "antd";
import SwitcherQuantity from "components/UI/SwitcherQuantity/SwitcherQuantity";
import { DeleteItem } from "../DeleteItem";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductsInCart } from "redux/features/appSlice";

const CartItem = () => {
  const navigate = useNavigate();
  const products = useSelector(selectProductsInCart);

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
    <div className="w-full flex flex-col gap-4 ">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-1">
          {products.map((item) => (
            <div
              key={item._id}
              className="relative flex flex-col sm_540:flex-row md:max-w-none text-center gap-2 items-center justify-between rounded-xl bg-gray-200 p-2 dark:bg-[darkslategrey] dark:text-white"
            >
              <div className="flex items-center rounded-xl overflow-hidden flex-shrink-0 md:h-full">
                <Image src={item.image} rootClassName="w-52" />
              </div>
              <div className="flex gap-2 flex-col md:flex-row items-center sm_540:pt-6 flex-grow">
                <div className="flex-grow">
                  <h2 className="font-bold">
                    <button onClick={() => handleDetails(item)}>
                      {item.title}
                    </button>
                  </h2>
                  <p className="font-semibold mt-2">${item.price}</p>
                </div>
                <SwitcherQuantity id={item._id} quantity={item.quantity} />
                <div className="flex gap-2 items-center">
                  <div className="min-w-[120px]">
                    <p className="w-max m-auto">Total price:</p>
                    <p className="font-bold text-lg">
                      ${(item.quantity * item.price).toFixed(2)}
                    </p>
                  </div>
                  <DeleteItem id={item._id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
