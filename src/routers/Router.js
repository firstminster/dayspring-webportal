import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import { NotFound } from "../pages";
// Routers
import { AdminRoutes, WebRoutes } from ".";

const RouterComponent = () => {
  return (
    <>
      <Router>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Routes>
          {/* Website */}
          <Route path="/*" element={<WebRoutes />} />

          {/* Admin Dashboard */}
          <Route path="/admin/*" element={<AdminRoutes />} />
          {/* NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* </Suspense> */}
      </Router>
    </>
  );
};

export default RouterComponent;
