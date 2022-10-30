import { BsChatLeftText } from "react-icons/bs";
import { MdOutlineEventAvailable } from "react-icons/md";
import { girlImg, HeroBgImg } from "../assets/importAssets";

// Dropdown menu items
export const DropdownItems = [
  {
    _id: 1,
    title: "Blogs",
    path: "/blogs",
    icon: BsChatLeftText,
  },
  {
    _id: 2,
    title: "Upcoming Events",
    path: "/events",
    icon: MdOutlineEventAvailable,
  },
];

// Slider data
export const sliderData = [
  {
    _id: 1,
    title: "Help your child become the best version of themselves",
    desc: "We are raising a community of spiritually-led kids who are academically sound, uniquely talented and have the capacity to shine anywhere they go.",
    titleMobile: "Investing in your child’s future starts here",
    descMobile: "Developing a better system to educate your kids",
    image: girlImg,
    bgColor:
      "bg-gradient-to-r from-blue-primary via-medium-slate-blue to-medium-orchid",
    bgImage: HeroBgImg,
    button: "Learn More",
  },
  {
    _id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore praesentium maiores a, blanditiis asperiores natus ducimus sit, facere ",
    titleMobile: "Investing in your child’s future starts here",
    descMobile: "Developing a better system to educate your kids",
    button: "Learn More",
    image: girlImg,
    bgColor:
      "bg-gradient-to-r from-blue-primary via-medium-slate-blue to-medium-orchid",
    bgImage: HeroBgImg,
  },
  {
    _id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat, nesciunt aliquid sapiente minus corrupti magni consectetur, optio  ",
    titleMobile: "Investing in your child’s future starts here",
    descMobile: "Developing a better system to educate your kids",
    button: "Learn More",
    image: girlImg,
    bgColor:
      "bg-gradient-to-r from-blue-primary via-medium-slate-blue to-medium-orchid",
    bgImage: HeroBgImg,
  },
  {
    _id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat, nesciunt aliquid sapiente minus corrupti magni consectetur, optio  ",
    titleMobile: "Investing in your child’s future starts here",
    descMobile: "Developing a better system to educate your kids",
    button: "Learn More",
    image: girlImg,
    bgColor:
      "bg-gradient-to-r from-blue-primary via-medium-slate-blue to-medium-orchid",
    bgImage: HeroBgImg,
  },
];

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
