import React, { useCallback, useState } from 'react';

import axios from 'axios';
import { Button } from 'components/UI/Button';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { toast, ToastContainer } from 'react-toastify';
import { selectProductsInCart, selectUser } from 'redux/features/appSlice';

const OrderInfo = () => {
  const productsInCart = useSelector(selectProductsInCart);
  const [pay, setPay] = useState(false);
  const userInfo = useSelector(selectUser);

  const totalCount = productsInCart.reduce((acc, item) => acc + item.quantity, 0);

  const totalAmount = productsInCart.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);

  const handleCheckout = useCallback(() => {
    if (userInfo) {
      setPay(true);
    } else {
      toast.error('Please sign in to Checkout');
    }
  }, [userInfo]);

  const payment = async (token) => {
    await axios.post('http://localhost:8000/pay', {
      amount: totalAmount * 100,
      token: token,
    });
  };

  return (
    <div className="w-full lg:w-1/3 h-fit bg-gray-300 py-6 px-4 rounded-2xl dark:bg-[darkslategrey] dark:text-white">
      <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
        <h2 className="text-2xl font-medium uppercase font-semibold">cart totals</h2>
        <p className="flex items-baseline gap-2 text-base font-bold">
          Total quantity goods: <span className="font-titleFont font-bold text-lg">{totalCount}</span>
        </p>
        <p className="flex items-start gap-4 text-base">
          <span className="font-bold mr-1">Shipping:</span>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, veritatis.</span>
        </p>
      </div>
      <p className="font-semibold flex justify-between my-6 uppercase">
        Total: <span className="text-xl font-bold">${totalAmount}</span>
      </p>
      <Button onClick={handleCheckout} styles="min-w-[225px]">
        proceed to checkout
      </Button>
      {pay && (
        <div className="w-full mt-6 flex items-center justify-center">
          <StripeCheckout
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            name="Online Shopping"
            amount={totalAmount * 100}
            label="Pay for the order"
            description={`Your Payment amount is $${totalAmount}`}
            token={payment}
            email={userInfo?.email}
          />
        </div>
      )}
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

export default OrderInfo;
