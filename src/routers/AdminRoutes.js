import React from "react";
import { Routes, Route } from "react-router-dom";
// Pages
import { AdminDashboard } from "../pages";
// Components
import {
  AdminHome,
  AdminProfile,
  AddStudent,
  EditStudent,
  StudentDetails,
  ViewStudents,
  ViewTeachers,
  AddTeacher,
  TeacherDetails,
  EditTeacher,
  NotFound,
} from "../components";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<AdminDashboard />}>
        <Route index element={<AdminHome />} />
        <Route path="profile" element={<AdminProfile />} />
        {/* Student */}
        <Route path="all-students" element={<ViewStudents />} />
        <Route path="add-student/:id" element={<AddStudent />} />
        <Route path="student-details/:id" element={<StudentDetails />} />
        <Route path="edit-student/:id" element={<EditStudent />} />
        {/* Teacher */}
        <Route path="all-teachers" element={<ViewTeachers />} />
        <Route path="add-teacher/:id" element={<AddTeacher />} />
        <Route path="teacher-details/:id" element={<TeacherDetails />} />
        <Route path="edit-teacher/:id" element={<EditTeacher />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
