import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";
// import "../assets/styles/style.scss";
import {
  girlImg,
  booksImg,
  bulbImg,
  calculatorImg,
  globeImg,
  purpleShelvesImg,
} from "../../assets/importAssets";
import { sliderData } from "../../data/WebData";
import { useRef } from "react";

const colors = [{ blu: "#0088FE" }, { gren: "#00C49F" }, { yell: "#FFBB28" }];
// initialize timer
const delay = 5000;

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef(null);

  // clean-up timeout
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentSlide((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [currentSlide]);

  return (
    // slide-show
    <div className=" overflow-hidden  ">
      <div
        className={`whitespace-nowrap transition-all duration-1000 ease-in-out `}
        style={{ transform: `translate3d(${-currentSlide * 100}%, 0, 0)` }}
      >
        {sliderData.map((item, index) => {
          const { _id, title, desc, bgColor, bgImage } = item;
          return (
            // background-image
            <div
              key={_id}
              className={`h-[684px] w-screen  ${bgColor} inline-block`}
            />
          );
        })}
      </div>
      {/* slider-content */}
      <div className=" absolute top-[90px] inset-x-0">
        {sliderData.map((item, idx) => {
          const { _id, title, desc, bgColor, bgImage } = item;
          return (
            <div
              key={_id}
              className="transition-all duration-1000 ease-in-out"
              style={{
                transform: `translateX(${-currentSlide * 100}%, 0, 0)`,
              }}
            >
              {idx === currentSlide ? (
                // slider-content
                <div className=" flex items-center justify-center">
                  <div className="text-white animate-fade-in-right">
                    <h1 className="text-6xl w-[647px] font-semibold">
                      {title}
                    </h1>
                    <p className="mt-[31px] w-[585px] text-2xl">{desc}</p>{" "}
                    <button className="flex items-center text-black justify-center bg-white w-[238px] h-[49px] px-[55.5px] py-[14px] mt-[35px] rounded-full border hover:border-medium-orchid hover:text-medium-orchid transition-all duration-300 ease-out ">
                      <span className="mr-[11px] text-lg"> Learn More</span>
                      <FaArrowRight className="w-[13.54px] h-[11.89px]" />
                    </button>
                  </div>
                  {/* content-image */}
                  <img
                    src={girlImg}
                    alt="little-girl"
                    className="h-[500px] w-auto ml-[94px] animate-fade-in-down"
                  />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* slider-buttons */}
      <div className="absolute top-[40rem] inset-x-0 text-center">
        {sliderData.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer inline-block m-2 ${
              currentSlide === idx ? " bg-blue-primary" : "bg-white"
            }`}
            onClick={() => {
              setCurrentSlide(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

// const [index, setIndex] = useState(0);

// useEffect(() => {
//   setTimeout(
//     () =>
//       setIndex((prevIndex) =>
//         prevIndex === content.length - 1 ? 0 : prevIndex + 1
//       ),
//     delay
//   );

//   return () => {};
// }, [index]);

// {
//   /* <img
//                   src={bgImage}
//                   alt=""
//                   className="h-[684px] w-screen object-cover"
//                 /> */
// }

// slide-show
// <div className="relative overflow-hidden w-full">
//   {/* slide-show-slider */}
//   <div
//     className={`whitespace-nowrap slideshowSlider `}
//     // style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
//   >
//     {/* slide */}
//     {content.map((item, index) => (
//       <div
//         key={index}
//         className={`h-[684px] inline-block w-screen ${item.BgColor} flex items-center justify-center whitespace-normal`}
//       >
//         {/* Slider content */}
//         {/* <div className="flex items-center justify-center whitespace-normal"> */}
//         <div className="mt-[118px]">
//           <h1 className="text-6xl text-white w-[647px] font-semibold">
//             Help your child become the best version of themselves
//           </h1>
//           <p className="mt-[31px] w-[585px] text-2xl text-white  ">
//             We are raising a community of spiritually-led kids who are
//             academically sound, uniquely talented and have the capacity to
//             shine anywhere they go.
//           </p>
//           <button className="flex items-center text-black justify-center bg-white w-[238px] h-[49px] px-[55.5px] py-[14px] mt-[35px] rounded-full border hover:border-medium-orchid hover:text-medium-orchid transition-all duration-300 ease-out ">
//             <span className="mr-[11px] text-lg"> Learn More</span>
//             <FaArrowRight className="w-[13.54px] h-[11.89px]" />
//           </button>
//         </div>
//         {/* Icons */}
//         {/* <div className="">
//           <img
//             src={bulbImg}
//             alt="bulb"
//             className="absolute top-[25px] left-[1211px] h-[118.97px] w-[111.13px]"
//           />
//           <img
//             src={calculatorImg}
//             alt="calculator"
//             className="absolute top-[59px] left-[656px] h-[96.05px] w-[85.75px]"
//           />
//           <img
//             src={globeImg}
//             alt="globe"
//             className="absolute top-[478px] left-[568px] h-[156.97px] w-[145.86px]"
//           />
//           <img
//             src={booksImg}
//             alt="books"
//             className="absolute top-[527px] left-[1284px] h-[82.77px] w-[93.03px]"
//           />
//         </div> */}
//         <img
//           src={girlImg}
//           alt="little-girl"
//           className="h-[500px] w-auto mt-[50px] ml-[94px] "
//         />
//         {/* </div> */}
//       </div>
//     ))}
//   </div>
// </div>

//********** */ working code

// const [currentSlide, setCurrentSlide] = useState(0);

// // slide length
// const slideLength = sliderData.length;

// // Initialize variables
// const autoScroll = true;
// let slideInterval;
// let intervalTime = 2500;

// // slide-right button
// const nextSlide = () => {
//   setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
// };

// // slide-left button
// const prevSlide = () => {
//   setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
// };

// // side-effect
// useEffect(() => {
//   setCurrentSlide(0);
// }, []);

// useEffect(() => {
//   if (autoScroll) {
//     const auto = () => {
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//       slideInterval = setInterval(nextSlide, intervalTime);
//     };
//     auto();
//   }
//   return () => clearInterval(slideInterval);
// }, [currentSlide, slideInterval, autoScroll]);

// ****************************** JSX
// slider
//  <div className="overflow-hidden w-screen">
//  <AiOutlineArrowLeft className="arrow prev z-40" onClick={prevSlide} />
//  <AiOutlineArrowRight className="arrow next z-40" onClick={nextSlide} />
//  {sliderData.map((item, index) => {
//    const { _id, title, desc, bgColor, bgImage } = item;
//    return (
//      // slide
//      <div
//        key={_id}
//        className={index === currentSlide ? `slide current` : `slide`}
//      >
//        {index === currentSlide && (
//          <>
//            {/* background-image */}
//            <div
//              className={` h-[684px] w-screen bg-gradient-to-r from-blue-primary via-medium-slate-blue to-medium-orchid`}
//            />

//            {/* slider-content */}
//            <div className="absolute top-[95px] inset-x-0 flex items-center justify-center">
//              <div className="">
//                <h1 className="text-6xl text-white w-[647px] font-semibold">
//                  {title}
//                </h1>
//                <p className="mt-[31px] w-[585px] text-2xl text-white  ">
//                  {desc}
//                </p>
//                <button className="flex items-center text-black justify-center bg-white w-[238px] h-[49px] px-[55.5px] py-[14px] mt-[35px] rounded-full border hover:border-medium-orchid hover:text-medium-orchid transition-all duration-300 ease-out ">
//                  <span className="mr-[11px] text-lg"> Learn More</span>
//                  <FaArrowRight className="w-[13.54px] h-[11.89px]" />
//                </button>
//              </div>
//              {/* content-image */}
//              <img
//                src={girlImg}
//                alt="little-girl"
//                className="h-[500px] w-auto ml-[94px] "
//              />
//            </div>
//          </>
//        )}
//      </div>
//    );
//  })}
// </div>
