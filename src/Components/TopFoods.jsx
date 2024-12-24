import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopFoodCard from "./TopFoodCard";

const TopFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const fetchAllFoods = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/top-foods`
      );
      setFoods(data);
    };
    fetchAllFoods();
  }, []);
  console.log(foods);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Top Foods
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((food) => (
          <TopFoodCard key={food._id} food={food}></TopFoodCard>
        ))}
      </div>
      {/* See All Button */}
      <div className="text-center mt-8">
        <Link to="/all-foods">
          <button className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-200">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopFoods;
