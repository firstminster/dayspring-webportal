import React from "react";
import { FaArrowRight } from "react-icons/fa";
// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";
// import "../assets/styles/style.scss";
import {
  booksImg,
  bulbImg,
  calculatorImg,
  girlImg,
  globeImg,
} from "../assets/importAssets.js";

const content = [
  {
    _id: 1,
    title: "Help your child become the best version of themselves",
    description:
      "We are raising a community of spiritually-led kids who are academically sound, uniquely talented and have the capacity to shine anywhere they go.",
    button: "Learn More",
    image: "",
    BgColor:
      "bg-gradient-to-r from-blue-primary via-medium-slate-blue to-medium-orchid",
  },
  {
    _id: 2,
    title: "Help your child become the best version of themselves",
    description:
      "We are raising a community of spiritually-led kids who are academically sound, uniquely talented and have the capacity to shine anywhere they go.",
    button: "Learn More",
    image: "",
    BgColor:
      "bg-gradient-to-r from-blue-primary via-medium-slate-blue to-medium-orchid",
  },
];

const Slider = () => {
  return (
    // slide-show
    <div className="m-auto overflow-hidden max-w-full">
      {/* slide-show-slider */}
      <div className="">
        {/* slide */}
        <div
          className={`h-[684px] w-screen bg-gradient-to-r from-blue-primary via-medium-slate-blue to-medium-orchid flex items-center justify-center`}
        >
          <div className="">
            <h1 className="text-6xl text-white w-[647px] font-semibold">
              Help your child become the best version of themselves
            </h1>
            <p className="mt-[31px] w-[585px] text-2xl text-white  ">
              We are raising a community of spiritually-led kids who are
              academically sound, uniquely talented and have the capacity to
              shine anywhere they go.
            </p>
            <button className="flex items-center text-black justify-center bg-white w-[238px] h-[49px] px-[55.5px] py-[14px] mt-[35px] rounded-full border hover:border-medium-orchid hover:text-medium-orchid transition-all duration-300 ease-out ">
              <span className="mr-[11px] text-lg"> Learn More</span>
              <FaArrowRight className="w-[13.54px] h-[11.89px]" />
            </button>
          </div>
          {/* Icons */}
          <div className="">
            <img
              src={bulbImg}
              alt="bulb"
              className="absolute top-[25px] left-[1211px] h-[118.97px] w-[111.13px]"
            />
            <img
              src={calculatorImg}
              alt="calculator"
              className="absolute top-[59px] left-[656px] h-[96.05px] w-[85.75px]"
            />
            <img
              src={globeImg}
              alt="globe"
              className="absolute top-[478px] left-[568px] h-[156.97px] w-[145.86px]"
            />
            <img
              src={booksImg}
              alt="books"
              className="absolute top-[527px] left-[1284px] h-[82.77px] w-[93.03px]"
            />
            <img
              src={girlImg}
              alt="little-girl"
              className="h-[500px] w-auto mt-[50px] ml-[94px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

// pt-[118px] pl-[129px]
{
  /* <Slider className="slider-wrapper">
      {content.map((item) => (
        <div key={item._id} className=" h-[90vh] ">
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </Slider> */
}
