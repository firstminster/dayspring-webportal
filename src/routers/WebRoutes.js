import React from "react";
import { Routes, Route } from "react-router-dom";
// Components
import { Navbar } from "../components";
// Pages
import { Home, About, Gallery } from "../pages";

const WebRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
};

export default WebRoutes;
