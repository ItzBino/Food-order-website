
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const adminData = JSON.parse(localStorage.getItem('admin'));
    if (username === adminData.username && password === adminData.password) {
      localStorage.setItem('admin', JSON.stringify({ ...adminData, isAdminLoggedIn: true }));
      navigate('/admin');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center items-center   h-96 bg-gray-100 dark:bg-black">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-4 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;