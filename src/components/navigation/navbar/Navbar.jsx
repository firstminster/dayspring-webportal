import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { dayspringLogo } from "../../../assets/importAssets";

const Navbar = () => {
  return (
    <header className=" fixed bg-white shadow-md  w-full z-20 top-0 left-0">
      <nav className="flex  justify-around items-center  h-[95px] ">
        <div className="flex items-center">
          {/* logo */}
          <span>
            <Link to="/">
              <img
                src={dayspringLogo}
                alt="nav-logo"
                className="h-[61px] w-auto object-contain"
              />
            </Link>
          </span>

          {/* nav-links */}
          <ul className="flex text-lg">
            <li className="ml-[47px] mr-[35px]">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="ml-[35px] mr-[35px]">
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li className="">
              <NavLink to="/#">Press</NavLink>
            </li>
            <li className="ml-[35px]">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>

        {/* button */}
        <div className="flex">
          <NavLink
            to="/admission"
            className="flex items-center justify-center w-[169px] h-[49px] mr-[25px] px-[25.5px] py-[14px] bg-blue-primary text-white text-lg rounded-full hover:bg-medium-orchid transition-all duration-300 ease-out "
          >
            <span className="mr-[11px]">Admission</span>
            <FaArrowRight className="w-[13.54px] h-[11.89px]" />
          </NavLink>
          <NavLink
            to="/login"
            className="flex items-center justify-center w-[169px] h-[49px] mr-[25px]  px-[25.5px] py-[14px] bg-white border border-blue-primary text-blue-primary text-lg rounded-full hover:border-medium-orchid hover:text-medium-orchid transition-all duration-300 ease-out"
          >
            <span className="mr-[11px]">Log In</span>
            <FaArrowRight className="w-[13.54px] h-[11.89px]" />
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
