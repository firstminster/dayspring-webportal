import React from "react";
import { Routes, Route } from "react-router-dom";
// Pages
import { AdminLayout, NotFound } from "../pages";
// Components
import {
  AddStudent,
  EditStudent,
  Home,
  StudentDetails,
  ViewStudents,
} from "../components";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<Home />} />
        <Route path="all-students" element={<ViewStudents />} />
        <Route path="student-details/:id" element={<StudentDetails />} />
        <Route path="add-student/:id" element={<AddStudent />} />
        <Route path="edit-student/:id" element={<EditStudent />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
