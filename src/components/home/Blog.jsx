import React from "react";
import { allWorkImg, learningImg, parentsImg } from "../../assets/importAssets";

const Blog = () => {
  return (
    <div className="container mx-auto">
      <div className="absolute top-[220rem] inset-x-0">
        {/* <div className="flex flex-col items-center "> */}
        <div className="flex items-center justify-center mb-10">
          <div className="mr-[530px]">
            <h2 className="">Blogs</h2>
            <p className="">
              Read up on recent articles from the school press...
            </p>
          </div>
          <button className="">See all</button>
        </div>
        {/* blogs card */}
        <div className="flex justify-center ">
          {/* card-1 */}
          <div className=" mr-[21px]">
            <img
              src={learningImg}
              alt="learning"
              className="w-[322px] h-[192px] object-contain"
            />
            <h3 className="text-xl font-semibold mt-[17px] mb-[11px] ">
              Learning the right way
            </h3>
            <p className="text-sm mb-[17px]">20th sept, 2022</p>
            <button className="">Read More</button>
          </div>
          {/* card-2 */}
          <div className="mr-[21px]">
            <img
              src={parentsImg}
              alt="parents"
              className="w-[322px] h-[192px] object-contain"
            />
            <h3 className="text-xl font-semibold mt-[17px] mb-[11px]">
              Parents! Monitor your kids
            </h3>
            <p className="text-sm mb-[17px]">20th sept, 2022</p>
            <button className="">Read More</button>
          </div>
          {/* card-3 */}
          <div className="">
            <img
              src={allWorkImg}
              alt="all-work"
              className="w-[322px] h-[192px] object-contain"
            />
            <h3 className="text-xl font-semibold mt-[17px] mb-[11px]">
              All work no play makes Jack a ..
            </h3>
            <p className="text-sm mb-[17px]">20th sept, 2022</p>
            <button className="">Read More</button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Blog;
