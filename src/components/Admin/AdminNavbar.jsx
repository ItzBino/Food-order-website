import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';

const AdminNavbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    const adminData = JSON.parse(localStorage.getItem('admin'));
    localStorage.setItem('admin', JSON.stringify({ ...adminData, isAdminLoggedIn: false }));
    navigate('/');
  };

  return (
    <header className="bg-gray-900 text-white shadow mt-3 w-full">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-xl font-semibold">Admin Panel</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-300"
            }
          >
            🏠 Dashboard
          </NavLink>
          <NavLink
            to="/admin/inventory"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-300"
            }
          >
            📦 Inventory
          </NavLink>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
          >
            Logout
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-gray-800 text-sm">
          <NavLink
            to="/admin"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-300"
            }
          >
            🏠 Dashboard
          </NavLink>
          <NavLink
            to="/admin/inventory"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-300"
            }
          >
            📦 Inventory
          </NavLink>
          <button
            onClick={() => {
              handleLogout();
              setMenuOpen(false);
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded w-fit"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default AdminNavbar;
