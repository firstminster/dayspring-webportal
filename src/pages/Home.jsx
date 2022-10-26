import React from "react";
import { OurValue, Slider, WhyChooseUs } from "../components";

function Home() {
  return (
    <section className=" relative mx-auto">
      {/* <div className="absolute top-[95px] flex items-center justify-center "> */}
      <Slider />
      <WhyChooseUs />
      <OurValue />
      {/* </div> */}
    </section>
  );
}

export default Home;
