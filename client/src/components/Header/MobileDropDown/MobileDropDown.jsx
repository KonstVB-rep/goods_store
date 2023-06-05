import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import ThemeSwitcher from "../../UI/ThemeSwitcher/ThemeSwitcher";
import { Avatar } from "../Avatar";

const MobileDropDown = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShow((p) => !p)}
        className="m-auto flex sm_460:hidden text-black w-12 h-12 sm_460:flex justify-center items-center  dark:text-white"
      >
        {show ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      <AnimatePresence>
        {show && (
          <motion.div
            animate={{ opacity: 1, display: "block" }}
            initial={{ opacity: 0, display: "none" }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            exit={{ opacity: 0, display: "none" }}
          >
            <div className="absolute w-full opacity-0 bg-white dark:bg-black flex gap-4 justify-center sm_460:hidden pb-2 opacity-100 transition-opacity duration-300 border-b-gray-800 border-b-[1px] border-white">
              <ThemeSwitcher />
              <Avatar />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileDropDown;
