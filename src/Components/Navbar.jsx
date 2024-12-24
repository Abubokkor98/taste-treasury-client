import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";

export default function Navbar() {
  const { user, logoutUser, setUser } = useContext(AuthContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", isDarkMode);
  };

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        setUser(null);
        toast.error("User Logged out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <nav className="bg-white dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-teal-600 dark:text-teal-400"
        >
          Taste Treasury
        </NavLink>

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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 font-bold text-teal-600 dark:text-teal-400"
                : "block px-4 py-2 text-gray-800 dark:text-white hover:text-teal-600 dark:hover:text-teal-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/all-foods"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 font-bold text-blue-600 dark:text-blue-400"
                : "block px-4 py-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
            }
          >
            All Foods
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 font-bold text-yellow-600 dark:text-yellow-400"
                : "block px-4 py-2 text-gray-800 dark:text-white hover:text-yellow-600 dark:hover:text-yellow-400"
            }
          >
            Gallery
          </NavLink>
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
                    referrerPolicy="no-referrer"
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
                      <NavLink
                        to="/my-foods"
                        className={({ isActive }) =>
                          isActive
                            ? "block px-4 py-2 font-bold text-teal-600 dark:text-teal-400"
                            : "block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                        }
                      >
                        My Foods
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/add-food"
                        className={({ isActive }) =>
                          isActive
                            ? "block px-4 py-2 font-bold text-teal-600 dark:text-teal-400"
                            : "block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                        }
                      >
                        Add Food
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/my-orders"
                        className={({ isActive }) =>
                          isActive
                            ? "block px-4 py-2 font-bold text-teal-600 dark:text-teal-400"
                            : "block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                        }
                      >
                        My Orders
                      </NavLink>
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
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 font-bold text-blue-600 dark:text-blue-400"
                    : "block px-4 py-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 font-bold text-orange-600 dark:text-orange-400"
                    : "block px-4 py-2 text-gray-800 dark:text-white hover:text-orange-600 dark:hover:text-orange-400"
                }
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
