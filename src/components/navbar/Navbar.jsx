import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="logo" className="h-[50px]" />
          </div>
          <div className="hidden font-bold sm:ml-6 sm:flex sm:space-x-8">
            <NavLink href="/">Home</NavLink>
            <ScrollLink to="form">Courses</ScrollLink>
            <ScrollLink to="form">Contact</ScrollLink>
            <ScrollLink to="form">About Me</ScrollLink>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          <MobileNavLink href="/">Home</MobileNavLink>
          <ScrollMobileLink to="form">Courses</ScrollMobileLink>
          <ScrollMobileLink to="form">Contact</ScrollMobileLink>
          <ScrollMobileLink to="form">About Me</ScrollMobileLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-green-500 hover:text-gray-700 transition duration-150 ease-in-out"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children }) {
  return (
    <a
      href={href}
      className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-green-500 transition duration-150 ease-in-out"
    >
      {children}
    </a>
  );
}

function ScrollLink({ to, children }) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-green-500 hover:text-gray-700 transition duration-150 ease-in-out cursor-pointer"
    >
      {children}
    </Link>
  );
}

function ScrollMobileLink({ to, children }) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-green-500 transition duration-150 ease-in-out cursor-pointer"
    >
      {children}
    </Link>
  );
}
