import React, { lazy } from "react";
// import StudentLogin from "./components/StudentLogin";
import StaffLogin from "./components/StaffLogin";

// const StaffLogin = lazy(() =>
//   import(/*webpackChunkName: "Login"*/ "./components/StaffLogin")
// );

const Login = () => {
  return (
    <div className="">
      {/* <StudentLogin /> */}
      <StaffLogin />
    </div>
  );
};

export default Login;
