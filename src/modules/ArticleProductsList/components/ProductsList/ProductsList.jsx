import React, { useEffect, useState, Suspense } from "react";
import { ProductCard } from "../../../../components/ProductCard";
import { Await, useLoaderData } from "react-router-dom";

const ProductsList = () => {
  const [products, setProducts] = useState();
  const { data } = useLoaderData();

  useEffect(() => {
    setProducts(data);
  }, []);

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
        <Suspense fallback={<h1 className="text-[50px]">Loading....</h1>}>
          <Await
            resolve={products}
            // errorElement={<div>Could not load reviews 😬</div>}
          >
            {(resolvedData) => (
              <>
                {resolvedData?.map((item) => (
                  <ProductCard key={item._id} product={item} />
                ))}
              </>
            )}
          </Await>
        </Suspense>
        {/*{products?.map((item) => (*/}
        {/*  <ProductCard key={item._id} product={item} />*/}
        {/*))}*/}
      </div>
    </div>
  );
};

export default ProductsList;
