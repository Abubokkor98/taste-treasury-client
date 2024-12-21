import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">Register</h2>

        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 dark:text-white">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-white">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="photoURL" className="block text-gray-700 dark:text-white">Profile Picture URL</label>
            <input
              type="url"
              id="photoURL"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your profile picture URL"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 dark:text-white">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 dark:text-white">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600 dark:text-white">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
