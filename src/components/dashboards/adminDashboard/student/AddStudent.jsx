import React from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const AddStudent = () => {
  return (
    <div>
      {/* Page Header */}
      <div>
        <h3 className="text-[28px] font-semibold ">Add Students</h3>
        <ul className="flex items-center flex-wrap font-medium">
          <li>
            <Link className="text-jet" to="/admin/all-students">
              Students
            </Link>
          </li>
          {/* <span className="mx-2">/</span> */}
          <ChevronRightIcon
            className="h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          <li className="text-sonic-silver">
            <Link to="/admin/add-student/1">Add Students</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AddStudent;
