import React, { Suspense } from "react";
import {
  Blog,
  CallToAction,
  Footer,
  Metrics,
  OurValue,
  Slider,
  StudentsTestimonial,
  TeachersAndFacilities,
  UpcomingEvents,
  WhyChooseUs,
} from "../components";

function Home() {
  return (
    <main className="relative">
      <Suspense
        fallback={
          <div className="absolute top-[75px] lg:top-[95px] inset-x-0 text-2xl">
            Loading...
          </div>
        }
      >
        <section className="absolute top-[75px] lg:top-[95px] inset-x-0">
          <Slider />
        </section>
        <WhyChooseUs />
        <OurValue />
        <Metrics />
        <TeachersAndFacilities />
        <StudentsTestimonial />
        {/* <Blog /> */}
        <UpcomingEvents />
        <CallToAction />
        <section className="absolute top-[420rem] lg:top-[305rem] inset-x-0">
          <Footer />
        </section>
      </Suspense>
    </main>
  );
}

export default Home;

// const Slider = lazy(() =>
//   import(/*webpackChunkName: "Slider"*/ "../components/home/Slider")
// );
// const WhyChooseUs = lazy(() =>
//   import(/*webpackChunkName: "WhyChooseUs"*/ "../components/home/WhyChooseUs")
// );
// const OurValue = lazy(() =>
//   import(/*webpackChunkName: "OurValue"*/ "../components/home/OurValue")
// );
// const Metrics = lazy(() =>
//   import(/*webpackChunkName: "Metrics"*/ "../components/home/Metrics")
// );
// const TeachersAndFacilities = lazy(() =>
//   import(
//     /*webpackChunkName: "TeachersAndFacilities"*/ "../components/home/TeachersAndFacilities"
//   )
// );
// const Blog = lazy(() =>
//   import(/*webpackChunkName: "Blog"*/ "../components/home/Blog")
// );
// const UpcomingEvents = lazy(() =>
//   import(
//     /*webpackChunkName: " UpcomingEvents"*/ "../components/home/UpcomingEvents"
//   )
// );
// const CallToAction = lazy(() =>
//   import(
//     /*webpackChunkName: " CallToAction"*/ "../components/home/CallToAction"
//   )
// );
// const Footer = lazy(() =>
//   import(/*webpackChunkName: " Footer"*/ "../components/footer/Footer")
// );
