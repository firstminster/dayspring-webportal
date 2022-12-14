import React from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const Profile = () => {
  return (
    <div>
      {/* Page Header */}
      <div>
        <h3 className="text-[28px] font-semibold ">Profile</h3>
        <ul className="flex flex-wrap items-center font-medium">
          <li>
            <Link className="text-jet" to="/admin">
              Dashboard
            </Link>
          </li>
          {/* <span className="mx-2">/</span> */}
          <ChevronRightIcon
            className="h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          <li className="text-sonic-silver">
            <Link to="/admin/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
