import React from "react";
import {
  dayspringLogoBlueBg,
  patternDoodleWhiteImg,
  patternDoodleWhiteMobileImg,
} from "../../assets/importAssets";

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto absolute inset-x-0 flex flex-col justify-center items-center text-white px-[64px] 2xl:px-[182px]">
        <div className="flex flex-wrap flex-col justify-center lg:flex-row lg:items-start lg:justify-between w-full  mt-[74px] text-xs">
          {/* logo */}
          <img
            src={dayspringLogoBlueBg}
            alt="logo-bg-blue"
            className="w-[185px] h-[80px] object-contain "
          />
          {/* School */}
          <ul className="space-y-[13px] mt-[53px] lg:mt-0">
            <li className="text-quick-silver mb-[15px]">School</li>
            <li className="">Home</li>
            <li className="">About Us</li>
            <li className="">Gallery</li>
            <li className="">Contact Us</li>
            <li className="">Careers</li>
          </ul>
          {/* Press */}
          <ul className="space-y-[13px] mt-[30px] lg:mt-0">
            <li className="text-quick-silver mb-[15px]">Press</li>
            <li className="">Upcoming Events</li>
            <li className="">Blogs</li>
          </ul>
          {/* Socials */}
          <ul className="space-y-[13px] mt-[30px] lg:mt-0">
            <li className="text-quick-silver mb-[15px]">Socials</li>
            <li className="">Twitter</li>
            <li className="">LinkedIn</li>
            <li className="">Instagram</li>
          </ul>
          {/* Contact */}
          <ul className="space-y-[13px] mt-[30px] lg:mt-0">
            <li className="text-quick-silver mb-[15px]">Contact</li>
            <li className="">+23481 2234 5567</li>
            <li className="">info@dayspringacademy.com</li>
            <li className="">admission@dayspringacademy.com</li>
          </ul>
        </div>

        <div className="w-full mt-[42px] lg:mt-[163px]">
          <hr className="border border-blue-primary" />
          <div className="text-white flex flex-col lg:flex-row justify-between mt-[38px] text-sm lg:text-[15px]">
            <p className="">
              Copyright &copy; {new Date().getFullYear()}{" "}
              <span className="text-blue-primary ">Dayspring Academy</span>.
            </p>
            <p className="mt-[28px] lg:mt-0">All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* bg-image */}
      <img
        src={patternDoodleWhiteImg}
        alt=""
        className="hidden lg:block bg-black w-full lg:h-[513px] object-cover"
      />
      <img
        src={patternDoodleWhiteMobileImg}
        alt=""
        className="lg:hidden bg-black w-full h-[950px] lg:h-[513px] object-cover"
      />
    </div>
  );
};

export default Footer;
