import React from "react";
import { Routes, Route } from "react-router-dom";
// Components
import { Navbar } from "../components";
// Pages
import {
  Home,
  About,
  Gallery,
  Admission,
  ContactForm,
  Login,
  ForgotPassword,
  ResetPassword,
} from "../pages";

const WebRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        {/* Auth */}
        <Route index path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        {/* Web */}
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </>
  );
};

export default WebRoutes;
