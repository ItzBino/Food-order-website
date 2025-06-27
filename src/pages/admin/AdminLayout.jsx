import React from 'react';
import AdminNavbar from '../../components/Admin/AdminNavbar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <main className="p-6">
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
