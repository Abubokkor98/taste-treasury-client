import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

export default function MyOrdersTableRow({ order, fetchAllOrders }) {
  const {
    buyerEmail,
    buyerName,
    buyingTime,
    foodId,
    foodImage,
    foodName,
    foodOwner,
    orderQuantity,
    price,
    _id,
  } = order || {};

  // delete functionality
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/order/${id}`
      );
      console.log(data);
      toast.success("Order Deleted Successfully!!!");
      fetchAllOrders();
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <tr className="border-b">
      <td className="py-4 px-4">
        <img
          src={foodImage}
          alt={foodName}
          className="w-16 h-16 object-cover rounded-md"
        />
      </td>
      <td className="py-4 px-4 text-gray-800 dark:text-white">{foodName}</td>
      <td className="py-4 px-4 text-gray-800 dark:text-white">${price}</td>
      <td className="py-4 px-4 text-gray-800 dark:text-white">{foodOwner}</td>
      <td className="py-4 px-4 text-gray-800 dark:text-white">
        {buyingTime.toLocaleString()}
      </td>
      <td className="py-4 px-4">
        <button
          onClick={() => handleDelete(_id)}
          className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
