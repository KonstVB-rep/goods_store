import React, { memo } from 'react';

import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci';
import { useDispatch } from 'react-redux';

import { decrement, increment } from '../../../redux/features/appSlice';

const SwitcherQuantity = memo(({ id, quantity }) => {
  const dispatch = useDispatch();
  const decrementQuantity = () => dispatch(decrement(id));
  const incrementQuantity = () => dispatch(increment(id));

  return (
    <div className="flex gap-2">
      <div className="w-max flex items-center justify-between text-gray-500 dark:text-white gap-4 border p-3 rounded-lg">
        <div className="flex items-center text-sm font-semibold gap-2">
          <button
            onClick={decrementQuantity}
            className="border-none rounded-md flex-shrink-0 h-10 font-normal text-lg flex outline-none items-center justify-center hover:bg-[#bc2525] #bc2525 hover:text-white focus-visible:bg-[#bc2525] focus-visible:text-white cursor-pointer"
          >
            <CiSquareMinus className="w-full h-full" />
          </button>
          <span className="w-5">{quantity}</span>
          <button
            onClick={incrementQuantity}
            className="border-none rounded-md flex-shrink-0 h-10 font-normal text-lg flex outline-none items-center justify-center hover:bg-[#50ad50] hover:text-white focus-visible:bg-[#50ad50] focus-visible:text-white cursor-pointer "
          >
            <CiSquarePlus className="w-full h-full" />
          </button>
        </div>
      </div>
    </div>
  );
});

export default SwitcherQuantity;
