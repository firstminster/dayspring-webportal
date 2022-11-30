import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const StepButton = ({ handleBack, handleSubmit, activeStep }) => {
  return (
    <div className="flex">
      {activeStep !== 0 && (
        <button
          onClick={handleBack}
          className="border border-blue-primary bg-white w-[30px] h-[30px] flex items-center justify-center mr-2 rounded-full"
        >
          <FaArrowLeft className="w-[13.54px] h-[11.89px] text-blue-primary" />
        </button>
      )}
      <button
        onClick={handleSubmit}
        className="bg-blue-primary w-[30px] h-[30px]w-[30px] h-[30px] flex items-center justify-center rounded-full"
      >
        <FaArrowRight className="w-[13.54px] h-[11.89px] text-white " />
      </button>
    </div>
  );
};

export default StepButton;
