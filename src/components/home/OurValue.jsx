import React from "react";
import {
  acaCompImg,
  disciplineImg,
  leadershipImg,
  spiralArrowImg,
} from "../../assets/importAssets";

const OurValue = () => {
  return (
    <div className="absolute top-[121rem] lg:top-[99rem] inset-x-0 ">
      <div className="container mx-auto flex flex-col items-center justify-center lg:justify-between">
        <h1 className=" text-xl lg:text-[32px] font-semibold mb-[49px] text-center">
          Our Values
        </h1>
        <div className="flex flex-wrap lg:flex-nowrap lg:flex-row items-center lg:items-start justify-center">
          {/* Discipline */}
          <div className="flex flex-col items-center sm:mr-14">
            <img
              src={disciplineImg}
              alt="discipline"
              className=" h-[80px] w-[80px] lg:h-[110px] lg:w-[110px] object-cover"
            />
            <h2 className="text-[16px] lg:text-2xl font-medium my-[17px]">
              Discipline
            </h2>
            <p className="w-[304px] h-[110px] text-sm lg:text-lg text-center">
              By teaching important life lessons and instilling core values in
              them early on, we are able to produce students who embody true
              discipline at all times.
            </p>
          </div>
          {/* Academic-competence */}
          <div className="flex flex-col items-center lg:mr-14">
            <img
              src={acaCompImg}
              alt="academic-competence"
              className="h-[80px] w-[80px] lg:h-[110px] lg:w-[110px] object-cover"
            />
            <h2 className="text-[16px] lg:text-2xl font-medium my-[17px]">
              Academic Competence
            </h2>
            <p className="w-[280px] h-[105px] text-sm lg:text-lg text-center">
              We take pride in the fact our students perform excellently well in
              their studies, both in internal and external examinations.
            </p>
          </div>
          {/* Leadership */}
          <div className="flex flex-col items-center">
            <img
              src={leadershipImg}
              alt="leadership"
              className="h-[80px] w-[80px] lg:h-[110px] lg:w-[110px] object-cover"
            />
            <h2 className="text-[16px] lg:text-2xl font-medium my-[17px]">
              Leadership
            </h2>
            <p className="w-[306px] h-[84px] text-sm lg:text-lg text-center">
              We train our students to become leaders who would one day go forth
              to lead nations and change the world for the better.
            </p>
          </div>
        </div>
      </div>
      <img
        src={spiralArrowImg}
        alt="spiral-arrow"
        className="invisible xl:visible absolute -top-[5rem] xl:left-[19rem]  2xl:left-[25rem] h-auto w-[250px] object-contain"
      />
    </div>
  );
};

export default OurValue;
