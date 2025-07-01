import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import { useLocation } from 'react-router-dom'; 
import AdminLayout from './pages/admin/AdminLayout';
import AdminPanel from './pages/admin/AdminPanel';
import Inventory from './pages/admin/Inventory';
import OurServices from './components/OurService/OurService';
import ExploreMenu from './components/ExploreMenu/ExploreMenu';
import FoodDisplay from './components/FoodDisplay/FoodDisplay';


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem('user'))
  );

  const location = useLocation(); 

  const isAdminPage = location.pathname.startsWith('/admin'); 

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      {showLogin && (
        <LoginPopup
          setShowLogin={setShowLogin}
          setLoggedInUser={setLoggedInUser}
        />
      )}
      <div className="app min-h-screen bg-white text-black dark:bg-[#121212] dark:text-white">
        {!isAdminPage && (
          <Navbar
            setShowLogin={setShowLogin}
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute loggedInUser={loggedInUser} setShowLogin={setShowLogin}>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path='/menu' element= {<> <ExploreMenu/><FoodDisplay category={'All'}/></>} />
          <Route path="/service" element={<OurServices/>} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminPanel />} />
            <Route path="inventory" element={<Inventory />} />
          </Route>
        </Routes>
        
      </div>
      {!isAdminPage && <Footer />}
    </>
  );
};


export default App
