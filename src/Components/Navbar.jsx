import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const { user, logoutUser } = useContext(AuthContext);

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", isDarkMode);
  };

  const handleLogout = () => logoutUser();

  return (
    <nav className="bg-white dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 dark:text-white"
        >
          Taste Treasury
        </Link>

        {/* Hamburger Icon for Mobile/Tablet */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-800 dark:text-white text-2xl"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex md:items-center absolute md:static top-16 left-0 w-full bg-white dark:bg-gray-800 md:w-auto md:bg-transparent`}
        >
          <Link
            to="/"
            className="block px-4 py-2 text-gray-800 dark:text-white hover:underline"
          >
            Home
          </Link>
          <Link
            to="/all-foods"
            className="block px-4 py-2 text-gray-800 dark:text-white hover:underline"
          >
            All Foods
          </Link>
          <Link
            to="/gallery"
            className="block px-4 py-2 text-gray-800 dark:text-white hover:underline"
          >
            Gallery
          </Link>
          <button
            onClick={toggleTheme}
            className="block px-4 py-2 text-gray-800 dark:text-white"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>

          {/* User Profile/Menu */}
          {user ? (
            <div
              className="relative block px-4 py-2 md:inline"
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2"
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <FaUserCircle className="text-gray-800 dark:text-white text-2xl" />
                )}
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow-md rounded-lg z-10">
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/my-foods"
                        className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        My Foods
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/add-food"
                        className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        Add Food
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/my-orders"
                        className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        My Orders
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="block px-4 py-2 text-gray-800 dark:text-white hover:underline"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-4 py-2 text-gray-800 dark:text-white hover:underline"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
