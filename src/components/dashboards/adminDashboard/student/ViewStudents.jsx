import React from "react";
import { Link } from "react-router-dom";
// Components
import { Table } from "../../..";
// Icons
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { HiUserAdd } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";

const ViewStudents = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        {/* Page Header */}
        <div>
          <h3 className="text-[28px] font-semibold ">Students</h3>
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
              <Link to="/admin/all-students">Students</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <button className="border border-maximum-yellow-red rounded py-[5px] px-[10px] mr-3 text-maximum-yellow-red hover:bg-maximum-yellow-red hover:text-white transition-all duration-300 ease-out">
            <span className="flex items-center">
              <FaDownload />
              <p className="ml-1 font-medium">Download</p>
            </span>
          </button>
          <button className="bg-maximum-yellow-red text-white rounded p-[5px] hover:bg-blue-primary transition-all duration-300 ease-out">
            <Link to="/admin/add-student/1">
              <HiUserAdd size={25} />
            </Link>
          </button>
        </div>
      </div>
      {/* Table */}
      <Table />
    </div>
  );
};

export default ViewStudents;
