
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center p-4 bg-transparent text-white z-10">
      <div className="flex flex-col">
        <h1 className="text-3xl">Electronics, Fashion, Home Goods</h1>
        <h4 className="text-sm text-center">Vibrant Marketplace</h4>
      </div>
      <ul className="flex space-x-4">
        <li className="text-[#BBA27B]">Shop now</li>
        <li>Deals</li>
        <li>Categories</li>
        <li>About Us</li>
        <li>Contact</li>
        <li className="bg-[#BBA27B] text-gray-900 rounded px-4 py-2">Get Started</li>
      </ul>
    </nav>
  );
};

export default Navbar;
