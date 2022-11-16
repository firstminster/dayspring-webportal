import React from "react";
import { Link } from "react-router-dom";
import { Page404 } from "../../assets/importAssets";

const NotFound = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center  w-full h-full z-50">
      <div className="flex flex-col items-center ">
        {/* <img src={Page404} alt="" className="w-[300px] h=[300px] " /> */}
        <h2 className="text-7xl lg:text-9xl font-bold text-rusty-red">404!</h2>
        <p className="text-sm lg:text-lg  mt-5">
          {/* THE PAGE YOU WERE LOOKING FOR DOESN'T EXIT. */}
          The page you were looking for doesn't exit.
        </p>
        <p className="text-sm lg:text-lg ">
          {/* YOU MAY HAVE MISTYPED THE ADDRESS OR THE PAGE MAY HAVE MOVED. */}
          You may have mistyped the address or the page may have moved.
        </p>
        <Link
          to="/"
          className="text-blue-primary hover:text-medium-orchid transition-all duration-300 ease-out mt-10"
        >
          Go to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
