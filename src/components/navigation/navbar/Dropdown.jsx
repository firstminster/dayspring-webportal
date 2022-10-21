import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { DropdownItems } from "../../../data/MenuItemsData";

const Dropdown = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  console.log(click);

  return (
    <ul
      onClick={handleClick}
      className={` ${
        click ? "hidden" : "invisible lg:visible "
      } absolute top-[100px] bg-white border border-gray-100 px-5 pt-5 rounded-[10px] shadow-sm`}
      // id="dropdown"
    >
      {DropdownItems.map((item, _id) => {
        return (
          <li
            key={_id}
            className="flex items-center mb-5"
            onClick={() => setClick(false)}
          >
            <span className="mr-[12px]">
              <item.icon className="h-[14px] w-[14px]" />
            </span>
            <NavLink to={item.path} className="block">
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
