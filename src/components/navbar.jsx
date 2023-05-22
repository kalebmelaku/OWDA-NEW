/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import logo from '../assets/main_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
    const [showNav, setShowNav] = useState(false);
    const location = useLocation()

    const handleMenuToggle = () => {
        setShowNav(!showNav);
    };
    return (
        <>
            <nav className="bg-white  border-0 shadow-2xl">
                <div
                    className="container flex flex-wrap items-center justify-end mx-auto p-1 px-2"
                >

                    <div className={`w-full `}>
                        <ul
                            className="font-medium flex 
                            items-center justify-end md:p-0 
                        -lg 
                            md:flex-row md:space-x-8 
                            md:mt-0 md:border-0 md:bg-white"
                        >
                            <li className='nav-link'>
                                <a
                                    href="/contact"
                                    className={`${location.pathname === '/contact' ? 'active' : ''} block py-2 pl-3 pr-4  md:border-0 md:p-0`}
                                >Contact Us</a>
                            </li>
                            <li className='nav-link'>
                                <a href="mailto:info@owdaeth.org">info@owdaeth.org</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="bg-white  bg-gray-900">
                <div
                    className=" container flex flex-wrap items-center justify-between mx-auto px-2"
                >
                    <a href="/" className="navbar-brand">
                        <img src={logo} alt="logo" width="60" height="" className="d-inline-block align-text-top" />
                    </a>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  text-gray-400  hover:bg-gray-700  focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                        onClick={handleMenuToggle}
                    >
                        <span className="sr-only">Open main menu</span>
                        <FontAwesomeIcon icon={showNav ? faXmark : faBars} className="fa-2x" />
                    </button>
                    <div className={`w-full md:block md:w-auto sm:w-full ${showNav ? 'block' : 'hidden'}`} id="navbar-default">
                        <ul
                            className="font-medium 
                            flex flex-col p-4 md:p-0 
                            mt-4-lg bg-gray-50 md:bg-white-50
                            md:flex-row md:space-x-8 
                            md:mt-0 md:border-0 md:bg-white 
                            "
                        >
                            <li className='nav-link'>
                                <a
                                    href="/who"
                                    className={` ${location.pathname === '/who' ? 'active' : ''} block py-2 pl-3 pr-4 md:p-0 `}
                                >Who we are</a>
                            </li>
                            <li className='nav-link'>
                                <a
                                    href="/what"
                                    className={`${location.pathname === '/what' ? 'active' : ''} block py-2 pl-3 pr-4 text-black  md:border-0 md:p-0`}
                                >What we do</a>
                            </li>
                            <li className='nav-link'>
                                <a
                                    href="/about"
                                    className={`${location.pathname === '/about' ? 'active' : ''} block py-2 pl-3 pr-4  md:border-0 md:p-0`}
                                >About Us</a>
                            </li>
                            <li className='nav-link'>
                                <a
                                    href="/publications"
                                    className={`${location.pathname === '/publications' ? 'active' : ''} block py-2 pl-3 pr-4  md:border-0 md:p-0`}
                                >Publications</a>
                            </li>
                            <li className='nav-link'>
                                <a
                                    href="/resource"
                                    className={`${location.pathname === '/resource' ? 'active' : ''} block py-2 pl-3 pr-4  md:border-0 md:p-0 `}
                                >Resource center</a>
                            </li>
                            <li className='nav-link'>
                                <Link
                                    to="/vacancy"
                                    className={`${location.pathname === '/vacancy' ? 'active' : ''} block py-2 pl-3 pr-4  md:border-0 md:p-0 `}
                                >Vacancy</Link>
                            </li>
                        </ul>
                    </div>
                        <div className={`flex md:block ${showNav ? 'block' : 'hidden'} ml-4 mt-4 md:mt-0`}>
                            <Link to='/donate'  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium-lg text-sm px-4 py-2 text-center  md:mr-0  bg-red-600  hover:bg-blue-700  focus:ring-red-800">Donate</Link>
                        </div>
                </div>
            </nav>
        </>
    );
}