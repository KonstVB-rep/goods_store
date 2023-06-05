import React from "react";
import { Image } from "antd";
import IconSale from "../../../../components/IconsSale/IconSale";

const ProductImage = ({ image, isNew }) => {
  return (
    <>
      <div className="w-full m-auto mt-0 md:w-3/5 relative rounded-2xl overflow-hidden shadow-y dark:shadow-white/20 rounded-2xl bg-gradient-to-r from-gray-300 to-gray-300 self-stretch">
        <Image width="100%" height="100%" src={image} />
        <IconSale isNew={isNew} />
      </div>
    </>
  );
};

export default ProductImage;
