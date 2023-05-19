import { useState } from 'react';
import logo from '../assets/main_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [showNav, setShowNav] = useState(false);
    const handleMenuToggle = () => {
        setShowNav(!showNav);
    };
    return (
        <>
            <nav className="bg-white  border-0 shadow-2xl dark:bg-gray-900">
                <div
                    className="max-w-screen-xl container flex flex-wrap items-center justify-end mx-auto p-1 px-4"
                >

                    <div className={`w-full `}>
                        <ul
                            className="font-medium flex 
                            items-center justify-end md:p-0 
                            rounded-lg 
                            md:flex-row md:space-x-8 
                            md:mt-0 md:border-0 md:bg-white"
                        >
                            <li className='nav-link'>
                                <a
                                    href="/contact"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >Contact Us</a>
                            </li>
                            <li className='nav-link'>
                                <a href="mailto:info@owdaeth.org">info@owdaeth.org</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="bg-white dark:bg-gray-900">
                <div
                    className="max-w-screen-xl container flex flex-wrap items-center justify-between mx-auto p-2 px-4"
                >
                    <a href="/" className="navbar-brand">
                        <img src={logo} alt="logo" width="60" height="" className="d-inline-block align-text-top" />
                    </a>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                            mt-4 rounded-lg bg-gray-50
                            md:flex-row md:space-x-8 
                            md:mt-0 md:border-0 md:bg-white 
                            dark:bg-gray-800 md:dark:bg-gray-900 
                            dark:border-gray-700"
                        >
                            <li className='nav-link'>
                                <a
                                    href="/who"
                                    className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 dark:text-white"
                                >Who we are</a>
                            </li>
                            <li className='nav-link'>
                                <a
                                    href="/what"
                                    className="block py-2 pl-3 pr-4 text-gray-900 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >What we do</a>
                            </li>
                            <li className='nav-link'>
                                <a
                                    href="/about"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >About Us</a>
                            </li>
                            <li className='nav-link'>
                                <a
                                    href="/publications"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >Publications</a>
                            </li>
                            <li className='nav-link'>
                                <a
                                    href="/resource"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >Resource center</a>
                            </li>
                            <li className='nav-link'>
                                <Link
                                    to="/vacancy"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >Vacancy</Link>
                            </li>
                        </ul>
                    </div>
                        <div className={`flex md:block ${showNav ? 'block' : 'hidden'} ml-4 mt-4 md:mt-0`}>
                            <Link to='/donate'  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-red-800">Donate</Link>
                        </div>
                </div>
            </nav>
        </>
    );
}