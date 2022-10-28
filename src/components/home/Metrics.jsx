import React from "react";
import { metricsImg } from "../../assets/importAssets";

const Metrics = () => {
  return (
    <div className="absolute top-[135rem] inset-x-0 ">
      <div className="container mx-auto absolute inset-0 flex justify-center items-center text-white space-x-[169px] ">
        <div className="text-center">
          <h2 className="text-[40px] font-semibold -mb-3">5000+</h2>
          <p className="text-lg font-light ">Alumnis</p>
        </div>
        <div className="text-center">
          <h2 className="text-[40px] font-semibold -mb-3">30+</h2>
          <p className="text-lg font-light">Teachers</p>
        </div>
        <div className="text-center">
          <h2 className="text-[40px] font-semibold -mb-3">90%</h2>
          <p className="text-lg font-light">Success Rate</p>
        </div>
      </div>
      <img
        src={metricsImg}
        alt="metrics-bg"
        className="h-[163px] w-full object-cover"
      />
    </div>
  );
};

export default Metrics;
