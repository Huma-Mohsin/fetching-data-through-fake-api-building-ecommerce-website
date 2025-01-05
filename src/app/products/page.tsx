"use client";

import React, { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

// Type for product items
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Helper Function: Render Stars
const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <>
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
      {halfStar === 1 && <FaStarHalfAlt className="text-yellow-500" />}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <FaRegStar key={i} className="text-gray-300" />
        ))}
    </>
  );
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleRemoveFromCart = (index: number) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  if (loading) {
    return (
      <div className="text-center font-semibold text-red-500 py-10">
        Wait, Loading products...
      </div>
    );
  }

  return (
    <div className="flex">
      {/* Product List */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 p-8 bg-pink-50 flex-grow">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/products/${product.id}`} passHref>
              <div className="relative w-full h-52 bg-gray-200 rounded-t-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <Image
                  className="object-contain w-full h-full"
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={300}
                  priority
                />
              </div>
            </Link>
            <div className="flex flex-col p-4">
              <h5 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
                {product.title}
              </h5>
              <div className="flex items-center mb-2">
                {/* Star Ratings */}
                {renderStars(product.rating.rate)}
              </div>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-lg font-bold text-gray-800">
                  ${product.price.toFixed(2)}
                </span>
                <button
                  className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div className="sticky top-0 w-full max-w-sm h-[600px] bg-pink-50 shadow-lg p-4 md:w-1/4">
        {/* Cart Header */}
        <div className="flex justify-between items-center p-4 border-b bg-gray-600 rounded-md">
          <h2 className="text-sm font-semibold text-white">Shopping Cart</h2>
        </div>

        {/* Cart Items */}
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
                      className="rounded shadow-sm "
                    />
                    <div className="ml-2">
                      <p className="text-sm font-medium text-gray-800">
                        {item.title}
                      </p>
                      <div className="flex items-center justify-between text-green-600">
                        <p className="text-sm">${item.price.toFixed(2)}</p>
                        <button
                          className="text-orange-600 hover:text-red-700 text-xl ml-2"
                          onClick={() => handleRemoveFromCart(index)}
                        >
                          🗑
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <div className="p-2 bg-pink-50 border-t">
            <div className="flex justify-between text-gray-900 mb-2">
              <span>Total Items:</span>
              <span>{cartItems.length}</span>
            </div>
            <div className="flex justify-between bg-gray-200 text-gray-900 mb-2 rounded-lg hover:bg-gray-400">
              <span>Total Price:</span>
              <span>
                ${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <button
                className="bg-blue-500 text-white text-sm py-0 rounded-lg hover:bg-blue-600 transition"
                onClick={() => alert("Proceeding to checkout!")}
              >
                Proceed to Checkout
              </button>
              <button
                className="bg-gray-200 text-gray-900 text-sm py-0 rounded-lg hover:bg-gray-400 transition"
                onClick={() => alert("Continuing shopping!")}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
