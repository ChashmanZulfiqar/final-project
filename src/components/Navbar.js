import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#99CA3C] text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <Link to="/" className="hover:scale-105 transition-transform duration-300">
            <img 
              src="/images/main logo.png" // Replace with actual image path
              alt="Logo" 
              className="h-10"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {/* Home Link */}
          <Link
            to="/" // Home route
            className="text-xl font-semibold hover:text-[#003366] hover:scale-110 transition-transform duration-300"
          >
            Home
          </Link>
          
          {/* Dashboard Link */}
          <Link
            to="/dashboard" // Dashboard route
            className="text-xl font-semibold hover:text-[#003366] hover:scale-110 transition-transform duration-300"
          >
            Notes
          </Link>

          {/* Contact Us Link */}
          <Link
            to="/contact" // Contact route
            className="text-xl font-semibold hover:text-[#003366] hover:scale-110 transition-transform duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Register & Login Buttons */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/register" // Register page
            className="border-2 border-[#99CA3C] bg-white text-[#99CA3C] px-6 py-3 rounded-full shadow-md hover:bg-[#99CA3C] hover:text-white hover:scale-105 transition-all duration-300 text-lg"
          >
            Register
          </Link>
          <Link
            to="/login" // Login page
            className="border-2 border-[#99CA3C] bg-white text-[#99CA3C] px-6 py-3 rounded-full shadow-md hover:bg-[#99CA3C] hover:text-white hover:scale-105 transition-all duration-300 text-lg"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
