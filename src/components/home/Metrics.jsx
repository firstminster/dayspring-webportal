import React from "react";
import {
  metricsImg,
  patternDoodleWhiteMetricsMobileImg,
} from "../../assets/importAssets";

const Metrics = () => {
  return (
    <div className="absolute top-[173rem] sm:top-[160rem] lg:top-[135rem] inset-x-0 ">
      <div className="container mx-auto absolute inset-0 flex flex-col lg:flex-row justify-center items-center text-white space-y-[41px] lg:space-y-0 lg:space-x-[169px] ">
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
      {/* bg-image */}
      <img
        src={metricsImg}
        alt="metrics-bg"
        className="hidden lg:block h-[163px] w-full object-cover"
      />
      {/* bg-image-mobile */}
      <img
        src={patternDoodleWhiteMetricsMobileImg}
        alt="metrics-bg"
        className="lg:hidden h-[462px] w-full object-cover bg-blue-primary"
      />
    </div>
  );
};

export default Metrics;
