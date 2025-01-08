"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, title: "Sample Product", price: 29.99, image: "/placeholder.png" },
  ]);

  const handleRemoveFromCart = (index: number) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-lg text-gray-500">Your cart is empty.</p>
            <Link href="/" passHref>
              <a className="text-blue-600 hover:underline mt-4 inline-block">Continue Shopping</a>
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cartItems.map((item, index) => (
                <div key={item.id} className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row">
                  <div className="flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-grow ml-4">
                    <h3 className="text-md font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  <button
                    className="mt-4 md:mt-0 text-red-500 hover:text-red-600 text-lg"
                    onClick={() => handleRemoveFromCart(index)}
                  >
                    🗑
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow">
              <div className="flex flex-col sm:flex-row justify-between mb-4">
                <span className="text-gray-600">Total Items:</span>
                <span>{cartItems.length}</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between font-bold text-gray-800 mb-4">
                <span>Total Price:</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0">
                <button
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                  onClick={() => alert("Proceeding to checkout!")}
                >
                  Proceed to Checkout
                </button>
                <Link href="/" passHref>
                  <a className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 text-center transition">
                    Continue Shopping
                  </a>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
