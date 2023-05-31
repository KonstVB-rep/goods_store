import React, { useState } from "react";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { addToCart } from "../../redux/features/productsSlice";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

const SwitcherQuantity = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  return (
    <div className="flex gap-4">
      <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3 rounded-lg">
        <p className="text-lg ">Quantity</p>
        <div className="flex items-center text-sm font-semibold gap-2">
          <button
            onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
            className="border-none rounded-md flex-shrink-0 h-10 font-normal text-lg flex outline-none items-center justify-center hover:bg-[#bc2525] #bc2525 hover:text-white focus-visible:bg-[#bc2525] focus-visible:text-white cursor-pointer duration-300 active:scale-90"
          >
            <CiSquareMinus className="w-full h-full" />
          </button>
          {quantity}
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="border-none rounded-md flex-shrink-0 h-10 font-normal text-lg flex outline-none items-center justify-center hover:bg-[#50ad50] hover:text-white focus-visible:bg-[#50ad50] focus-visible:text-white cursor-pointer duration-300 active:scale-90"
          >
            <CiSquarePlus className="w-full h-full" />
          </button>
        </div>
      </div>
      <button
        onClick={() =>
          dispatch(addToCart({ ...product, quantity })) &
          toast.success(`${product.title} is added in cart`)
        }
        className="bg-black text-white rounded-[30px] py-1 px-6 active:bg-[#69b1ff] active:text-black uppercase hover:bg-[#0958d9] focus-visible:bg-[#0958d9] focus-visible:border-gray-900 duration-300"
      >
        add to cart
      </button>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default SwitcherQuantity;
