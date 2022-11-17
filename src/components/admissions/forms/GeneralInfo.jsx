import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const GeneralInfo = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center ">
      <div className="flex items-center justify-between">
        <p className="text-3xl font-semibold mr-[143px]">General Information</p>
        <div className="flex">
          <button className=" bg-gray-x-11-gray w-[30px] h-[30px] flex items-center justify-center mr-2 rounded-full">
            <FaArrowLeft className="w-[13.54px] h-[11.89px]" />
          </button>
          <button className="bg-blue-primary w-[30px] h-[30px]w-[30px] h-[30px] flex items-center justify-center rounded-full">
            <FaArrowRight className="w-[13.54px] h-[11.89px] text-white " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
