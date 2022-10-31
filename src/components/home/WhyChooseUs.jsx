import React from "react";
import { diverseKidsImg } from "../../assets/importAssets";

const WhyChooseUs = () => {
  return (
    <section
      className="absolute top-[65rem] lg:top-[55rem] inset-x-0
        flex items-center justify-center "
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        <img
          src={diverseKidsImg}
          alt="why-choose-us"
          className=" w-[301px] h-[340px] lg:w-[450px] lg:h-[550px] xl:w-[500px] xl:h-[575px] object-cover rounded-2xl lg:rounded-lg"
        />
        <div className=" lg:ml-[53px] lg:mt-[0px]">
          <h2 className="absolute -top-[3rem] inset-0 text-center lg:text-left lg:static text-[20px] lg:text-[32px] font-semibold text-rusty-red mb-[25px] ">
            Why Choose Us?
          </h2>
          <div className="flex items-center justify-center">
            <span className="bg-rusty-red h-[160px] lg:h-[175px] w-[4px] mr-[16px] lg:mr-[36px]"></span>
            <div className="mt-[10px]">
              <h3 className="text-base lg:text-2xl font-medium mb-2">
                Innovative Teaching
              </h3>
              <p className="w-[300px] lg:w-[530px] text-sm lg:text-lg pb-[10px]">
                Asides curating curriculums that are broad and flexible, our
                teachers create a nurturing and stimulating atmosphere for
                students to learn and grow comfortable in their own learning
                patterns.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <span className="bg-jungle-green h-[155px] w-[4px] mr-[16px] lg:mr-[36px]"></span>
            <div className="pt-[10px]">
              <h3 className="text-base lg:text-2xl font-medium mb-2">
                Conducive environment
              </h3>
              <p className="w-[300px] lg:w-[530px] text-sm lg:text-lg pb-[10px]">
                We offer our students a multicultural and nurturing environment
                that allows them to develop their talents as well as receive the
                finest learning experience.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <span className="bg-medium-orchid h-[145px] w-[4px] mr-[16px] lg:mr-[36px]"></span>
            <div className="pt-[10px]">
              <h3 className="text-base lg:text-2xl font-medium mb-2">
                Holy-Spirit Guided
              </h3>
              <p className="w-[300px] lg:w-[530px] text-sm lg:text-lg pb-[10px]">
                Our qualitative education system is built on sound biblical
                principles that further help them to know and love God more
                everyday.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
