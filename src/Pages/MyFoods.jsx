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
    const { data } = await AxiosSecure.get(`/foods/${user?.email}`,{ withCredentials: true }
      // 
    );
    setFoods(data);
  };
  console.log(foods);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 px-4 py-8">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
          My Foods
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Image
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Name
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Price
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Quantity
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {foods.map((food) => (
                <MyFoodTableRow key={food._id} food={food}></MyFoodTableRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
