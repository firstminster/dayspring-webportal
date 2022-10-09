import React from "react";
// Import Icons
import { FaUserGraduate, FaSchool } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";

const AdminHome = () => {
  return (
    <div>
      {/* Page Header */}
      <div>
        <h3 className="text-[28px] font-semibold text-jet">Welcome Admin!</h3>
        <ul className="flex flex-wrap text-sonic-silver font-medium">
          <li className="">Dashboard</li>
        </ul>
      </div>

      {/* Overview Section */}

      <div className="flex flex-wrap justify-between items-center mt-5  ">
        <div className="bg-navajo-white border-2 border-maximum-yellow-red rounded-tl-[30px] rounded-br-[30px] py-[15px] px-[15px] m-[8px] w-[250px] grow shadow-lg">
          <div className="flex justify-between items-center">
            <div className="text-white bg-maximum-yellow-red text-[25px] w-[60px] h-[60px] py-[13px] px-[10px] mr-5 rounded-[10px] ">
              <FaUserGraduate size={40} />
            </div>
            <div className="text-jet">
              <h3 className="text-[28px] font-semibold">250</h3>
              <h6 className="m-0 font-[500] text-[15px] ">Students</h6>
            </div>
          </div>
        </div>

        {/* Column - 2 */}
        <div className="bg-blue-light border-2 border-blue-primary rounded-tl-[30px] rounded-br-[30px] py-[15px] px-[15px] m-[8px] w-[250px] grow shadow-lg">
          <div className="flex justify-between items-center">
            <div className="text-white bg-blue-primary text-[25px] w-[60px] h-[60px] py-[13px] px-[10px] mr-5 rounded-[10px] ">
              <FaSchool size={40} />
            </div>
            <div className="text-jet">
              <h3 className="text-[28px] font-semibold">3</h3>
              <h6 className="m-0 font-[500] text-[15px] ">Branches</h6>
            </div>
          </div>
        </div>

        {/* Column - 3 */}
        <div className="bg-misty-rose border-2 border-outrageous-orange rounded-tl-[30px] rounded-br-[30px] py-[15px] px-[15px] m-[8px] w-[250px] grow shadow-lg">
          <div className="flex justify-between items-center">
            <div className="text-white bg-outrageous-orange text-[25px] w-[60px] h-[60px] py-[13px] px-[10px] mr-5 rounded-[10px] ">
              <GiTeacher size={40} />
            </div>
            <div className="text-jet">
              <h3 className="text-[28px] font-semibold">50</h3>
              <h6 className="m-0 font-[500] text-[15px] ">Academic Staff</h6>
            </div>
          </div>
        </div>

        {/* Column - 4 */}
        <div className="bg-lavender-web border-2 border-medium-slate-blue rounded-tl-[30px] rounded-br-[30px] py-[15px] px-[15px] m-[8px] w-[250px] grow shadow-lg">
          <div className="flex justify-between items-center">
            <div className="text-white bg-medium-slate-blue text-[25px] w-[60px] h-[60px] py-[13px] px-[10px] mr-5 rounded-[10px] ">
              <IoIosPeople size={40} />
            </div>
            <div className="text-jet">
              <h3 className="text-[28px] font-semibold">10</h3>
              <h6 className="m-0 font-[500] text-[15px] ">Nonacademic Staff</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
