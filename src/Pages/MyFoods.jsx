import { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

export default function MyFoods() {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetchAllFoods();
  }, [user]);
  const fetchAllFoods = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/foods/${user?.email}`
    );
    setFoods(data);
  };
  console.log(foods);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 flex flex-col items-center p-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
        My Foods
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {/* Food Card */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/150"
            alt="Food"
            className="w-full h-32 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Food Name
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Category: Vegetarian
          </p>
          <p className="text-gray-600 dark:text-gray-300">Price: $20</p>
          <p className="text-gray-600 dark:text-gray-300">Origin: Italy</p>

          <Link
            to="/update-food"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mt-4 inline-flex items-center"
          >
            <FaEdit className="mr-2" /> Update
          </Link>
        </div>
      </div>
    </div>
  );
}
