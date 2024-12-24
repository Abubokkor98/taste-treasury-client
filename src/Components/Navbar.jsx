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
    document.body.classList.toggle("dark", isDarkMode); // Toggle dark mode
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
    <nav className="bg-teal-600 dark:bg-teal-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-white"
        >
          Taste Treasury
        </NavLink>

        {/* Hamburger Icon for Mobile/Tablet */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white text-2xl"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex md:items-center absolute md:static top-16 left-0 w-full bg-teal-600 dark:bg-teal-800 md:w-auto md:bg-transparent`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 font-bold text-white bg-teal-700"
                : "block px-4 py-2 text-gray-200 hover:bg-teal-700"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/all-foods"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 font-bold text-white bg-teal-700"
                : "block px-4 py-2 text-gray-200 hover:bg-teal-700"
            }
          >
            All Foods
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 font-bold text-white bg-teal-700"
                : "block px-4 py-2 text-gray-200 hover:bg-teal-700"
            }
          >
            Gallery
          </NavLink>
          <button
            onClick={toggleTheme}
            className="block px-4 py-2 text-gray-200 hover:bg-teal-700"
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
                  <FaUserCircle className="text-white text-2xl" />
                )}
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-teal-600 dark:bg-teal-800 shadow-md rounded-lg z-10">
                  <ul className="py-2">
                    <li>
                      <NavLink
                        to="/my-foods"
                        className={({ isActive }) =>
                          isActive
                            ? "block px-4 py-2 font-bold text-white bg-teal-700"
                            : "block px-4 py-2 text-gray-200 hover:bg-teal-700"
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
                            ? "block px-4 py-2 font-bold text-white bg-teal-700"
                            : "block px-4 py-2 text-gray-200 hover:bg-teal-700"
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
                            ? "block px-4 py-2 font-bold text-white bg-teal-700"
                            : "block px-4 py-2 text-gray-200 hover:bg-teal-700"
                        }
                      >
                        My Orders
                      </NavLink>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-red-600 hover:bg-teal-700"
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
                    ? "block px-4 py-2 font-bold text-white bg-teal-700"
                    : "block px-4 py-2 text-gray-200 hover:bg-teal-700"
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 font-bold text-white bg-teal-700"
                    : "block px-4 py-2 text-gray-200 hover:bg-teal-700"
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
