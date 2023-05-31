import React from "react";
import { Image } from "antd";
import IconSale from "../../../../components/IconsSale/IconSale";

const ProductImage = ({ image, isNew }) => {
  return (
    <>
      <div className="w-3/5 relative rounded-2xl overflow-hidden shadow-xl rounded-md">
        <Image width="100%" height="500px" src={image} />
        <IconSale isNew={isNew} />
      </div>
    </>
  );
};

export default ProductImage;
