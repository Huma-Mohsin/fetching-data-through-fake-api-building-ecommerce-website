// components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full px-4 py-2 border rounded-lg outline-none"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <div>
            <p className="text-xs">Hello, Sign in</p>
            <p className="font-bold">Account & Lists</p>
          </div>
          <div>
            <p className="text-xs">Returns</p>
            <p className="font-bold">& Orders</p>
          </div>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h18M9 3v18m6-18v18"
              />
            </svg>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
              3
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="bg-gray-700 text-sm">
        <div className="container mx-auto px-4 py-2 flex space-x-4 overflow-x-auto">
          <a href="#" className="hover:underline">
            All
          </a>
          <a href="#" className="hover:underline">
            Best Sellers
          </a>
          <a href="#" className="hover:underline">
            New Releases
          </a>
          <a href="#" className="hover:underline">
            Customer Service
          </a>
          <a href="#" className="hover:underline">
            Prime
          </a>
          <a href="#" className="hover:underline">
            Today's Deals
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
