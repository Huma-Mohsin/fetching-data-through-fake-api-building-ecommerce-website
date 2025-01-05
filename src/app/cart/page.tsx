"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import WinterPromotionCard from "../components/WinterPromotions";


interface CartItem {
  image: string;
  title: string;
  price: number;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    if (Array.isArray(storedCart)) {
      const validCart = storedCart.filter(
        (item): item is CartItem => typeof item.image === "string" &&
          typeof item.title === "string" &&
          typeof item.price === "number"
      );
      setCartItems(validCart);
    }
  }, []);

  const handleRemoveFromCart = (index: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((_, i) => i !== index);
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const handleCloseCart = () => {
    setCartItems([]);
  };

  const handleProceedToCheckout = () => {
    alert("Proceeding to checkout!");
  };

  return (
    <div className="bg-pink-50">
      <WinterPromotionCard />

      <div className="join m-2 ml-4 md:ml-96 mb-4">
        <p className="text-center text-red-600 font-semibold flex items-center mr-4">
          Join Us For News
        </p>

        <input className="input input-bordered join-item w-full sm:w-auto" placeholder="Email" />
        <button className="btn join-item rounded-r-full mb-4">Subscribe</button>
      </div>

      <div className="fixed top-16 right-0 w-full md:w-1/4 bg-pink-50 shadow-2xl z-50">
        <div className="flex justify-between items-center p-4 border-b bg-gray-600">
          <h2 className="text-xl font-bold text-center text-white">Shopping Cart</h2>
          <Link href="/" passHref>
            <button className="text-white hover:text-red-500 text-2xl">✖</button>
          </Link>
        </div>

        <div className="p-2 h-[calc(100%-120px)] overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center text-red-500 py-10">
              <p>Your cart is empty</p>
              <i className="fas fa-shopping-cart text-3xl"></i>
            </div>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center py-4 border-b"
                >
                  <div className="flex items-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={60}
                      height={60}
                      className="rounded shadow-sm"
                    />
                    <div className="ml-4">
                      <p className="text-md font-medium text-gray-700">{item.title}</p>
                      <p className="text-sm text-green-500">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <button
                    className="text-orange-500 text-bold hover:text-red-500 text-lg"
                    onClick={() => handleRemoveFromCart(index)}
                  >
                    🗑
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-2 bg-pink-50 border-t">
            <div className="flex justify-between text-gray-600 mb-4">
              <span>Total Items:</span>
              <span>{cartItems.length}</span>
            </div>
            <div className="flex justify-between bg-gray-600 text-white font-bold mb-4">
              <span>Total Price:</span>
              <span>
                ${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <button
                className="bg-blue-500 text-white text-sm py-2 rounded-lg hover:bg-blue-600 transition"
                onClick={handleProceedToCheckout}
              >
                Proceed to Checkout
              </button>
              <button
                className="bg-gray-300 text-gray-900 text-sm py-2 rounded-lg hover:bg-gray-400 transition"
                onClick={handleCloseCart}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
