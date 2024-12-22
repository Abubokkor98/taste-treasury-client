import React from 'react'

export default function AllFoodsCard({ food }) {
  const { foodName, foodCategory, price, foodOrigin, quantity, foodImage } = food;

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

      {/* Purchase Button */}
      <button
        disabled={quantity === 0}
        className={`w-full py-2 mt-4 rounded-md ${
          quantity > 0
            ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400'
            : 'bg-gray-400 text-gray-700 cursor-not-allowed'
        }`}
      >
        {quantity > 0 ? 'Buy Now' : 'Out of Stock'}
      </button>

      {/* Details Button */}
      <a
        href="#"
        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mt-4 inline-flex items-center"
      >
        <svg
          className="mr-2 w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h4l-5 5-5-5h4V4a2 2 0 012 2v6l2 2-2 2V6a2 2 0 00-2-2z"
          />
        </svg>
        Details
      </a>
    </div>
  );
}
