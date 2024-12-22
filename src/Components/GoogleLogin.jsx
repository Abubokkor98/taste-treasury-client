import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

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
    <div className="">
      <button
        onClick={handleGoogle}
        className="w-full py-2 flex items-center justify-center border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google Icon"
          className="w-5 h-5 mr-2"
        />
        Continue with Google
      </button>
    </div>
  );
}
