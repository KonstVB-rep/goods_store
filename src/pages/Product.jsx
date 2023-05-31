import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
import { Image, Rate } from "antd";
import IconSale from "../components/IconsSale/IconSale";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

const Product = () => {
  const [product, setProduct] = useState({});
  const {
    state: { item },
  } = useLocation();

  const { _id, image, title, oldPrice, price, des, category, isNew } = product;
  useEffect(() => {
    setProduct(item);
  }, [_id]);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10 px-4">
        <div className="w-3/5 relative rounded-2xl overflow-hidden shadow-xl rounded-md">
          <Image width="100%" height="500px" src={image} />
          <IconSale isNew={isNew} />
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-10">
          <div>
            <h2 className="text-4xl font-semibold">{title}</h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="line-through font-base text-gray-500">{oldPrice}</p>
              <p className="text-2xl font-medium text-gray-900">{price}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-base">
              <Rate allowHalf defaultValue={3.5} allowClear={false} />
            </div>
            <p className="text-xs text-gray-500">(1 Customer review)</p>
          </div>
          <p className="text-base text-gray-500 -mt-3">{des}</p>
          <div className="flex gap-4">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3 rounded-lg">
              <p className="text-lg ">Quantity</p>
              <div className="flex items-center text-sm font-semibold gap-2">
                <button
                  // onClick={() =>
                  //   setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                  // }
                  className="border-none rounded-md flex-shrink-0 h-10 font-normal text-lg flex outline-none items-center justify-center hover:bg-[#bc2525] #bc2525 hover:text-white focus-visible:bg-[#bc2525] focus-visible:text-white cursor-pointer duration-300 active:scale-90"
                >
                  <CiSquareMinus className="w-full h-full" />
                </button>
                {/*{baseQty}*/}
                <button
                  // onClick={() => setBaseQty(baseQty + 1)}
                  className="border-none rounded-md flex-shrink-0 h-10 font-normal text-lg flex outline-none items-center justify-center hover:bg-[#50ad50] hover:text-white focus-visible:bg-[#50ad50] focus-visible:text-white cursor-pointer duration-300 active:scale-90"
                >
                  <CiSquarePlus className="w-full h-full" />
                </button>
              </div>
            </div>
            <button
              // onClick={() =>
              //   dispatch(
              //     addToCart({
              //       _id: details._id,
              //       title: details.title,
              //       image: details.image,
              //       price: details.price,
              //       quantity: baseQty,
              //       description: details.description,
              //     })
              //   ) & toast.success(`${details.title} is added`)
              // }
              className="bg-black text-white rounded-[30px] py-3 px-6 active:bg-[#69b1ff] active:text-black uppercase hover:bg-[#0958d9] focus-visible:bg-[#0958d9] focus-visible:border-gray-900 duration-300"
            >
              add to cart
            </button>
          </div>
          <p className="text-base text-gray-500 uppercase">
            Category:{" "}
            <span className="font-medium text-black uppercase">{category}</span>
          </p>
        </div>
      </div>
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

export default Product;
