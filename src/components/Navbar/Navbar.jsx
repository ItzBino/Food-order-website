import React, {  useState } from 'react'
import {  NavLink } from 'react-router-dom'
import { FaBowlFood } from 'react-icons/fa6';
import { CiSearch } from 'react-icons/ci';
import { PiShoppingCartThin } from 'react-icons/pi';
import { MdMenu } from 'react-icons/md';
import ResponsiveMenu from './ResponsiveMenu';
import ThemeToggle from '../ThemeToggle/ThemeToggle'


const Navbar = ({setShowLogin,loggedInUser,setLoggedInUser}) => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <nav>
      <div className="container flex justify-between items-center py-8">
        <div className="text-2xl  flex items-center gap-2 font-bold uppercase">
         
          <p className="text-primary hidden md:inline-block">Foodify</p>
        </div>
        <div className='hidden md:block'>
          <ul className='flex items-center gap-6 text-gray-600'>
            <li><NavLink className={`inline-block py-1 px-3 hover:text-primary font-semibold dark:text-white`} to='/'>Home</NavLink></li>
            <li><NavLink className={`inline-block py-1 px-3 hover:text-primary font-semibold dark:text-white`} to='/menu'>Menu</NavLink></li>
            <li><NavLink  className={`inline-block py-1 px-3 hover:text-primary font-semibold dark:text-white`}to='/service'>Service</NavLink></li>
          </ul>
        </div>
        <div className='flex items-center gap-4'>
          
             <ThemeToggle />
         
            <button className='text-3xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
              <NavLink to='/cart'>
                     <PiShoppingCartThin />
              </NavLink>
           
            </button>
            {
              loggedInUser ? (
                 <button className="hover:bg-primary text-primary font-semi-bold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block" onClick={() => {
              localStorage.removeItem("user");
              setLoggedInUser(null); }}>
              Logout
            </button>
              ):(
                  <>
                    <button onClick={() => {setShowLogin(true); setOpen(false);}} className="bg-primary text-white font-semi-bold  rounded-md border-2 px-6 py-2 duration-200 hidden md:block">
                      Sigin
                    </button>
                    <NavLink to="/admin-login">
                      <button className="bg-red-700 hover:bg-red-800 text-white font-semibold rounded-md px-6 py-2 duration-200 hidden md:block ml-2">
                        Admin
                      </button>
                    </NavLink>
                  </>
      

              )
            }
           
        </div>
        <div className='md:hidden' onClick={()=>setOpen(!open)}>
          <MdMenu className='text-4xl'/>
        </div>
      </div>
    </nav>
    <ResponsiveMenu open={open} 
    setShowLogin={setShowLogin}
    loggedInUser={loggedInUser} 
    setLoggedInUser={setLoggedInUser} 
    setOpen ={setOpen}/>
    </>
  )
}

export default Navbar;