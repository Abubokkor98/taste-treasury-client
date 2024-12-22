import React from 'react'
import { Link } from 'react-router-dom';

export default function AllFoodsCard({ food }) {
  const { foodName, foodCategory, price, foodOrigin, quantity, foodImage, _id } = food;

  return (
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <img
        src={foodImage || "https://via.placeholder.com/150"}
        alt={foodName}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <h3 className="dark:text-white mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {foodName}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">Category: {foodCategory}</p>
      <p className="text-gray-600 dark:text-gray-300">Price: ${price}</p>
      <p className="text-gray-600 dark:text-gray-300">Origin: {foodOrigin}</p>
      <p className="text-gray-600 dark:text-gray-300">Quantity: {quantity}</p>


      {/* Details Button */}
     <Link to={`/food/${_id}`} className='text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mt-4 inline-flex items-center'>Details</Link>
    </div>
  );
}
