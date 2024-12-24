import React from "react";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

export default function AllFoodsCard({ food }) {
  const {
    foodName,
    foodCategory,
    price,
    foodOrigin,
    quantity,
    foodImage,
    _id,
  } = food;
  // to={`/food/${_id}
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 border border-gray-200">
      {/* Food Image */}
      <div className="relative">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-teal-500 text-white text-sm font-bold py-1 px-3 rounded-lg shadow-md">
          ${price}
        </div>
      </div>

      {/* Food Details */}
      <div className="p-4 space-y-3 bg-gradient-to-br from-gray-100 via-white to-gray-50">
        {/* Food Name */}
        <h3 className="text-lg font-semibold text-gray-800">{foodName}</h3>
        {/* Food Category */}
        <p className="text-sm text-teal-600 font-medium">{foodCategory}</p>
        {/* Food Origin */}
        <div className="flex items-center text-sm text-gray-600">
          <MdLocationOn className="text-teal-600 mr-2 text-base" />
          <span>Origin: {foodOrigin}</span>
        </div>

        {/* Details Button */}
        <Link to={`/food/${_id}`}>
          <button className="w-full bg-teal-500 text-white py-2 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-200 mt-3">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
