import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { patternDoodleBlackImg } from "../../assets/importAssets";

const CallToAction = () => {
  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="absolute text-white flex flex-col justify-center items-center py-[46px]">
        <h2 className="text-3xl lg:text-4xl w-[440px] lg:w-[803px] text-center font-semibold">
          Provide standard education for your kids and watch them become the
          successful leaders they were born to be.
        </h2>
        <NavLink
          to="#"
          className="flex items-center justify-center w-[281px] h-[49px] mt-[22px] bg-white text-blue-primary text-sm xl:text-lg rounded-full hover:bg-medium-orchid hover:text-white transition-all duration-300 ease-out "
        >
          <span className="mr-[11px]">Start Now</span>
          <FaArrowRight className="w-[13.54px] h-[11.89px]" />
        </NavLink>
      </div>
      {/* bg-image */}
      <img
        src={patternDoodleBlackImg}
        alt="pattern"
        className="bg-blue-primary sm:rounded-2xl w-full h-[311px] lg:w-[1176px] lg:h-[298px] object-cover"
      />
    </div>
  );
};

export default CallToAction;
