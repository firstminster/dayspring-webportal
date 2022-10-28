import React from "react";
import {
  dayspringLogoBlueBg,
  patternDoodleWhiteImg,
} from "../../assets/importAssets";

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto absolute inset-x-0 flex justify-center items-center text-white">
        <div className="flex flex-wrap items-start justify-around w-full mt-[74px] text-xs">
          {/* logo */}
          <img
            src={dayspringLogoBlueBg}
            alt="logo-bg-blue"
            className="w-[185px] h-[80px] object-cover "
          />
          {/* School */}
          <ul className="space-y-[13px]">
            <li className="text-quick-silver mb-[15px]">School</li>
            <li className="">Home</li>
            <li className="">About Us</li>
            <li className="">Gallery</li>
            <li className="">Contact Us</li>
            <li className="">Careers</li>
          </ul>
          {/* Press */}
          <ul className="space-y-[13px]">
            <li className="text-quick-silver mb-[15px]">Press</li>
            <li className="">Upcoming Events</li>
            <li className="">Blogs</li>
          </ul>
          {/* Socials */}
          <ul className="space-y-[13px]">
            <li className="text-quick-silver mb-[15px]">Socials</li>
            <li className="">Twitter</li>
            <li className="">LinkedIn</li>
            <li className="">Instagram</li>
          </ul>
          {/* Contact */}
          <ul className="space-y-[13px]">
            <li className="text-quick-silver mb-[15px]">Contact</li>
            <li className="">+23481 2234 5567</li>
            <li className="">info@dayspringacademy.com</li>
            <li className="">admission@dayspringacademy.com</li>
          </ul>
        </div>
      </div>

      {/* bg-image */}
      <img
        src={patternDoodleWhiteImg}
        alt=""
        className="bg-black w-full h-[513px] object-cover "
      />
    </div>
  );
};

export default Footer;
