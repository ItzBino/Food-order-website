import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink ,useNavigate} from 'react-router-dom'
import { div } from 'framer-motion/client';

const ResponsiveMenu = ({ open, setOpen, loggedInUser, setShowLogin, setLoggedInUser }) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        setLoggedInUser(null);
        setOpen(false);
        navigate('/');
    };
    return (
        <>
            <AnimatePresence mode='wait'>
                {
                    open && (
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ duration: 0.3 }}
                            className='absolute top-20 left-0 w-full h-screen z-20'
                        >
                            <div className='text-xl font-semibold uppercase bg-orange-500 text-white py-10 m-6 rounded-3xl'>
                                <ul className='flex flex-col justify-center items-center gap-10 list-none'>
                                    <li><NavLink to='/'>Home</NavLink></li>
                                    <li><NavLink to='/menu'>Menu</NavLink></li>
                                    <li><NavLink to='/service'>Service</NavLink></li>
                                </ul>

                                {!loggedInUser ? (
                                    <>
                                        <div className="flex flex-col items-center gap-4 mt-7">
                                            <button
                                                onClick={() => {
                                                    setOpen(false)
                                                    setShowLogin(true);

                                                }}
                                                className="text-white font-semibold border  px-6 py-2 rounded bg-primary hover:text-white"
                                            >
                                                Sign In
                                            </button>


                                            <NavLink to="/admin-login">
                                                <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded font-semibold">
                                                    Admin
                                                </button>
                                            </NavLink>

                                        </div>

                                    </>
                                ) : (
                                    <div className='flex flex-col items-center justify-center mt-7'>
                                              <button
                                            onClick={handleLogout}
                                            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                      
                                 
                                )}
                            </div>
                        </motion.div>
                    )
                }

            </AnimatePresence>
        </>
    )
}

export default ResponsiveMenu