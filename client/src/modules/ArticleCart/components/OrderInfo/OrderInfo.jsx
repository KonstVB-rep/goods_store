import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const OrderInfo = () => {
  const productsInCart = useSelector((state) => state.products.cart);
  const [pay, setPay] = useState(false);
  const userInfo = useSelector((state) => state.products.userInfo);

  const totalCount = productsInCart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const totalAmount = productsInCart
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2);

  const handleCheckout = () => {
    if (userInfo) {
      setPay(true);
      console.log("order ok");
    } else {
      toast.error("Please sign in to Checkout");
    }
  };

  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmount * 100,
      token: token,
    });
  };

  return (
    <div className="w-1/3 bg-[#fafafa] py-6 px-4">
      <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
        <h2 className="text-2xl font-medium uppercase">cart totals</h2>
        <p className="flex items-baseline gap-4 text-base">
          Total quantity goods:{" "}
          <span className="font-titleFont font-bold text-lg">{totalCount}</span>
        </p>
        <p className="flex items-start gap-4 text-base">
          Shipping:{" "}
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
            veritatis.
          </span>
        </p>
      </div>
      <p className="font-titleFont font-semibold flex justify-between mt-6 uppercase">
        Total: <span className="text-xl font-bold">${totalAmount}</span>
      </p>
      <button
        onClick={handleCheckout}
        className="text-base rounded-3xl bg-black text-white w-full py-3 mt-6 hover:bg-black/50 focus-visible:bg-black/50 active:bg-black active:scale-90 duration-300 uppercase"
      >
        proceed to checkout
      </button>
      {pay && (
        <div className="w-full mt-6 flex items-center justify-center">
          <StripeCheckout
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            name="Online Shopping"
            amount={totalAmount * 100}
            label="Pay for the order"
            description={`Your Payment amount is $${totalAmount}`}
            token={payment}
            email={userInfo.email}
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
