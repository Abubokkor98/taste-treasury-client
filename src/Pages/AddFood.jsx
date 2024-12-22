import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddFood() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const foodName = form.get("name");
    const foodImage = form.get("image");
    const foodCategory = form.get("category");
    const quantity = form.get("quantity");
    const price = form.get("price");
    const foodOrigin = form.get("origin");
    const description = form.get("description");

    const newFood = {
      foodName,
      foodImage,
      foodCategory,
      quantity,
      price,
      addedBy: {
        email: user?.email,
        name: user?.displayName,
      },
      foodOrigin,
      description,
      purchaseCount: 0,
    };
    try {
      // 1. make a post request
      await axios.post(`${import.meta.env.VITE_API_URL}/add-food`, newFood);
      // 2. Reset form
      e.target.reset();
      // 3. Show toast and navigate
      toast.success("Food Added Successfully!!!");
      navigate('/my-foods')
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 flex items-center justify-center py-6">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
          Add New Food Item
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Food Name */}
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300">
              Food Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter food name"
              required
            />
          </div>

          {/* Food Image */}
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300">
              Food Image
            </label>
            <input
              type="url"
              name="image"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter food image URL"
              required
            />
          </div>

          {/* Food Category */}
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300">
              Food Category
            </label>
            <select
              name="category"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            >
              <option value="">Select category</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="non-vegetarian">Non-Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="gluten-free">Gluten-Free</option>
              <option value="desserts">Desserts</option>
              <option value="snacks">Snacks</option>
              <option value="beverages">Beverages</option>
              <option value="breakfast">Breakfast</option>
            </select>
          </div>

          {/* Quantity & Price */}
          <div className="mb-6 grid grid-cols-2 gap-6">
            {/* Quantity */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Enter quantity"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300">
                Price
              </label>
              <input
                type="number"
                name="price"
                step="0.01"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Enter price"
                required
              />
            </div>
          </div>

          {/* Food Origin */}
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300">
              Food Origin (Country)
            </label>
            <input
              type="text"
              name="origin"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter food origin"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300">
              Description
            </label>
            <textarea
              name="description"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter description (ingredients, making procedure, etc.)"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Add Item Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}
