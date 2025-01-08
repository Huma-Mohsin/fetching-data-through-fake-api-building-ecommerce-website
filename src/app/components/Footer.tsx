"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Back to Top */}
      <div
        className="bg-gray-700 text-center py-3 cursor-pointer font-extralight hover:bg-gray-600"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 py-8 text-sm">
        <div>
          <h3 className="font-bold mb-4 text-lg">Get to Know Us</h3>
          <ul>
            <li className="hover:underline cursor-pointer font-extralight">About Us</li>
            <li className="hover:underline cursor-pointer font-extralight">Careers</li>
            <li className="hover:underline cursor-pointer font-extralight">Press Releases</li>
            <li className="hover:underline cursor-pointer font-extralight">Amazon Science</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-lg">Make Money with Us</h3>
          <ul>
            <li className="hover:underline cursor-pointer font-extralight">Sell on Amazon</li>
            <li className="hover:underline cursor-pointer font-extralight">Sell Under Amazon Accelerator</li>
            <li className="hover:underline cursor-pointer font-extralight">Advertise Your Products</li>
            <li className="hover:underline cursor-pointer font-extralight">Amazon Pay</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-lg">Amazon Payment Products</h3>
          <ul>
            <li className="hover:underline cursor-pointer font-extralight">Amazon Business Card</li>
            <li className="hover:underline cursor-pointer font-extralight">Shop with Points</li>
            <li className="hover:underline cursor-pointer font-extralight">Reload Your Balance</li>
            <li className="hover:underline cursor-pointer font-extralight">Amazon Currency Converter</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-lg">Let Us Help You</h3>
          <ul>
            <li className="hover:underline cursor-pointer font-extralight">COVID-19 and Amazon</li>
            <li className="hover:underline cursor-pointer font-extralight">Your Account</li>
            <li className="hover:underline cursor-pointer font-extralight">Returns Centre</li>
            <li className="hover:underline cursor-pointer font-extralight">Help</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-700 text-center py-4 text-xs">
        <p>
          &copy; 1996-2025, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
};

export default Footer;
