import React from "react";

const Admission = () => {
  return (
    <section className="relative">
      <div className="absolute top-[95px]">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-white bg-gradient-to-r from-blue-primary via-medium-slate-blue to-medium-orchid w-screen h-[280px] ">
          <h1 className="text-6xl font-semibold">Admissions</h1>
          <p className="text-center mt-[21px] text-2xl ">
            To enrol your child at Dayspring Academy, kindly assist <br />
            them in filling the form below. This should take 30 <br /> minutes
            or less.
          </p>
        </div>
        <div className="mt-[27px]">
          <p className="text-center">
            On completing this form, you will be required to pay a registration
            fee of N10,000.
          </p>
        </div>
        {/* Forms */}
      </div>
    </section>
  );
};

export default Admission;
