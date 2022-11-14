import React, { Suspense } from "react";
import {
  Blog,
  CallToAction,
  Footer,
  Metrics,
  OurValue,
  ParentsTestimonial,
  Slider,
  Spinner,
  StudentsTestimonial,
  TeachersAndFacilities,
  UpcomingEvents,
  WhyChooseUs,
} from "../components";

function Home() {
  return (
    <main className="relative">
      <Suspense fallback={<Spinner />}>
        <section className="absolute top-[75px] lg:top-[95px] inset-x-0">
          <Slider />
        </section>
        <WhyChooseUs />
        <div className="absolute top-[121rem] lg:top-[99rem] inset-x-0 ">
          <OurValue />
        </div>
        <Metrics />
        <TeachersAndFacilities />
        <ParentsTestimonial />
        <StudentsTestimonial />
        <Blog />
        <div className="absolute top-[425rem] sm:top-[390rem] md:top-[362rem] lg:top-[305rem] inset-x-0">
          <UpcomingEvents />
        </div>
        <div className="absolute top-[445rem] sm:top-[410rem] md:top-[383rem] lg:top-[335rem] inset-x-0">
          <CallToAction />
        </div>
        <section className="absolute top-[468rem] sm:top-[435rem] md:top-[405rem] lg:top-[358rem] inset-x-0">
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
