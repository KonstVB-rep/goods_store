import React from "react";
import { Rate } from "antd";

const ProductDetails = ({
  details: { title, oldPrice, price, des, category },
}) => {
  return (
    <>
      <div className="flex flex-col gap-4 self-stretch">
        <h2 className="text-[20px] sm:text-[40px] pt-2 font-bold dark:text-white">
          {title}
        </h2>
        <p className="text-base text-gray-500 uppercase">
          Category:{" "}
          <span className="font-medium text-black uppercase dark:text-white">
            {category}
          </span>
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          <Rate
            allowHalf
            defaultValue={3.5}
            allowClear={false}
            className="px-2 rounded-2xl pb-1 dark:bg-white flex-shrink-0"
          />
          <p className="text-xs text-gray-500 dark:text-white flex-shrink-0">
            (1 Customer review)
          </p>
        </div>
        <div className="flex items-center gap-4 mt-3">
          {oldPrice ? (
            <p className="line-through font-base text-gray-500">${oldPrice} </p>
          ) : null}
          <p className="text-2xl font-medium text-gray-900 dark:text-white">
            ${price}
          </p>
        </div>
      </div>
      <p className="text-base text-gray-500 -mt-3 dark:text-white">
        {des}
        <span className="block mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          asperiores eius hic illum nostrum rem! Facere iusto nobis non optio
          quia quo, voluptas. Aliquam hic nesciunt obcaecati placeat quas
          voluptas.
        </span>
        <span className="block mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          asperiores eius hic illum nostrum rem! Facere iusto nobis non optio
          quia quo, voluptas. Aliquam hic nesciunt obcaecati placeat quas
          voluptas.
        </span>
      </p>
    </>
  );
};

export default ProductDetails;
