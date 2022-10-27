import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  facilityArrowImg,
  facilityImg,
  teacherArrowImg,
  teacherImg,
} from "../assets/importAssets";

const TeachersAndFacilities = () => {
  return (
    <div className="container mx-auto">
      <img
        src={teacherArrowImg}
        alt="teacher"
        className="absolute top-[150rem] xl:right-[12rem] 2xl:right-[20rem] h-[109px] w-[109px] object-contain"
      />
      <img
        src={facilityArrowImg}
        alt="teacher"
        className="absolute top-[183rem] xl:left-[5rem] 2xl:left-[20rem] h-[109px] w-[109px] object-contain"
      />
      <div className="absolute top-[150rem] inset-x-0">
        <div className="flex flex-col items-center">
          {/* teacher section */}
          <div className="flex items-center">
            <img
              src={teacherImg}
              alt="teacher"
              className="w-[480px] h-[480px] object-cover"
            />
            <div className="ml-[37px]">
              <h2 className="font-medium text-4xl">
                Our teachers
                <span className="block">are the best</span>
              </h2>
              <p className="text-xl mt-[23px] w-[492px]">
                Our teachers share our passion for educational excellence and
                are driven by the desire to develop students academically,
                spiritually, physically and socially.
              </p>
              <NavLink
                to="#"
                className="flex items-center justify-center w-[238px] h-[49px] mr-[25px] px-[20px] py-[8px] mt-[23px] bg-blue-primary text-white text-sm xl:text-lg rounded-full hover:bg-medium-orchid transition-all duration-300 ease-out "
              >
                <span className="mr-[11px]">See More</span>
                <FaArrowRight className="w-[13.54px] h-[11.89px]" />
              </NavLink>
            </div>
          </div>
          {/* facility section */}
          <div className="flex items-center mt-[63px]">
            <div className="mr-[37px]">
              <h2 className="font-medium text-4xl">
                Modern and excellent
                <span className="block">school facilities</span>
              </h2>
              <p className="text-xl mt-[23px] w-[492px]">
                All of our facilities are designed to encourage innovative
                teaching and improve the quality of education our students
                receive.
              </p>
              <NavLink
                to="#"
                className="flex items-center justify-center w-[238px] h-[49px] mr-[25px] px-[20px] py-[8px] mt-[23px] bg-blue-primary text-white text-sm xl:text-lg rounded-full hover:bg-medium-orchid transition-all duration-300 ease-out "
              >
                <span className="mr-[11px]">See More</span>
                <FaArrowRight className="w-[13.54px] h-[11.89px]" />
              </NavLink>
            </div>
            <img src={facilityImg} alt="facility" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersAndFacilities;
