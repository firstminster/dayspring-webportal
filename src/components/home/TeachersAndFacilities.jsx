import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  facilityArrowImg,
  facilityImg,
  teacherArrowImg,
  teacherImg,
} from "../../assets/importAssets";

const TeachersAndFacilities = () => {
  return (
    <div className="absolute top-[208rem] sm:top-[195rem] lg:top-[150rem] inset-x-0">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          {/* teacher section */}
          <div className="flex flex-wrap items-center justify-center">
            <img
              src={teacherImg}
              alt="teacher"
              className=" w-[350px] h-[400px] lg:w-[480px] lg:h-[480px] object-fill rounded-2xl"
            />
            <div className="  md:ml-[37px]">
              <h2 className="text-xl lg:text-4xl font-medium mt-[30px] lg:mt-0">
                Our teachers{" "}
                <span className="inline-block lg:block">are the best</span>
              </h2>
              <p className="text-sm lg:text-xl mt-[23px] w-[350px] lg:w-[492px]">
                Our teachers share our passion for educational excellence and
                are driven by the desire to develop students academically,
                spiritually, physically and socially.
              </p>
              <NavLink
                to="#"
                className="flex items-center justify-center w-[180px] h-[37px] lg:w-[238px] lg:h-[49px] mr-[25px] px-[20px] py-[8px] mt-[23px] bg-blue-primary text-white text-[16px] xl:text-lg rounded-full hover:bg-medium-orchid transition-all duration-300 ease-out "
              >
                <span className="mr-[11px]">See More</span>
                <FaArrowRight className="w-[13.54px] h-[11.89px]" />
              </NavLink>
            </div>
          </div>
          {/* facility section */}
          <div className="flex flex-wrap-reverse items-center mt-[63px] justify-center ">
            <div className="md:mr-[37px]">
              <h2 className=" text-xl lg:text-4xl font-medium mt-[30px] lg:mt-0">
                Modern and excellent{" "}
                <span className="inline-block lg:block">school facilities</span>
              </h2>
              <p className="text-sm lg:text-xl mt-[23px] w-[350px] lg:w-[492px]">
                All of our facilities are designed to encourage innovative
                teaching and improve the quality of education our students
                receive.
              </p>
              <NavLink
                to="#"
                className="flex items-center justify-center w-[180px] h-[37px] lg:w-[238px] lg:h-[49px] mr-[25px] px-[20px] py-[8px] mt-[23px] bg-blue-primary text-white text-[16px] xl:text-lg rounded-full hover:bg-medium-orchid transition-all duration-300 ease-out "
              >
                <span className="mr-[11px]">See More</span>
                <FaArrowRight className="w-[13.54px] h-[11.89px]" />
              </NavLink>
            </div>
            <img
              src={facilityImg}
              alt="facility"
              className="w-[350px] h-[400px] lg:w-[480px] lg:h-[480px] object-fill rounded-2xl"
            />
          </div>
        </div>
      </div>
      <img
        src={teacherArrowImg}
        alt="teacher-arrow"
        className="invisible xl:visible absolute top-0 right-[8rem] xl:right-[12rem] 2xl:right-[22rem] h-[109px] w-[109px] object-contain"
      />
      <img
        src={facilityArrowImg}
        alt="facility-arrow"
        className="invisible xl:visible absolute top-[33rem] left-[2rem] xl:left-[5rem] 2xl:left-[18rem] h-[109px] w-[109px] object-contain"
      />
    </div>
  );
};

export default TeachersAndFacilities;
