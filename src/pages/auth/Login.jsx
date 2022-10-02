import React from "react";
import StudentLogin from "./components/StudentLogin";
import StaffLogin from "./components/StaffLogin";

const Login = () => {
  return (
    <div className="">
      <StudentLogin />
      <StaffLogin />
    </div>
  );
};

export default Login;
