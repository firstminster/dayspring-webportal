import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const UpcomingEvents = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <h2 className="mr-[150px] lg:mr-[650px] xl:mr-[710px] font-semibold text-xl lg:text-[32px]">
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
        <div className="flex justify-center mt-[20px] lg:mt-[30px] pl-[45rem] md:pl-[250px] lg:pl-[750px] xl:pl-[510px]">
          {/* card-1 */}
          <div className="bg-blue-primary w-[218px] h-[197px] lg:w-[322px] lg:h-[331px] rounded-2xl text-white mr-6 ">
            <div className="pl-[24px] lg:pl-10 pt-[16px] lg:pt-[34px]">
              <h1 className="text-3xl lg:text-6xl font-semibold ">20th</h1>
              <p className="text-sm lg:text-lg">Tuesday</p>
            </div>
            <div className="pl-[24px] lg:pl-10 pt-[10px] lg:pt-[61px]">
              <p className="text-sm lg:text-lg font-semibold mb-[15px]">
                School Graduation
              </p>
              <div className="flex items-center">
                <BiTime className="w-[16px] h-[16px] mr-2  " />
                <p className="text-sm lg:text-[16px]">7:00am</p>
              </div>
              <div className="text-sm lg:text-[16px]">
                <div className="flex items-center">
                  <HiOutlineLocationMarker className="w-[16px] h-[16px] mr-2" />
                  <p className="">Dayspring Academy</p>
                </div>
                <p className="ml-[24px] block">Environment</p>
              </div>
            </div>
          </div>
          {/* card-2 */}
          <div className="bg-light-sky-blue w-[218px] h-[197px] lg:w-[322px] lg:h-[331px] rounded-2xl text-black mr-6 ">
            <div className="pl-[24px] lg:pl-10 pt-[16px] lg:pt-[34px]">
              <h1 className="text-3xl lg:text-6xl font-semibold ">20th</h1>
              <p className="text-sm lg:text-lg">Tuesday</p>
            </div>
            <div className="pl-[24px] lg:pl-10 pt-[10px] lg:pt-[61px]">
              <p className="text-sm lg:text-lg font-semibold mb-[15px] ">
                School Graduation
              </p>
              <div className="flex items-center">
                <BiTime className="w-[16px] h-[16px] mr-2  " />
                <p className="text-sm lg:text-[16px]">7:00am</p>
              </div>
              <div className="text-sm lg:text-[16px]">
                <div className="flex items-center">
                  <HiOutlineLocationMarker className="w-[16px] h-[16px] mr-2 " />
                  <p className="">Dayspring Academy</p>
                </div>
                <p className="ml-[24px] block">Environment</p>
              </div>
            </div>
          </div>
          {/* card-3 */}
          <div className="bg-light-sky-blue w-[218px] h-[197px] lg:w-[322px] lg:h-[331px] rounded-2xl text-black mr-6 ">
            <div className="pl-[24px] lg:pl-10 pt-[16px] lg:pt-[34px]">
              <h1 className="text-3xl lg:text-6xl font-semibold ">20th</h1>
              <p className="text-sm lg:text-lg">Tuesday</p>
            </div>
            <div className="pl-[24px] lg:pl-10 pt-[10px] lg:pt-[61px]">
              <p className="text-sm lg:text-lg font-semibold mb-[15px] ">
                School Graduation
              </p>
              <div className="flex items-center">
                <BiTime className="w-[16px] h-[16px] mr-2  " />
                <p className="text-sm lg:text-[16px]">7:00am</p>
              </div>
              <div className="text-sm lg:text-[16px]">
                <div className="flex items-center">
                  <HiOutlineLocationMarker className="w-[16px] h-[16px] mr-2 " />
                  <p className="">Dayspring Academy</p>
                </div>
                <p className="ml-[24px] block">Environment</p>
              </div>
            </div>
          </div>
          {/* card-4 */}
          <div className="bg-light-sky-blue w-[218px] h-[197px] lg:w-[322px] lg:h-[331px] rounded-2xl text-black mr-6 ">
            <div className="pl-[24px] lg:pl-10 pt-[16px] lg:pt-[34px]">
              <h1 className="text-3xl lg:text-6xl font-semibold ">20th</h1>
              <p className="text-sm lg:text-lg">Tuesday</p>
            </div>
            <div className="pl-[24px] lg:pl-10 pt-[10px] lg:pt-[61px]">
              <p className="text-sm lg:text-lg font-semibold mb-[15px] ">
                School Graduation
              </p>
              <div className="flex items-center">
                <BiTime className="w-[16px] h-[16px] mr-2  " />
                <p className="text-sm lg:text-[16px]">7:00am</p>
              </div>
              <div className="text-sm lg:text-[16px]">
                <div className="flex items-center">
                  <HiOutlineLocationMarker className="w-[16px] h-[16px] mr-2 " />
                  <p className="">Dayspring Academy</p>
                </div>
                <p className="ml-[24px] block">Environment</p>
              </div>
            </div>
          </div>
          {/* card-5 */}
          <div className="bg-light-sky-blue w-[218px] h-[197px] lg:w-[322px] lg:h-[331px] rounded-2xl text-black mr-6 ">
            <div className="pl-[24px] lg:pl-10 pt-[16px] lg:pt-[34px]">
              <h1 className="text-3xl lg:text-6xl font-semibold ">20th</h1>
              <p className="text-sm lg:text-lgg">Tuesday</p>
            </div>
            <div className="pl-[24px] lg:pl-10 pt-[10px] lg:pt-[61px]">
              <p className="text-sm lg:text-lg font-semibold mb-[15px] ">
                School Graduation
              </p>
              <div className="flex items-center">
                <BiTime className="w-[16px] h-[16px] mr-2  " />
                <p className="text-sm lg:text-[16px]">7:00am</p>
              </div>
              <div className="text-sm lg:text-[16px]">
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
    </>
  );
};

export default UpcomingEvents;
