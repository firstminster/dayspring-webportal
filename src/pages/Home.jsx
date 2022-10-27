import React from "react";
import {
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
    </section>
  );
}

export default Home;
