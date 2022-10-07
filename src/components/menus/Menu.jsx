import React, { useState } from "react";
import AdminNavMenu from "./AdminNavMenu";
import SideBarMenu from "./SideBarMenu";

const Menu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <SideBarMenu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1 flex-col md:pl-64">
        <AdminNavMenu setSidebarOpen={setSidebarOpen} />
      </div>
    </div>
  );
};

export default Menu;
