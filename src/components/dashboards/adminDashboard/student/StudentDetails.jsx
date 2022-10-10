import React from "react";
import { Link } from "react-router-dom";

const StudentDetails = () => {
  return (
    <div>
      {/* Page Header */}
      <div>
        <h3 className="text-[28px] font-semibold ">Students Details</h3>
        <ul className="flex flex-wrap font-medium">
          <li>
            <Link className="text-jet" to="/admin/all-students">
              Students
            </Link>
          </li>
          <span className="mx-2">/</span>
          <li className="text-sonic-silver">
            <Link to="/admin/student-details/1">Students Details</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StudentDetails;
