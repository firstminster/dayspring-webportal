import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { StudentsReviews } from "../../data/WebData";

const ParentsTestimonial = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    lazyLoad: true,
    speed: 300,
    slidesToScroll: 1,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "50",
    // className: "center",
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
    <div className="absolute top-[290rem] sm:top-[275rem] md:top-[250rem] lg:top-[210rem] inset-x-0">
      <div className="h-[453px]">
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-semibold my-[53px]">
            What parents are saying about us
          </h2>
          <div className="flex ml-[204px]">
            <button
              className="bg-gray-x-11-gray w-[30px] h-[30px] flex items-center justify-center mr-2 rounded-full"
              // onClick={sliderRef?.slickPrev}
            >
              <FaArrowLeft className="w-[13.54px] h-[11.89px]" />
            </button>
            <button
              className="bg-blue-primary w-[30px] h-[30px]w-[30px] h-[30px] flex items-center justify-center rounded-full"
              // onClick={sliderRef?.slickNext}
            >
              <FaArrowRight className="w-[13.54px] h-[11.89px] text-white " />
            </button>
          </div>
        </div>
        <Slider ref={setSliderRef} {...settings}>
          {StudentsReviews.map((review, idx) => {
            const { _id, name, quote, title } = review;
            return (
              <div key={_id} className="">
                <div className="flex flex-col items-center justify-center border border-blue-primary w-[413px] h-[201px] text-black text-center px-[40px] py-[50px] rounded-[20px]">
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

export default ParentsTestimonial;
