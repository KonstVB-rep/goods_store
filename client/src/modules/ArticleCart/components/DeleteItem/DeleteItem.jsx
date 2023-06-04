import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { RiCloseCircleFill } from "react-icons/ri";
import { deleteItem } from "../../../../redux/features/appSlice";

const DeleteItem = memo(({ id }) => {
  const dispatch = useDispatch();
  return (
    <button className=" dark:text-white absolute top-0 right-0 text-xl text-gray-600 h-10 w-10 p-2 hover:text-red-500 hover:scale-110 focus-visible:text-red-500 focus-visible:scale-110 cursor-pointer active:scale-90 dark:text-white dark:hover:text-red-500 dark:focus-visible:text-red-500 duration-200">
      <RiCloseCircleFill
        onClick={() => dispatch(deleteItem(id))}
        className="w-full h-full"
      />
    </button>
  );
});

export default DeleteItem;
