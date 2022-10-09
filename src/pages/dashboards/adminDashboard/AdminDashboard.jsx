import React, { useState } from "react";
import { Outlet } from "react-router-dom";
// Import Components
import { AdminNavbar, AdminSidebar } from "../../../components";

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1 flex-col md:pl-64">
        <AdminNavbar setSidebarOpen={setSidebarOpen} />
        {/* Dashboard content here */}
        <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              <Outlet />
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
