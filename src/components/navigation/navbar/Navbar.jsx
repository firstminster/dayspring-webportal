import React, { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { dayspringLogo } from "../../../assets/importAssets";
import Dropdown from "./Dropdown";

// Active link
// const activeLink = ({ isActive }) =>
//   isActive ? "text-blue-primary transition-all duration-300 ease-out" : "";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const menuActiveHandler = () => setIsMenuActive(!isMenuActive); // set isMenuActive to true
  const closeMobileMenuHandler = () => setIsMenuActive(false); // set isMenuActive to false

  // dropdown menu
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 fixed h-[75px] lg:h-[95px] w-full z-20 top-0 left-0 shadow-sm ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="mt-[6px]  mx-[18px] lg:my-[13px] xl:mx-[18px]">
          <Link to="/">
            <img
              src={dayspringLogo}
              alt="dayspring-logo"
              className=" h-[45px] lg:h-[45px] xl:h-[55px] w-auto object-contain "
            />
          </Link>
        </div>
        <div className="flex md:order-2">
          <div className="hidden lg:flex">
            <NavLink
              to="/admission"
              className="flex items-center justify-center w-[130px] h-[40px] xl:w-[169px] xl:h-[49px] mr-[25px] px-[20px] py-[8px] xl:px-[25.5px] xl:py-[14px] bg-blue-primary text-white text-sm xl:text-lg rounded-full hover:bg-medium-orchid transition-all duration-300 ease-out "
            >
              <span className="mr-[11px]">Admission</span>
              <FaArrowRight className="w-[13.54px] h-[11.89px]" />
            </NavLink>
            <NavLink
              to="/login"
              className="flex items-center justify-center w-[130px] h-[40px] xl:w-[169px] xl:h-[49px] mr-[25px]  px-[25.5px] py-[14px] bg-white border border-blue-primary text-blue-primary text-sm xl:text-lg rounded-full hover:border-medium-orchid hover:text-medium-orchid transition-all duration-300 ease-out"
            >
              <span className="mr-[11px]">Log In</span>
              <FaArrowRight className="w-[13.54px] h-[11.89px]" />
            </NavLink>
          </div>
          <div
            className="absolute top-0 right-0 lg:hidden m-6 cursor-pointer"
            onClick={menuActiveHandler}
          >
            {isMenuActive ? (
              <FaTimes
                size={20}
                className="transition-all duration-700 ease-in-out"
              />
            ) : (
              <FaBars
                size={20}
                className="transition-all duration-700 ease-in-out"
              />
            )}
          </div>
        </div>
        <div className="justify-between items-center w-full xl:flex md:w-auto md:order-1">
          <ul
            className={` ${
              isMenuActive
                ? "absolute top-[55px] md:top-[69px] right-0 transition-all duration-500 ease-in-out"
                : "absolute top-0 -right-[100%] transition-all duration-500 ease-in-out"
            } nav-menu`}
          >
            <li>
              <NavLink to="/" onClick={closeMobileMenuHandler}>
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/about" onClick={closeMobileMenuHandler}>
                About
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/gallery"
                className=""
                onClick={closeMobileMenuHandler}
              >
                Gallery
              </NavLink>
            </li>
            <li
              className=""
              // onMouseEnter={onMouseEnter}
              // onMouseLeave={onMouseLeave}
            >
              <NavLink
                to="/blogs"
                className="flex items-center"
                onClick={closeMobileMenuHandler}
              >
                Press
                <span>
                  <MdKeyboardArrowDown className="hidden lg:block" />
                </span>
              </NavLink>
              {/* {dropdown && <Dropdown  />} */}
              {/* <Dropdown /> */}
            </li>
            <li>
              <NavLink
                to="/contact"
                className=""
                onClick={closeMobileMenuHandler}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <hr className="text-blue-primary border border-blue-primary w-[124px] lg:hidden" />
            </li>
            <li className="lg:hidden">
              <NavLink
                to="/admission"
                className=""
                onClick={closeMobileMenuHandler}
              >
                Admission
              </NavLink>
            </li>
            <li className="lg:hidden">
              <NavLink
                to="/login"
                className=""
                onClick={closeMobileMenuHandler}
              >
                Log In
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// className="hover:text-blue-primary transition-all duration-300 ease-out"
// activeclassName="text-blue-primary"
// className={({ isActive, isPending }) => {
//   console.log(isActive);
//   console.log(isPending);
//   return isActive
//     ? "hover:text-blue-primary transition-all duration-300 ease-out"
//     : "";
// }}

// <nav className=" lg:flex lg:justify-center lg:items-center  h-[75px] lg:h-[95px] w-full fixed  top-0 inset-0 bg-white shadow-md z-20 ">
//   <div className="lg:container  mx-auto">
//     {/* <div className="flex items-center"> */}
//     {/* logo */}
//     <Link
//       to="/"
//       className="py-[13px] px-[18px] lg:py-[10px] lg:ml-[15px] absolute top-0 left-0"
//     >
//       <img
//         src={dayspringLogo}
//         alt="nav-logo"
//         className=" h-[48.13px] lg:h-[61.54px] w-auto object-contain "
//       />
//     </Link>
//     <div
//       className="absolute top-0 right-0 lg:hidden p-5"
//       onClick={menuActiveHandler}
//     >
//       {isMenuActive ? <FaTimes size={30} /> : <FaBars size={30} />}
//     </div>
//     {/* nav-items */}
//     <ul
//       className={`${
//         isMenuActive
//           ? "flex flex-col absolute top-[69px] right-0  "
//           : "absolute top-0 -right-[100%]"
//       }  bg-white lg:bg-transparent shadow-md lg:shadow-none z-30 h-[346px] p-[22px] lg:p-0 lg:h-auto text-lg lg:w-full lg:flex lg:flex-row lg:items-center lg:justify-start lg:absolute lg:top-5 lg:left-[170px] xl:left-[200px]`}
//     >
//       <li className="lg:px-[35px]">
//         <NavLink to="/">Home</NavLink>
//       </li>
//       <li className="">
//         <NavLink to="/about">About</NavLink>
//       </li>
//       <li className="lg:mx-[35px]">
//         <NavLink to="/gallery" className="">
//           Gallery
//         </NavLink>
//       </li>
//       <li className="">
//         <NavLink to="/#">Press</NavLink>
//       </li>
//       <li className="lg:ml-[35px] lg:mr-[100px] xl:mr-[200px]">
//         <NavLink to="/contact" className="">
//           Contact Us
//         </NavLink>
//       </li>
//       {/* button */}
//       <li>
//         <NavLink
//           to="/admission"
//           className="flex items-center justify-center w-[169px] h-[49px] mr-[25px] px-[25.5px] py-[14px] bg-blue-primary text-white text-lg rounded-full hover:bg-medium-orchid transition-all duration-300 ease-out "
//         >
//           <span className="mr-[11px]">Admission</span>
//           <FaArrowRight className="w-[13.54px] h-[11.89px]" />
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/login"
//           className="flex items-center justify-center w-[169px] h-[49px] mr-[25px]  px-[25.5px] py-[14px] bg-white border border-blue-primary text-blue-primary text-lg rounded-full hover:border-medium-orchid hover:text-medium-orchid transition-all duration-300 ease-out"
//         >
//           <span className="mr-[11px]">Log In</span>
//           <FaArrowRight className="w-[13.54px] h-[11.89px]" />
//         </NavLink>
//       </li>
//     </ul>
//   </div>
// </nav>
