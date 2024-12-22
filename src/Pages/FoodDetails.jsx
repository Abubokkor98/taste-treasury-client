import React from "react";
import toast from "react-hot-toast";
import { Link, NavLink, useLoaderData, useNavigate } from "react-router-dom";

export default function FoodDetails() {
  const {
    foodName,
    foodCategory,
    price,
    foodOrigin,
    quantity,
    foodImage,
    description,
    purchaseCount,
    _id,
  } = useLoaderData();

  const navigate = useNavigate();
  return (
   
    <div className="max-w-3xl mx-auto px-4 py-8 dark:text-white">
      <h2 className="text-3xl font-semibold text-center mb-6">Food Details</h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row relative dark:bg-gray-800 dark:border dark:border-gray-700">
        {/* Food Image */}
        <img
          src={foodImage}
          alt={foodName}
          className="lg:max-w-sm lg:max-h-full object-cover w-full h-64 sm:h-80 lg:h-auto"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{foodName}</h3>
          <p className="text-gray-600 mb-4 dark:text-gray-300">{description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-500">Category</p>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {foodCategory}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">Price</p>
              <p className="text-base text-gray-700 dark:text-gray-300">
                ${price}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">Origin</p>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {foodOrigin}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">Quantity</p>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {quantity}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">
                Purchase Count
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {purchaseCount}
              </p>
            </div>
          </div>
          <div className="mt-6">
            {/* Purchase Button */}
            <Link to={`/purchase-food/${_id}`}>
              <button
                disabled={quantity === 0}
                className={`w-full py-2 mt-4 rounded-md ${
                  quantity > 0
                    ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
                    : "bg-gray-400 text-gray-700 cursor-not-allowed"
                }`}
              >
                {quantity > 0 ? "Purchase" : "Out of Stock"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
