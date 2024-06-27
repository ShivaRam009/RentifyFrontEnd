import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="p-6 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link to="/" className="text-black text-2xl font-bold">Rentify</Link>
        </div>
        <div className="hidden md:flex justify-center flex-grow">
          <ul className="flex space-x-8 items-center text-lg">
            <li >
              <Link to="/services" className="text-black hover:text-gray-700">Services</Link>
            </li>
            <li>
              <Link to='/agents' className="text-black hover:text-gray-700">Agents</Link>
            </li>
            
            <li>
              <Link to="/properties" className="text-black hover:text-gray-700">Properties List</Link>
            </li>
            <li>
              <Link to="/contactus" className="text-black hover:text-gray-700">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 items-center text-lg mt-4">
            <li>
              <a href="#" className="text-black hover:text-gray-700">Services</a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-700">Agents</a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-700">About Us</a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-700">Properties List</a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-700">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
