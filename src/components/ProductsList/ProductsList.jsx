import React from "react";
import { ProductCard } from "../ProductCard";

const ProductsList = ({ products }) => {
  console.log(products);
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-xl bg-black text-white py-2 w-full text-center uppercase">
          shopping everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          quos fugit inventore, cumque quae corporis ratione tenetur eos
          voluptates neque magnam soluta aperiam omnis perspiciatis reiciendis
          asperiores repudiandae assumenda quidem.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-list gap-6 py-10 px-4">
        {products?.map((item) => (
          <ProductCard key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
