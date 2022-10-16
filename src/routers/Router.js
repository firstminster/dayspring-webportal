import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import { Login, ForgotPassword, ResetPassword, NotFound } from "../pages";
// Routers
import { AdminRoutes, WebRoutes } from ".";

const RouterComponent = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Website */}
          <Route path="/*" element={<WebRoutes />} />
          {/* Auth */}
          <Route index path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/reset" element={<ResetPassword />} />
          {/* Admin Dashboard */}
          <Route path="/admin/*" element={<AdminRoutes />} />
          {/* NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default RouterComponent;
