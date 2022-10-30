import React from "react";
import {
  Blog,
  CallToAction,
  Footer,
  Metrics,
  OurValue,
  Slider,
  TeachersAndFacilities,
  UpcomingEvents,
  WhyChooseUs,
} from "../components";

function Home() {
  return (
    <>
      <section className="relative ">
        <div className="absolute top-[75px] lg:top-[95px] inset-x-0">
          <Slider />
        </div>
        <WhyChooseUs />
        <OurValue />
        <Metrics />
        <TeachersAndFacilities />
        <Blog />
        <UpcomingEvents />
        <CallToAction />
        <div className="absolute top-[305rem] inset-x-0">
          <Footer />
        </div>
      </section>
    </>
  );
}

export default Home;
