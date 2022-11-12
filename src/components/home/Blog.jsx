import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { allWorkImg, learningImg, parentsImg } from "../../assets/importAssets";

const Blog = () => {
  return (
    <div className="absolute top-[295rem] sm:top-[280rem] md:top-[255rem] lg:top-[220rem] inset-x-0">
      <div className="container mx-auto flex flex-col items-center ">
        {/* <div className="flex flex-col items-center "> */}
        <div className="">
          <div className="flex justify-center items-center text-center ">
            <h2 className="mr-[150px] sm:mr-[430px] lg:mr-[750px] font-semibold text-xl lg:text-[32px]">
              Blogs
            </h2>
            <NavLink
              to="#"
              className="flex items-center justify-center lg:w-[185px] lg:h-[49px] lg:bg-blue-primary text-blue-primary lg:text-white text-sm xl:text-lg uppercase lg:normal-case rounded-full hover:text-medium-orchid lg:hover:text-white lg:hover:bg-medium-orchid transition-all duration-300 ease-out "
            >
              <span className="mr-[11px]">See all</span>
              <FaArrowRight className="w-[13.54px] h-[11.89px]" />
            </NavLink>
          </div>
          <p className=" mt-[14px] md:mt-0 text-[16px] lg:text-lg">
            Read up on recent articles from the{" "}
            <span className="block lg:inline-block">school press...</span>
          </p>
        </div>
        {/* blogs card */}
        <div className="flex flex-wrap justify-center  space-y-10">
          {/* card-1 */}
          <div className=" mr-[21px] mt-10">
            <img
              src={learningImg}
              alt="learning"
              className="w-[291px] h-[174px] lg:w-[322px] lg:h-[192px] object-cover rounded-2xl"
            />
            <h3 className="text-lg lg:text-xl font-semibold mt-[17px] mb-[11px] ">
              Learning the right way
            </h3>
            <p className="text-sm mb-[17px]">20th sept, 2022</p>
            <NavLink
              to="#"
              className="flex items-center justify-center w-[180px] h-[37px] lg:w-[185px] lg:h-[49px] bg-blue-primary text-white text-sm xl:text-lg rounded-full hover:bg-medium-orchid transition-all duration-300 ease-out"
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
              className="w-[291px] h-[174px] lg:w-[322px] lg:h-[192px] object-cover rounded-2xl"
            />
            <h3 className="text-lg lg:text-xl font-semibold mt-[17px] mb-[11px]">
              Parents! Monitor your kids
            </h3>
            <p className="text-sm mb-[17px]">20th sept, 2022</p>
            <NavLink
              to="#"
              className="flex items-center justify-center w-[180px] h-[37px] lg:w-[185px] lg:h-[49px] bg-blue-primary text-white text-sm xl:text-lg rounded-full hover:bg-medium-orchid transition-all duration-300 ease-out "
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
              className="w-[291px] h-[174px] lg:w-[322px] lg:h-[192px] object-cover rounded-2xl"
            />
            <h3 className="text-lg lg:text-xl font-semibold mt-[17px] mb-[11px]">
              All work no play makes Jack a ..
            </h3>
            <p className="text-sm mb-[17px]">20th sept, 2022</p>
            <NavLink
              to="#"
              className="flex items-center justify-center w-[180px] h-[37px] lg:w-[185px] lg:h-[49px] bg-blue-primary text-white text-sm xl:text-lg rounded-full hover:bg-medium-orchid transition-all duration-300 ease-out "
            >
              <span className="mr-[11px]">Read More</span>
              <FaArrowRight className="w-[13.54px] h-[11.89px]" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
