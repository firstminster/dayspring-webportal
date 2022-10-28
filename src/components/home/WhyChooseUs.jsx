import React from "react";
import { diverseKidsImg } from "../../assets/importAssets";

const WhyChooseUs = () => {
  return (
    <div
      className="absolute top-[55rem] inset-x-0
        flex items-center justify-center "
    >
      <div className="container mx-auto flex items-center justify-center">
        <img
          src={diverseKidsImg}
          alt="why-choose-us"
          className="w-[500px] h-[565px] object-cover rounded-lg"
        />
        <div className=" ml-[53px] ">
          <h2 className="text-[32px] font-semibold text-rusty-red mb-[25px] ">
            Why Choose Us?
          </h2>
          <div className="flex items-center">
            <span className="bg-rusty-red h-[165px] w-[4px] mr-[36px]"></span>
            <div className="pt-[10px]">
              <h3 className="text-2xl font-medium">Innovative Teaching</h3>
              <p className="w-[530px] text-lg pb-[10px]">
                Asides curating curriculums that are broad and flexible, our
                teachers create a nurturing and stimulating atmosphere for
                students to learn and grow comfortable in their own learning
                patterns.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="bg-jungle-green h-[145px] w-[4px] mr-[36px]"></span>
            <div className="pt-[10px]">
              <h3 className="text-2xl font-medium">Conducive environment</h3>
              <p className="w-[487px] text-lg pb-[10px]">
                We offer our students a multicultural and nurturing environment
                that allows them to develop their talents as well as receive the
                finest learning experience.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="bg-medium-orchid h-[135px] w-[4px] mr-[36px]"></span>
            <div className="pt-[10px]">
              <h3 className="text-2xl font-medium">Holy-Spirit Guided</h3>
              <p className="w-[487px] text-lg pb-[10px]">
                Our qualitative education system is built on sound biblical
                principles that further help them to know and love God more
                everyday.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
