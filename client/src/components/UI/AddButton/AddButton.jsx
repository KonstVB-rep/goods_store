import React from "react";
import { addToCart } from "../../../redux/features/productsSlice";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

const AddButton = ({ product, quantity }) => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() =>
          dispatch(addToCart({ ...product, quantity })) &
          toast.success(`${product.title} is added in cart`)
        }
        className="w-max py-2 bg-black text-white rounded-[30px] py-1 px-6 active:bg-[#69b1ff] active:text-black uppercase hover:bg-[#0958d9] focus-visible:bg-[#0958d9] focus-visible:border-gray-900 duration-300 active:scale-95"
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
    </>
  );
};

export default AddButton;
