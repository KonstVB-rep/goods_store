import React from 'react';

import { useSelector } from 'react-redux';
import { selectProductsInCart } from 'redux/features/appSlice';

import { CartList } from '../CartList';
import { ContentEmptyCart } from '../ContentEmptyCart';
import { OrderInfo } from '../OrderInfo';

const CartContent = () => {
  const productsInCart = useSelector(selectProductsInCart);

  return (
    <div>
      {productsInCart.length > 0 && (
        <div className="flex flex-col">
          <h2 className="text-2xl py-10 uppercase pl-3 dark:text-white tex-center font-semibold">shopping cart</h2>

          <div className="max-w-screen-xl w-full mx-auto pb-20 flex flex-col gap-4 lg:flex-row ">
            <CartList />

            <hr className="my-5 lg:hidden" />

            <OrderInfo />
          </div>
        </div>
      )}
      <ContentEmptyCart />
    </div>
  );
};

export default CartContent;
