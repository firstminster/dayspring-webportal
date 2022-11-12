import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { StudentsReviews } from "../../data/WebData";

const StudentsTestimonial = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [sliderRef, setSliderRef] = useState(null);

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className=" absolute right-0 top-[295rem] sm:top-[280rem] md:top-[255rem] lg:top-[220rem] z-100 bg-gray-x-11-gray w-[30px] h-[30px]"
        onClick={onClick}
      >
        <FaArrowRight className="w-[13.54px] h-[11.89px]" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="arrow prev absolute right-0 top-[295rem] sm:top-[280rem] md:top-[255rem] lg:top-[220rem] z-100"
        onClick={onClick}
      >
        <FaArrowLeft className="w-[13.54px] h-[11.89px] text-white" />
      </div>
    );
  };

  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    lazyLoad: true,
    speed: 300,
    slidesToScroll: 3,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "5",
    className: "center",
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1444,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="absolute top-[295rem] sm:top-[280rem] md:top-[255rem] lg:top-[220rem] inset-x-0">
      <div className="bg-[url('/src/assets/img/Pattern-doodle-white.png')] bg-blue-jeans w-full h-[453px]">
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-semibold my-[53px]  ">
            What our Students are saying
          </h2>
          <div className="flex  ml-[204px]">
            <button
              className="bg-gray-x-11-gray w-[30px] h-[30px] flex items-center justify-center mr-2 rounded-full"
              onClick={sliderRef?.slickPrev}
            >
              <FaArrowLeft className="w-[13.54px] h-[11.89px]" />
            </button>
            <button
              className="bg-blue-primary w-[30px] h-[30px]w-[30px] h-[30px] flex items-center justify-center rounded-full"
              onClick={sliderRef?.slickNext}
            >
              <FaArrowRight className="w-[13.54px] h-[11.89px] text-white " />
            </button>
          </div>
        </div>
        <Slider ref={setSliderRef} {...settings}>
          {StudentsReviews.map((review, idx) => {
            const { _id, name, quote, title } = review;
            return (
              <div
                key={_id}
                className={idx === imageIndex ? `scale-100` : `scale-75`}
              >
                <div className="flex flex-col items-center justify-center bg-white w-[413px] h-[201px] text-black text-center px-[40px] py-[50px] rounded-[20px]">
                  <p className="">{quote}</p>
                  <h3 className="mt-[25px] font-semibold">{name}</h3>
                  <p className="text-[14px]">{title}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default StudentsTestimonial;
