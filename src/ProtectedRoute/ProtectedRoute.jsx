import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children, loggedInUser, setShowLogin }) => {
  if (!loggedInUser) {
    toast.warning("Please log in to access this page", { toastId: 'login-warning' });
    console.log(children)
    return <Navigate to="/" />; 
  }

  return children;
};

export default ProtectedRoute;
