// Header.js
import { Bars3Icon } from '@heroicons/react/24/solid';
import React, { useState, useContext } from 'react';
import { ScrollContext } from './ScrollContext';

export default function Header() {
  const { isScrollingUp } = useContext(ScrollContext);
  const [navbar, setNavbar] = useState(false);

  return (
    <div className={`fixed top-0 left-0 w-full p-2 text-center shadow-lg  z-8 ${isScrollingUp ? '' : 'hidden'}`}>
      <header className="flex justify-between items-center bg-gray-500 bg-opacity-80 z-10 p-4 text-white">
        {/* Logo */}
        <a href="/" className="text-xl font-bold">My Portfolio</a>

        {/* Desktop Navbar */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="/">Home</a></li>
            <li><a href="/">AboutMe</a></li>
            <li><a href="/">Skill</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">ContactMe</a></li>
            <li><a href="/">Footer</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button className="block md:hidden" onClick={() => setNavbar(!navbar)}>
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>
      </header>

      {/* Mobile Navbar */}
      {navbar && (
        <div className="block md:hidden bg-gray-700 text-white p-4">
          <ul className="space-y-2">
            <li><a href="/">Home</a></li>
            <li><a href="/">About Me</a></li>
            <li><a href="/">Skill</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Contact Me</a></li>
            <li><a href="/">Footer</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}
