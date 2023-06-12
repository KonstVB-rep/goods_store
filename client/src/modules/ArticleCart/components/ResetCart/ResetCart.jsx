import React from 'react';

import GoShopping from 'components/UI/GoShopping/GoShopping';
import { useDispatch, useSelector } from 'react-redux';
import { resetCart, selectProductsInCart } from 'redux/features/appSlice';

const ResetCart = () => {
  const dispatch = useDispatch();
  const productsInCart = useSelector(selectProductsInCart);

  if (productsInCart.length < 1) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 pb-10">
      <div>
        <button
          onClick={() => dispatch(resetCart())}
          className="uppercase text-md rounded-3xl bg-red-500 text-white ml-3 py-1 px-6 hover:bg-red-700 focus-visible::bg-red-700 hover:scale-105 focus-visible:scale-105"
        >
          Reset Cart
        </button>
      </div>
      <GoShopping />
    </div>
  );
};

export default ResetCart;
