import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { data } from "assets";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden flex-grow">
      <div className="h-[100vw] max-h-[800px] w-screen relative overflow-hidden bg-gray-500">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            className="w-screen min-h-full object-cover"
            src={data[0]}
            alt="SlideOne"
            loading="eager"
          />
          <img
            className="w-screen min-h-full object-cover"
            src={data[1]}
            alt="SlideTwo"
            loading="lazy"
          />
          <img
            className="w-screen min-h-full object-cover"
            src={data[2]}
            alt="SlideThree"
            loading="lazy"
          />
          <img
            className="w-screen min-h-full object-cover"
            src={data[3]}
            alt="SlideFour"
            loading="lazy"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-8">
          <button
            onClick={prevSlide}
            className="w-14 h-12 border-[2px] rounded-md border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 "
          >
            <HiArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="w-14 h-12 border-[2px] rounded-md border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900"
          >
            <HiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
