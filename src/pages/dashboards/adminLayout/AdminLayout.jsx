import React from "react";
import { Outlet, Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          {/* <li>
            <Link to="/books/2">Book 2</Link>
          </li>
          <li>
            <Link to="/books/new">New Book</Link>
          </li> */}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Admin;
