import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { allWorkImg, learningImg, parentsImg } from "../../assets/importAssets";

const Blog = () => {
  return (
    <div className="absolute top-[220rem] inset-x-0">
      <div className="container mx-auto flex flex-col items-center ">
        {/* <div className="flex flex-col items-center "> */}
        <div className=" ">
          <div className="flex justify-center ">
            <h2 className=" lg:mr-[750px] font-semibold text-[32px]">Blogs</h2>
            <NavLink
              to="#"
              className="flex items-center justify-center w-[185px] h-[49px]  bg-blue-primary text-white text-sm xl:text-lg rounded-full hover:bg-medium-orchid transition-all duration-300 ease-out "
            >
              <span className="mr-[11px]">See all</span>
              <FaArrowRight className="w-[13.54px] h-[11.89px]" />
            </NavLink>
          </div>
          <p className="text-lg">
            Read up on recent articles from the school press...
          </p>
        </div>
        {/* blogs card */}
        <div className="flex flex-wrap justify-center  space-y-10">
          {/* card-1 */}
          <div className=" mr-[21px] mt-10">
            <img
              src={learningImg}
              alt="learning"
              className="w-[322px] h-[192px] object-contain"
            />
            <h3 className="text-xl font-semibold mt-[17px] mb-[11px] ">
              Learning the right way
            </h3>
            <p className="text-sm mb-[17px]">20th sept, 2022</p>
            <NavLink
              to="#"
              className="flex items-center justify-center w-[185px] h-[49px]  bg-blue-primary text-white text-sm xl:text-lg rounded-full hover:bg-medium-orchid transition-all duration-300 ease-out "
            >
              <span className="mr-[11px]">Read More</span>
              <FaArrowRight className="w-[13.54px] h-[11.89px]" />
            </NavLink>
          </div>
          {/* card-2 */}
          <div className="mr-[21px]">
            <img
              src={parentsImg}
              alt="parents"
              className="w-[322px] h-[192px] object-contain"
            />
            <h3 className="text-xl font-semibold mt-[17px] mb-[11px]">
              Parents! Monitor your kids
            </h3>
            <p className="text-sm mb-[17px]">20th sept, 2022</p>
            <NavLink
              to="#"
              className="flex items-center justify-center w-[185px] h-[49px] bg-blue-primary text-white text-sm xl:text-lg rounded-full hover:bg-medium-orchid transition-all duration-300 ease-out "
            >
              <span className="mr-[11px]">Read More</span>
              <FaArrowRight className="w-[13.54px] h-[11.89px]" />
            </NavLink>
          </div>
          {/* card-3 */}
          <div className="">
            <img
              src={allWorkImg}
              alt="all-work"
              className="w-[322px] h-[192px] object-contain"
            />
            <h3 className="text-xl font-semibold mt-[17px] mb-[11px]">
              All work no play makes Jack a ..
            </h3>
            <p className="text-sm mb-[17px]">20th sept, 2022</p>
            <NavLink
              to="#"
              className="flex items-center justify-center w-[185px] h-[49px] bg-blue-primary text-white text-sm xl:text-lg rounded-full hover:bg-medium-orchid transition-all duration-300 ease-out "
            >
              <span className="mr-[11px]">Read More</span>
              <FaArrowRight className="w-[13.54px] h-[11.89px]" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Blog;
