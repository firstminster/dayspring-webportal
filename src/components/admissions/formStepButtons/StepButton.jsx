import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const StepButton = ({ handleBack, handleSubmit, activeStep, steps }) => {
  return (
    <div className="flex">
      {activeStep !== 0 && (
        <button className="border border-blue-primary bg-white w-[30px] h-[30px] flex items-center justify-center mr-2 rounded-full">
          <FaArrowLeft
            onClick={handleBack}
            className="w-[13.54px] h-[11.89px] text-blue-primary"
          />
        </button>
      )}
      <button className="bg-blue-primary w-[30px] h-[30px]w-[30px] h-[30px] flex items-center justify-center rounded-full">
        <FaArrowRight
          onClick={handleSubmit}
          className="w-[13.54px] h-[11.89px] text-white "
        />
      </button>
    </div>
  );
};

export default StepButton;
