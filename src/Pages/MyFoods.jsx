import { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import MyFoodTableRow from "../Components/MyFoodTableRow";
import useAxiosSecure from "../customHooks/useAxiosSecure";

export default function MyFoods() {
  const AxiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetchAllFoods();
  }, [user]);
  const fetchAllFoods = async () => {
    const { data } = await AxiosSecure.get(
      `/foods/${user?.email}`,
      { withCredentials: true }
      //
    );
    setFoods(data);
  };
  console.log(foods);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 px-4 py-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-6">
        My Foods
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
          <thead>
            <tr className="bg-teal-600 text-white">
              <th className="py-3 px-4 text-left">Food Image</th>
              <th className="py-3 px-4 text-left">Food Name</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Quantity</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => (
              <MyFoodTableRow key={food._id} food={food} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
