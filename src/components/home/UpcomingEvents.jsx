import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const UpcomingEvents = () => {
  return (
    <div className="absolute top-[253rem] inset-x-0">
      <div className="flex justify-center items-center  ">
        <h2 className="lg:mr-[710px] font-semibold text-[32px]">
          Upcoming Events
        </h2>
        <div className="flex ">
          <button className=" bg-gray-x-11-gray w-[30px] h-[30px] flex items-center justify-center mr-2 rounded-full">
            <FaArrowLeft className="w-[13.54px] h-[11.89px]" />
          </button>
          <button className="bg-blue-primary w-[30px] h-[30px]w-[30px] h-[30px] flex items-center justify-center rounded-full">
            <FaArrowRight className="w-[13.54px] h-[11.89px] text-white " />
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col items-center overflow-scroll scrollbar-hide p-3">
        {/* event-cards */}
        <div className=" flex justify-center mt-[30px] pl-[510px]">
          {/* card-1 */}
          <div className="bg-blue-primary w-[322px] h-[331px] rounded-2xl text-white mr-6 ">
            <div className="pl-10 pt-[34px]">
              <h1 className="text-6xl font-semibold ">20th</h1>
              <p className="text-lg">Tuesday</p>
            </div>
            <div className="pl-10 pt-[61px]">
              <p className="text-lg font-semibold mb-[15px]">
                School Graduation
              </p>
              <div className="flex items-center">
                <BiTime className="w-[16px] h-[16px] mr-2  " />
                <p className="">7:00am</p>
              </div>
              <div className="">
                <div className="flex items-center">
                  <HiOutlineLocationMarker className="w-[16px] h-[16px] mr-2 " />
                  <p className="">Dayspring Academy</p>
                </div>
                <p className="ml-[24px] block">Environment</p>
              </div>
            </div>
          </div>
          {/* card-2 */}
          <div className="bg-light-sky-blue w-[322px] h-[331px] rounded-2xl text-black mr-6 ">
            <div className="pl-10 pt-[34px]">
              <h1 className="text-6xl font-semibold ">20th</h1>
              <p className="text-lg">Tuesday</p>
            </div>
            <div className="pl-10 pt-[61px]">
              <p className="text-lg font-semibold mb-[15px] ">
                School Graduation
              </p>
              <div className="flex items-center">
                <BiTime className="w-[16px] h-[16px] mr-2  " />
                <p className="">7:00am</p>
              </div>
              <div className="">
                <div className="flex items-center">
                  <HiOutlineLocationMarker className="w-[16px] h-[16px] mr-2 " />
                  <p className="">Dayspring Academy</p>
                </div>
                <p className="ml-[24px] block">Environment</p>
              </div>
            </div>
          </div>
          {/* card-3 */}
          <div className="bg-light-sky-blue w-[322px] h-[331px] rounded-2xl text-black mr-6 ">
            <div className="pl-10 pt-[34px]">
              <h1 className="text-6xl font-semibold ">20th</h1>
              <p className="text-lg">Tuesday</p>
            </div>
            <div className="pl-10 pt-[61px]">
              <p className="text-lg font-semibold mb-[15px] ">
                School Graduation
              </p>
              <div className="flex items-center">
                <BiTime className="w-[16px] h-[16px] mr-2  " />
                <p className="">7:00am</p>
              </div>
              <div className="">
                <div className="flex items-center">
                  <HiOutlineLocationMarker className="w-[16px] h-[16px] mr-2 " />
                  <p className="">Dayspring Academy</p>
                </div>
                <p className="ml-[24px] block">Environment</p>
              </div>
            </div>
          </div>
          {/* card-4 */}
          <div className="bg-light-sky-blue w-[322px] h-[331px] rounded-2xl text-black mr-6 ">
            <div className="pl-10 pt-[34px]">
              <h1 className="text-6xl font-semibold ">20th</h1>
              <p className="text-lg">Tuesday</p>
            </div>
            <div className="pl-10 pt-[61px]">
              <p className="text-lg font-semibold mb-[15px] ">
                School Graduation
              </p>
              <div className="flex items-center">
                <BiTime className="w-[16px] h-[16px] mr-2  " />
                <p className="">7:00am</p>
              </div>
              <div className="">
                <div className="flex items-center">
                  <HiOutlineLocationMarker className="w-[16px] h-[16px] mr-2 " />
                  <p className="">Dayspring Academy</p>
                </div>
                <p className="ml-[24px] block">Environment</p>
              </div>
            </div>
          </div>
          {/* card-5 */}
          <div className="bg-light-sky-blue w-[322px] h-[331px] rounded-2xl text-black mr-6 ">
            <div className="pl-10 pt-[34px]">
              <h1 className="text-6xl font-semibold ">20th</h1>
              <p className="text-lg">Tuesday</p>
            </div>
            <div className="pl-10 pt-[61px]">
              <p className="text-lg font-semibold mb-[15px] ">
                School Graduation
              </p>
              <div className="flex items-center">
                <BiTime className="w-[16px] h-[16px] mr-2  " />
                <p className="">7:00am</p>
              </div>
              <div className="">
                <div className="flex items-center">
                  <HiOutlineLocationMarker className="w-[16px] h-[16px] mr-2 " />
                  <p className="">Dayspring Academy</p>
                </div>
                <p className="ml-[24px] block">Environment</p>
              </div>
            </div>
          </div>
          {/* card-6 */}
          {/* <div className="bg-light-sky-blue w-[322px] h-[331px] rounded-2xl text-black mr-6 ">
            <div className="pl-10 pt-[34px]">
              <h1 className="text-6xl font-semibold ">20th</h1>
              <p className="text-lg">Tuesday</p>
            </div>
            <div className="pl-10 pt-[61px]">
              <p className="text-lg font-semibold mb-[15px] ">
                School Graduation
              </p>
              <div className="flex items-center">
                <BiTime className="w-[16px] h-[16px] mr-2  " />
                <p className="">7:00am</p>
              </div>
              <div className="">
                <div className="flex items-center">
                  <HiOutlineLocationMarker className="w-[16px] h-[16px] mr-2 " />
                  <p className="">Dayspring Academy</p>
                </div>
                <p className="ml-[24px] block">Environment</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
