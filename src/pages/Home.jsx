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
    <main className="relative ">
      <section className="absolute top-[75px] lg:top-[95px] inset-x-0">
        <Slider />
      </section>
      <WhyChooseUs />
      <OurValue />
      <Metrics />
      <TeachersAndFacilities />
      <Blog />
      <UpcomingEvents />
      <CallToAction />
      <section className="absolute top-[305rem] inset-x-0">
        <Footer />
      </section>
    </main>
  );
}

export default Home;
