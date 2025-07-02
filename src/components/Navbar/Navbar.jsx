import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'
import ThemeToggle from '../ThemeToggle/ThemeToggle'


const Navbar = ({setShowLogin,loggedInUser,setLoggedInUser}) => {




    return (
        <div className='navbar '>
            <img src={null} alt="" className='logo' />
            <ul className="navbar-menu  dark:text-white">
                <li><NavLink className={(e) => { return e.isActive ? "active" : '' }} to='/'>Home</NavLink></li>
                <li><NavLink className={(e) => { return e.isActive ? "active" : '' }} to='/menu'>Menu</NavLink></li>
                <li><NavLink className={(e) => { return e.isActive ? "active" : '' }} to='/service'>our service</NavLink></li>
            </ul>
            <div className="navbar-right">
                    <ThemeToggle />
                <div className="navbar-basket-icon">
                    <NavLink to='/cart'>
                         <img src={assets.basket_icon} alt="" />
                    </NavLink>
                   
                    <div className="dot"></div>
                 
                </div>
               {
          loggedInUser ? (
            <button className='bg-[#8f0909] p-2 text-white rounded text-1xl dark:bg-orange-600' onClick={() => {
              localStorage.removeItem("user");
              setLoggedInUser(null); 
            }}>
              Logout
            </button>
          ) : (<>
            <button onClick={() => setShowLogin(true)} className='bg-[#52230F] p-2 text-white rounded  dark:bg-orange-600'>Sign In</button>
           <NavLink to='/admin'><button className='text-white bg-red-900 p-2 font-bold rounded'>Admin</button></NavLink> 
          </>
          
          )
        }
            </div>

        </div>
    )
}

export default Navbar
