import React from 'react'

export default function MyFoodTableRow({food}) {
    const {foodName, price, quantity, foodImage} = food || {}
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
              <button
                onClick={() => console.log("Redirect to update page")}
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Update
              </button>
            </td>
          </tr>
  )
}
