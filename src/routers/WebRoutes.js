import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// Components
import { Navbar, Spinner } from "../components";
// Pages
import {
  Home,
  About,
  Gallery,
  Blog,
  Admission,
  ContactForm,
  // Login,
  // ForgotPassword,
  ResetPassword,
} from "../pages";

// const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() =>
  import(/*webpackChunkName: "Home"*/ "../pages/auth/Login")
);
const ForgotPassword = lazy(() => import("../pages/auth/ForgotPassword"));
// const ResetPassword = lazy(() => import("../pages/auth/ResetPassword"));
// const About = lazy(() => import("../pages/About"));
// const Gallery = lazy(() => import("../pages/Gallery"));
// const Blog = lazy(() => import("../pages/Blog"));
// const Admission = lazy(() => import("../pages/Admission"));
// const ContactForm = lazy(() => import("../pages/ContactForm"));

const WebRoutes = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route index path="/" element={<Home />} />
          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/reset" element={<ResetPassword />} />
          {/* Web */}
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default WebRoutes;
