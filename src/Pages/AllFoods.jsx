import axios from "axios";
import React, { useEffect, useState } from "react";
import AllFoodsCard from "../Components/AllFoodsCard";
import titleBackground from "../assets/allFoodTitle.jpg";
import PageTitle from "../utilities/PageTitle";

export default function AllFoods() {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchAllFoods = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/foods?search=${search}`
      );
      setFoods(data);
    };
    fetchAllFoods();
  }, [search]);

  // console.log(foods);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 flex flex-col items-center p-6">
      <PageTitle title={"All Foods"} image={titleBackground}></PageTitle>

      {/* Search Bar */}
      <div className="mb-6 mt-10 w-full sm:w-96">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for food..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      {/* Food Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {foods.map((food) => (
          <AllFoodsCard key={food._id} food={food}></AllFoodsCard>
        ))}
      </div>
    </div>
  );
}
