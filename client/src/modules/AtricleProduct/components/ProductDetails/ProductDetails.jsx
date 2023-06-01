import React from "react";
import { Rate } from "antd";

const ProductDetails = ({
  details: { title, oldPrice, price, des, category },
}) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p className="text-base text-gray-500 uppercase">
          Category:{" "}
          <span className="font-medium text-black uppercase">{category}</span>
        </p>
        <div className="flex items-center gap-2">
          <Rate allowHalf defaultValue={3.5} allowClear={false} />
          <p className="text-xs text-gray-500">(1 Customer review)</p>
        </div>
        <div className="flex items-center gap-4 mt-3">
          {oldPrice ? (
            <p className="line-through font-base text-gray-500">${oldPrice} </p>
          ) : null}
          <p className="text-2xl font-medium text-gray-900">${price}</p>
        </div>
      </div>
      <p className="text-base text-gray-500 -mt-3">{des}</p>
    </>
  );
};

export default ProductDetails;
