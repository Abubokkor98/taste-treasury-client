import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

export default function UpdateFood() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    foodName,
    foodImage,
    foodCategory,
    quantity,
    price,
    foodOrigin,
    description,
    purchaseCount,
    _id,
  } = useLoaderData();

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const foodName = form.get("name");
    const foodImage = form.get("image");
    const foodCategory = form.get("category");
    const quantity = parseInt(form.get("quantity"));
    const price = form.get("price");
    const foodOrigin = form.get("origin");
    const description = form.get("description");

    const updatedFood = {
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
      purchaseCount: purchaseCount,
    };
    // console.log({ updatedFood });
    // send data to the server
    try {
      // 1. make a post request
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/food/${_id}`,
        updatedFood
      );
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("Food Update Successfully!!!");
        navigate("/my-foods");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 dark:text-white">
      <h2 className="text-3xl font-semibold text-center mb-6">Update Food</h2>
      <form
        onSubmit={handleUpdate}
        className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 dark:border dark:border-gray-700"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-gray-300">
              Food Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={foodName}
              required
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"
              placeholder="Enter food name"
            />
          </div>
          <div className="">
            <label className="block text-gray-700 dark:text-gray-300">
              Food Category
            </label>
            <select
              name="category"
              defaultValue={foodCategory}
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
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-gray-300">
              Price
            </label>
            <input
              type="number"
              name="price"
              defaultValue={price}
              required
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"
              placeholder="Enter price"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-gray-300">
              Origin
            </label>
            <input
              type="text"
              name="origin"
              defaultValue={foodOrigin}
              required
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"
              placeholder="Enter origin"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-gray-300">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              defaultValue={quantity}
              required
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"
              placeholder="Enter quantity"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-gray-300">
              Food Image URL
            </label>
            <input
              type="text"
              name="image"
              defaultValue={foodImage}
              required
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"
              placeholder="Enter image URL"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium mb-2 dark:text-gray-300">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={description}
            required
            rows="4"
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"
            placeholder="Enter description"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 mt-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          Update Food
        </button>
      </form>
    </div>
  );
}
