import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

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

  const handlePurchase = () => {
    if (quantity > 0) {
      navigate(`/purchase-food/${_id}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <Helmet>
        <title>{foodName} | Taste Treasury</title>
      </Helmet>
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col lg:flex-row transition-all duration-300 ease-in-out">
        {/* Food Image */}
        <motion.div
          className="relative lg:w-1/2 group"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
            transition: { duration: 0.3 },
          }}
        >
          <img
            src={foodImage}
            alt={foodName}
            className="w-full h-full object-cover rounded-2xl transition-all duration-300"
          />
          <div className="absolute top-4 right-4 text-white font-bold text-xl bg-teal-500 px-4 py-2 rounded-full shadow-lg">
            ${price}
          </div>
        </motion.div>

        {/* Food Details */}
        <div className="lg:w-1/2 p-8 space-y-6 bg-white">
          {/* Food Name */}
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-wide transition-all duration-200 hover:text-teal-500">
            {foodName}
          </h2>
          {/* Description */}
          <p className="text-lg text-gray-700">{description}</p>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-8 mt-4">
            <div>
              <p className="text-sm font-medium text-teal-500">Category</p>
              <p className="text-xl font-semibold text-gray-800">
                {foodCategory}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-teal-500">Origin</p>
              <p className="text-xl font-semibold text-gray-800">
                {foodOrigin}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-teal-500">Quantity</p>
              <p className="text-xl font-semibold text-gray-800">{quantity}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-teal-500">
                Purchase Count
              </p>
              <p className="text-xl font-semibold text-gray-800">
                {purchaseCount}
              </p>
            </div>
          </div>

          {/* Purchase Button with hover animation */}
          <motion.div
            whileHover={{
              scale: 1.05,
              backgroundColor: "#2b6cb0",
              transition: { duration: 0.3 },
            }}
          >
            <button
              onClick={handlePurchase}
              disabled={quantity === 0}
              className={`w-full py-4 text-lg font-bold rounded-lg transition-all duration-300 ${
                quantity > 0
                  ? "bg-teal-600 text-white hover:bg-teal-700"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
            >
              {quantity > 0 ? "Purchase Now" : "Out of Stock"}
            </button>
          </motion.div>

          {quantity === 0 && (
            <p className="text-red-600 text-center mt-4">
              Sorry, this item is out of stock.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
