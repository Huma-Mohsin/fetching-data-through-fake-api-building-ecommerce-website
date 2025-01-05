import Link from 'next/link';
import React from 'react';

const ReturnsPolicies = () => {
  return (
    <div className="relative p-6 bg-pink-50">
      <h2 className="text-2xl font-bold mb-6">Returns & Policies</h2>

      <div className="border-b border-gray-300 mb-6 pb-6">
        <h3 className="text-lg font-semibold">Return Policy</h3>
        <p className="text-gray-700">
          We want you to be fully satisfied with every item you purchase. If you&apos;s re not completely satisfied, you can return most items in their original condition within 30 days of delivery for a full refund.
        </p>
        <p>
          <Link href="/policies/return-policy" className="text-blue-600 hover:underline">
            Learn more about our Return Policy.
          </Link>
        </p>
      </div>

      <div className="border-b border-gray-300 mb-6 pb-6">
        <h3 className="text-lg font-semibold">Refund Policy</h3>
        <p className="text-gray-700">
          If you are dissatisfied with your purchase, we&apos;ll make it right by offering a refund or exchange.
        </p>
        <p>
          <Link href="/policies/refund-policy" className="text-blue-600 hover:underline">
            Learn more about our Refund Policy.
          </Link>
        </p>
      </div>

      <div className="border-b border-gray-300 mb-6 pb-6">
        <h3 className="text-lg font-semibold">Shipping Policy</h3>
        <p className="text-gray-700">
          We offer free shipping on orders over $25. Standard shipping typically takes 3-5 business days.
        </p>
        <p>
          <Link href="/policies/shipping-policy" className="text-blue-600 hover:underline">
            Learn more about our Shipping Policy.
          </Link>
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">FAQ</h3>
        <p className="text-gray-700">
          Have questions? Visit our
          <Link href="/help" className="text-blue-600 hover:underline">
            Help Center
          </Link>
          for more information.
        </p>
      </div>
    </div>
  );
};

export default ReturnsPolicies;