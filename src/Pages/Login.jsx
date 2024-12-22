import React, { useContext, useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import GoogleLogin from "../Components/GoogleLogin";

export default function Login() {
  const { loginUser, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
        toast.success("login successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
      <Helmet>
        <title>Login | PlayGear</title>
      </Helmet>
      <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Welcome Back!
        </h2>
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6 relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-11 text-gray-600 dark:text-gray-400"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="text-blue-600 font-medium hover:underline dark:text-blue-400"
          >
            Register here
          </Link>
        </p>

        {/* Google Login */}
        <div className="mt-8 flex justify-center">
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
}
