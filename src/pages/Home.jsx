import React from "react";
import { OurValue, Slider, WhyChooseUs } from "../components";

function Home() {
  return (
    <section className=" relative mx-auto">
      <Slider />
      <WhyChooseUs />
      <OurValue />
    </section>
  );
}

export default Home;
