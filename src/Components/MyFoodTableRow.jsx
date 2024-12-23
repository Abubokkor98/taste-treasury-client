import React from "react";
import { Link } from "react-router-dom";

export default function MyFoodTableRow({ food }) {
  const { foodName, price, quantity, foodImage, _id } = food || {};
  return (
    <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
        <img
          src={foodImage}
          alt={foodName}
          className="w-16 h-16 object-cover rounded"
        />
      </td>
      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-white">
        {foodName}
      </td>
      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-white">
        ${price}
      </td>
      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-800 dark:text-white">
        {quantity}
      </td>
      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
        <Link to={`/update-food/${_id}`}>
          <button className="text-blue-600 hover:underline dark:text-blue-400">
            Update
          </button>
        </Link>
      </td>
    </tr>
  );
}
