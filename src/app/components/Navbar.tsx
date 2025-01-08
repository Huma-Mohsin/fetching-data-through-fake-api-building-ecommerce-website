"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            className="h-8 w-auto"
            width={500}
            height={500}
          />
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4 max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full px-4 py-2 border rounded-lg outline-none"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <div>
            <Link href="/signin">
              <p className="text-xs">Hello, Sign in</p>
              <p className="font-bold">Account & Lists</p>
            </Link>
          </div>
          <div>
            <Link href="/returnsorderspolicies">
              <p className="text-xs">Returns</p>
              <p className="font-bold">& Orders</p>
            </Link>
          </div>
          <div>
            <Link href="/cart">
              <p className="text-xs">Cart</p>
              <p className="font-bold">
                <BsCart4 className="h-7 w-7" />
              </p>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg
            className="h-6 w-6 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </div>
      </div>

      {/* Bottom Navbar for Large Screens */}
      <nav className="bg-gray-700 text-sm hidden md:block">
        <div className="container mx-auto px-4 py-2 flex space-x-4 overflow-x-auto">
          <Link href="#" className="hover:underline">
            All
          </Link>
          <Link href="#" className="hover:underline">
            Best Sellers
          </Link>
          <Link href="#" className="hover:underline">
            New Releases
          </Link>
          <Link href="#" className="hover:underline">
            Customer Service
          </Link>
          <Link href="#" className="hover:underline">
            Prime
          </Link>
          <Link href="#" className="hover:underline">
            Today&apos;s Deals
          </Link>
        </div>
      </nav>

      {/* Mobile Menu for Small Screens */}
      {isMobileMenuOpen && (
        <nav className="bg-gray-700 text-sm md:hidden">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-4">
            <Link href="#" className="hover:underline">
              All
            </Link>
            <Link href="#" className="hover:underline">
              Best Sellers
            </Link>
            <Link href="#" className="hover:underline">
              New Releases
            </Link>
            <Link href="#" className="hover:underline">
              Customer Service
            </Link>
            <Link href="#" className="hover:underline">
              Prime
            </Link>
            <Link href="#" className="hover:underline">
              Today&apos;s Deals
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
