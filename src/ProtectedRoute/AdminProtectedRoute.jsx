import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminProtectedRoute = ({ children }) => {
  const adminData = JSON.parse(localStorage.getItem('admin'));
  return adminData?.isAdminLoggedIn ? children : <Navigate to="/admin-login" />;
};

export default AdminProtectedRoute;
