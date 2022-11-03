import React, { lazy } from "react";

// Web > Common
export { default as Navbar } from "./navigation/navbar/Navbar";
// export { default as Footer } from "./footer/Footer";
export const Footer = lazy(() =>
  import(/*webpackChunkName: " Footer"*/ "./footer/Footer")
);

// Web > Home
export const Slider = lazy(() =>
  import(/*webpackChunkName: "Slider"*/ "./home/Slider")
);
export const WhyChooseUs = lazy(() =>
  import(/*webpackChunkName: "WhyChooseUs"*/ "./home/WhyChooseUs")
);
export const OurValue = lazy(() =>
  import(/*webpackChunkName: "OurValue"*/ "./home/OurValue")
);
export const Metrics = lazy(() =>
  import(/*webpackChunkName: "Metrics"*/ "./home/Metrics")
);
export const TeachersAndFacilities = lazy(() =>
  import(
    /*webpackChunkName: "TeachersAndFacilities"*/ "./home/TeachersAndFacilities"
  )
);
export const Blog = lazy(() =>
  import(/*webpackChunkName: "Blog"*/ "../components/home/Blog")
);
export const UpcomingEvents = lazy(() =>
  import(
    /*webpackChunkName: " UpcomingEvents"*/ "../components/home/UpcomingEvents"
  )
);
export const CallToAction = lazy(() =>
  import(
    /*webpackChunkName: " CallToAction"*/ "../components/home/CallToAction"
  )
);

// export { default as Slider } from "./home/Slider";
// export { default as WhyChooseUs } from "./home/WhyChooseUs";
// export { default as OurValue } from "./home/OurValue";
// export { default as Metrics } from "./home/Metrics";
// export { default as TeachersAndFacilities } from "./home/TeachersAndFacilities";
// export { default as Blog } from "./home/Blog";
// export { default as UpcomingEvents } from "./home/UpcomingEvents";
// export { default as CallToAction } from "./home/CallToAction";

// Admin
export { default as AdminHome } from "./dashboards/adminDashboard/AdminHome";
export { default as AdminProfile } from "./dashboards/adminDashboard/Profile";
// Admin > Navbar
export { default as AdminSidebar } from "./navigation/adminNav/AdminSidebar";
export { default as AdminNavbar } from "./navigation/adminNav/AdminNavbar";
// Admin > Dashboard > Students
export { default as ViewStudents } from "./dashboards/adminDashboard/student/ViewStudents";
export { default as AddStudent } from "./dashboards/adminDashboard/student/AddStudent";
export { default as StudentDetails } from "./dashboards/adminDashboard/student/StudentDetails";
export { default as EditStudent } from "./dashboards/adminDashboard/student/EditStudent";
// Admin > Dashboard > Teachers
export { default as ViewTeachers } from "./dashboards/adminDashboard/teacher/ViewTeachers";
export { default as AddTeacher } from "./dashboards/adminDashboard/teacher/AddTeacher";
export { default as TeacherDetails } from "./dashboards/adminDashboard/teacher/TeacherDetails";
export { default as EditTeacher } from "./dashboards/adminDashboard/teacher/EditTeacher";
// Table Component
export { default as Table } from "./table/Table";
