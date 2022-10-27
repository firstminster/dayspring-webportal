import React from "react";
import {
  acaCompImg,
  disciplineImg,
  leadershipImg,
  spiralArrowImg,
} from "../assets/importAssets";

const OurValue = () => {
  return (
    <div className="container mx-auto">
      <img
        src={spiralArrowImg}
        alt="spiral-arrow"
        className="absolute top-[95rem] xl:left-[19rem]  2xl:left-[25rem] h-auto w-[250px] object-contain"
      />
      <div className="absolute top-[99rem] inset-x-0 flex flex-col items-center justify-between ">
        <h1 className="text-[32px] font-semibold mb-[49px]">Our Values</h1>
        <div className="flex items-start justify-center ">
          {/* Discipline */}
          <div className="flex flex-col items-center mr-14">
            <img
              src={disciplineImg}
              alt="discipline"
              className="h-[110px] w-[110px] object-cover"
            />
            <h2 className="text-2xl font-medium my-[17px]">Discipline</h2>
            <p className="w-[304px] h-[110px] text-lg text-center">
              By teaching important life lessons and instilling core values in
              them early on, we are able to produce students who embody true
              discipline at all times.
            </p>
          </div>
          {/* Academic-competence */}
          <div className="flex flex-col items-center mr-14">
            <img
              src={acaCompImg}
              alt="academic-competence"
              className="h-[110px] w-[110px] object-cover"
            />
            <h2 className="text-2xl font-medium my-[17px]">
              Academic Competence
            </h2>
            <p className="w-[280px] h-[105px] text-lg text-center">
              We take pride in the fact our students perform excellently well in
              their studies, both in internal and external examinations.
            </p>
          </div>
          {/* Leadership */}
          <div className="flex flex-col items-center">
            <img
              src={leadershipImg}
              alt="leadership"
              className="h-[110px] w-[110px] object-cover"
            />
            <h2 className="text-2xl font-medium my-[17px]">Leadership</h2>
            <p className="w-[306px] h-[84px] text-lg text-center">
              We train our students to become leaders who would one day go forth
              to lead nations and change the world for the better.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValue;
