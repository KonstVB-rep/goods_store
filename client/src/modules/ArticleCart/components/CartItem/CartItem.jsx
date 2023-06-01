import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItem,
  resetCart,
} from "../../../../redux/features/productsSlice";
import SwitcherQuantity from "../../../../components/SwitcherQuantity/SwitcherQuantity";
import { MdDeleteForever } from "react-icons/md";

const CartItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.cart);

  const handleDetails = (product) => {
    const rootId = product.title.split("").join("");
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };

  return (
    <div className="w-2/3 pr-10 flex flex-col gap-4">
      <div className="w-full ">
        <h2 className="font-titleFont text-2xl uppercase pl-3">
          shopping cart
        </h2>
        <div>
          <div className="px-2">
            {products.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between gap-2 mt-6 rounded-xl bg-gray-200 p-2"
              >
                <div
                  onClick={() => handleDetails(item)}
                  className="flex items-center rounded-xl overflow-hidden flex-shrink-0 cursor-pointer"
                >
                  <img
                    className="w-32 h-32 object-cover "
                    src={item.image}
                    alt="productImg"
                  />
                </div>
                <div>
                  <h2 className="w-52">{item.title}</h2>
                  <p className="w-10 font-bold">${item.price}</p>
                </div>
                <SwitcherQuantity id={item._id} quantity={item.quantity} />
                <div className="flex gap-2 items-center">
                  <div className="px-2">
                    <p className="w-14 w-max">Total cost item:</p>
                    <p className="w-14 font-bold">
                      ${(item.quantity * item.price).toFixed(2)}
                    </p>
                  </div>
                  <button className="text-xl text-gray-600 h-10 w-10 hover:text-red-600 hover:scale-110 focus-visible:text-red-600 focus-visible:scale-110 cursor-pointer duration-300 active:scale-90 ">
                    <MdDeleteForever
                      onClick={() => dispatch(deleteItem(item._id))}
                      className="w-full h-full"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => dispatch(resetCart())}
            className="uppercase text-md rounded-3xl bg-red-500 text-white mt-8 ml-3 py-1 px-6 hover:bg-red-700 focus-visible::bg-red-700 hover:scale-105 focus-visible:scale-105 duration-300 active:scale-95"
          >
            Reset Cart
          </button>
        </div>
      </div>
      <Link
        to="/"
        className="w-max flex items-center gap-1 py-1 px-3 rounded-3xl text-gray-400 duration-300 uppercase font-semibold hover:bg-blue-600 focus-visible:bg-blue-500 hover:text-white focus-visible:text-white active:bg-orange-500 active:scale-95"
      >
        <span>
          <HiOutlineArrowLeft />
        </span>
        go shopping
      </Link>
    </div>
  );
};

export default CartItem;
