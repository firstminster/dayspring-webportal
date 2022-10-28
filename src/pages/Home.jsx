import React from "react";
import {
  Blog,
  Metrics,
  OurValue,
  Slider,
  TeachersAndFacilities,
  WhyChooseUs,
} from "../components";

function Home() {
  return (
    <section className=" relative mx-auto">
      <Slider />
      <WhyChooseUs />
      <OurValue />
      <Metrics />
      <TeachersAndFacilities />
      <Blog />
    </section>
  );
}

export default Home;
