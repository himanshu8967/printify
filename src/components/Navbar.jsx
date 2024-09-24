import React, { useState } from "react";
import { MdArrowDropDown, MdMenu, MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="fixed top-0 w-full bg-white shadow-md z-50">
            <div className="flex justify-between items-center p-3 max-w-7xl mx-auto">
                {/* Logo and Heading */}
                <div className="flex items-center text-green-600">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-10 transition-transform transform hover:scale-105"
                    />
                    <h1 className="text-2xl font-bold italic ml-2 transition-transform transform hover:scale-105">
                        Printify
                    </h1>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="lg:hidden">
                    <button onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? (
                            <MdClose className="text-3xl text-green-600" />
                        ) : (
                            <MdMenu className="text-3xl text-green-600" />
                        )}
                    </button>
                </div>

                {/* Menu Items for Large Screens */}
                <div className={`lg:flex ${isMobileMenuOpen ? "flex" : "hidden"} flex-col lg:flex-row lg:items-center space-y-5 lg:space-y-0 lg:space-x-4 items-center`}>
                    <a
                        href="/home"
                        className="text-slate-800 hover:text-green-500 transition duration-200 flex items-center text-sm"
                    >
                        Catalog
                    </a>

                    <div className="relative">
                        <a
                            onClick={() => toggleDropdown("howItWorks")}
                            className="text-slate-800 group hover:text-green-500 transition duration-200 flex items-center text-sm cursor-pointer"
                        >
                            How it works
                            <motion.div
                                animate={{ rotate: openDropdown === "howItWorks" ? 360 : 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <MdArrowDropDown className="ml-1 text-gray-900 group-hover:text-green-500 transition duration-200 mt-1" />
                            </motion.div>
                        </a>
                        {openDropdown === "howItWorks" && (
                            <div className="absolute left-0 mt-2 w-48 bg-white border text-sm border-gray-300 rounded-lg shadow-lg z-10">
                                <ul className="py-2">
                                    <li className="px-3 py-1 hover:bg-green-100 cursor-pointer transition duration-200">How Printify Works</li>
                                    <li className="px-3 py-1 hover:bg-green-100 cursor-pointer transition duration-200">Print On Demand</li>
                                    <li className="px-3 py-1 hover:bg-green-100 cursor-pointer transition duration-200">Printify Quality Promise</li>
                                    <li className="px-3 py-1 hover:bg-green-100 cursor-pointer transition duration-200">What to Sell?</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <a
                        href="/services"
                        className="text-slate-800 group hover:text-green-500 transition duration-200 text-sm"
                    >
                        Pricing
                    </a>

                    <a
                        href="/menu"
                        className="text-slate-800 hover:text-green-500 transition duration-200 flex items-center text-sm"
                    >
                        Blog
                    </a>

                    {/* More Dropdown Menus */}
                    <div className="relative">
                        <a
                            onClick={() => toggleDropdown("services")}
                            className="text-slate-800 group hover:text-green-500 transition duration-200 flex items-center text-sm cursor-pointer"
                        >
                            Services
                            <motion.div
                                animate={{ rotate: openDropdown === "services" ? 360 : 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <MdArrowDropDown className="ml-1 text-gray-900 group-hover:text-green-500 transition duration-200 mt-1" />
                            </motion.div>
                        </a>
                        {openDropdown === "services" && (
                            <div className="absolute left-0 mt-2 w-48 bg-white border text-sm border-gray-300 rounded-lg shadow-lg z-10">
                                <ul className="py-2">
                                    <li className="px-3 py-1 hover:bg-green-100 cursor-pointer transition duration-200">Printify Studio</li>
                                    <li className="px-3 py-1 hover:bg-green-100 cursor-pointer transition duration-200">Express Delivery</li>
                                    <li className="px-3 py-1 hover:bg-green-100 cursor-pointer transition duration-200">Transfer Products</li>
                                    <li className="px-3 py-1 hover:bg-green-100 cursor-pointer transition duration-200">Order In Bulk</li>
                                    <li className="px-3 py-1 hover:bg-green-100 cursor-pointer transition duration-200">Experts Program</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <a
                        href="/use-cases"
                        className="text-slate-800 hover:text-green-500 transition duration-200 flex items-center text-sm"
                    >
                        Use-cases
                    </a>

                    <a
                        href="/help"
                        className="text-slate-800 hover:text-green-500 transition duration-200 flex items-center text-sm"
                    >
                        Need help?
                    </a>
                </div>

                {/* Login and Signup Buttons */}
                <div className={`lg:flex ${isMobileMenuOpen ? "flex" : "hidden"} flex-col lg:flex-row lg:space-x-4 items-center space-y-5 lg:space-y-0`}>
                    <button className="bg-slate-50 border border-slate-300 text-black hover:text-green-800 hover:bg-slate-200 transition duration-200 px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
                        Login
                    </button>
                    <button className="bg-green-500 text-white hover:bg-green-700 transition duration-200 px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
                        Signup
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
