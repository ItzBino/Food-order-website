import React from "react";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow mt-3 w-full sm:overflow-hidden">
      <div className="container mx-auto flex justify-evenly items-center">
        <h1 className="text-xl sm:text-lg font-semibold mr-2">Admin Panel</h1>
        <nav className="flex gap-6 sm:gap-3 justify-center">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? "text-red-900 font-bold" : "hover:text-yellow-300"
            }
          >
            🏠 Dashboard
          </NavLink>
          <NavLink
            to="/admin/inventory"
            className={({ isActive }) =>
              isActive ? "text-red-900 font-bold" : "hover:text-yellow-300"
            }
          >
            📦 Inventory
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default AdminNavbar;
