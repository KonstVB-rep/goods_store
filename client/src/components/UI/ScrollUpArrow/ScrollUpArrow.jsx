import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollUpArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibleArrow = () => {
    const position = document.documentElement.scrollTop;
    if (position > 1000) {
      setIsVisible(true);
    } else setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleArrow);
    return () => window.removeEventListener("scroll", handleVisibleArrow);
  });
  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? "block" : "hidden"
      } fixed h-14 w-14 right-10 bottom-[30vh] border-2 border-white rounded-full select-none z-10 overflow-hidden hover:scale-105 focus-visible:scale-105 active:scale-90 duration-200`}
    >
      <FaArrowCircleUp
        className="w-full h-full bg-white"
        // className="h-full w-full bg-white fill-gray-900 rounded-full  hover:fill-white hover:bg-black focus-visible:fill-white focus-visible:bg-black"
      />
    </button>
  );
};

export default ScrollUpArrow;
