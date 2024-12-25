import React from 'react';
import { Link } from "react-router-dom";

export default function TopFoodCard({ food }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out">
      {/* Food Image */}
      <div className="relative">
        <img
          src={food.foodImage}
          alt={food.foodName}
          className="w-full h-56 object-cover rounded-t-lg"
        />
      </div>

      {/* Food Details with Background Color */}
      <div className="p-6 space-y-4 bg-teal-50 dark:bg-gray-900 rounded-b-lg">
        {/* Food Name */}
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 text-center">{food.foodName}</h3>

        {/* Purchase Count */}
        <div className="text-center">
          <p className="text-sm text-teal-600 dark:text-teal-400 font-medium">Purchases: {food.purchaseCount}</p>
        </div>

        {/* Details Button */}
        <div className="text-center">
          <Link to={`/food/${food._id}`}>
            <button className="py-2 px-6 bg-teal-500 dark:bg-teal-600 text-white rounded-lg text-lg font-semibold hover:bg-teal-600 dark:hover:bg-teal-700 transition duration-200 ease-in-out">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
