import React, { Suspense, useEffect, useState } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Preloader from "components/UI/Preloader/Preloader";
import { ProductCard } from "../ProductCard";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const { data } = useLoaderData();

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, []);

  return (
    <div className="py-10" id="shop">
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
      <div className="max-w-screen-xl mx-auto grid grid-cols-sm grid-rows-basic gap-6 py-10 px-4 flex-grow">
        <Suspense fallback={<Preloader />}>
          <Await resolve={products}>
            {(resolvedData) => (
              <>
                {resolvedData.map((item) => (
                  <ProductCard key={item._id} product={item} />
                ))}
              </>
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default ProductsList;
