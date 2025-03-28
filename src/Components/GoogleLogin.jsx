import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

export default function GoogleLogin() {
  const { googleSignIn, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
        toast.success("User login successfully.");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="w-full">
      <button
        onClick={handleGoogle}
        className="w-full py-3 flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow hover:shadow-lg hover:border-gray-400 transition duration-200 text-gray-800 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-500"
      >
        <FcGoogle className="w-6 h-6 mr-2" />
        <span className="text-sm font-medium">Sign in with Google</span>
      </button>
    </div>
  );
}
