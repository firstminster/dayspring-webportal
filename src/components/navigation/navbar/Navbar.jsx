import React from "react";
import { Link, NavLink } from "react-router-dom";
import { dayspringLogo } from "../../../assets/importAssets";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md h-[95px] w-full">
      {/* logo */}
      <span>
        <Link to="/">
          <img src={dayspringLogo} alt="" className="h-[61px] w-auto" />
        </Link>
      </span>

      {/* nav-links */}
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
