import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {

    const [user] = useAuthState(auth);
    const [open, setOpen] = useState(false);

    const logOut = () => {
        signOut(auth);
        alert('You are logged out');
    }

    return (
        <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 py-4 md:px-auto">
            <div className="md:h-16 mx-auto md:px-4 py-6 container flex items-center justify-between flex-wrap md:flex-nowrap">
                {/*  Logo  */}
                <div className="text-indigo-500 md:order-1">
                    <img src={'https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-inventory-e-commerce-flaticons-flat-flat-icons.png'} alt='...'/>
                </div>
                <div className={open ? "block text-gray-500 order-3 w-full md:w-auto md:order-2" : "hidden md:block text-gray-500 order-3 w-full md:w-auto md:order-2"}>
                    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 mt-4 md:mt-0  font-semibold ">
                        <li className="md:px-4 md:py-2"><ActiveLink to={'/'}>Home</ActiveLink></li>
                        <li className="md:px-4 md:py-2"><ActiveLink to={'/additems'}>Add Items</ActiveLink></li>
                        <li className="md:px-4 md:py-2"><ActiveLink to={'/manageitems'}>Manage Inventories</ActiveLink></li>
                        <li className="md:px-4 md:py-2"><ActiveLink to={'/blogs'}>Blogs</ActiveLink></li>
                        {user && <li className="md:px-4 md:py-2"><ActiveLink to={'/myitems'}>My Items</ActiveLink></li>}
                    </ul>
                </div>
                <div className="order-2 md:order-3 flex">
                    {
                        user ?
                            <button onClick={logOut} className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2 font-semibold">
                                {/* Logout Icon  */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                                </svg>
                                <span>Logout</span>
                            </button>
                            :
                            <Link to={'/login'}>
                                <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2 font-semibold">
                                    {/* Login Icon  */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Log in</span>
                                </button>
                            </Link>}
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setOpen(!open)} className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                            {
                                open ?
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="20" height="20"
                                        className="h-8 w-8"
                                        viewBox="0 0 50 50"
                                        fill="currentColor"
                                    ><path d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"></path>
                                    </svg> :
                                    <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                        </path>
                                    </svg>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;