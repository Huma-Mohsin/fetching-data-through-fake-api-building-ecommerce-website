import React from 'react';

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-pink-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center sm:text-left">Sign-In</h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email or Mobile Number
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email or mobile number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Sign In
          </button>

          <div className="text-right">
            <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">
              Forgot your password?
            </a>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm">New to Amazon?</p>
          <a
            href="/signup"
            className="text-blue-500 hover:underline text-sm font-semibold"
          >
            Create your Amazon account
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
