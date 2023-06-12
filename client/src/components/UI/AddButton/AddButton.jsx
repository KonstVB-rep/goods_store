import React from 'react';

import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

import { addToCart } from '../../../redux/features/appSlice';
import Button from '../Button/Button';

const AddButton = ({ product, quantity }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        onClick={() =>
          dispatch(addToCart({ ...product, quantity })) &
          toast.success(`${product.title} is added in cart`)
        }
      >
        add to cart
      </Button>
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
    </>
  );
};

export default AddButton;
