import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import { ForgotPassword, Login, ResetPassword, NotFound } from "../pages";

// Routers
import { AdminRoutes } from ".";

const RouterComponent = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Auth */}
          <Route index path="/" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/reset" element={<ResetPassword />} />
          {/* Admin Dashboard */}
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default RouterComponent;
