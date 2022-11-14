import React from "react";
import { Oval } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="fixed left-0 top-0 inset-0 flex items-center justify-center text-2xl w-full h-full z-50">
      <Oval
        height={80}
        width={80}
        color="#149AF6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#149AF6"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Spinner;
