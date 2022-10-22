import React from "react";
import { Slider } from "../components";

function Home() {
  return (
    <section className=" relative mx-auto">
      <div className="absolute top-[95px] flex items-center justify-center ">
        <Slider />
      </div>
    </section>
  );
}

export default Home;
