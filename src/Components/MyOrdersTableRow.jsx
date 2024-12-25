import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../customHooks/useAxiosSecure";
import { FiTrash2 } from "react-icons/fi";
import moment from "moment";

export default function MyOrdersTableRow({ order, fetchAllOrders }) {
  const AxiosSecure = useAxiosSecure();

  const {
    buyerEmail,
    buyerName,
    buyingTime,
    foodId,
    foodImage,
    foodName,
    foodOwner,
    orderQuantity,
    totalPrice,
    _id,
  } = order || {};
  console.log(totalPrice, orderQuantity);

  // delete functionality
  const handleDelete = async (id) => {
    try {
      const { data } = await AxiosSecure.delete(`/order/${id}`);
      console.log(data);
      toast.success("Order Deleted Successfully!!!");
      fetchAllOrders();
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const modernDelete = (id) => {
    toast((t) => (
      <div className="flex gap-3 items-center">
        <div>
          <p>
            Are you <b>sure?</b>
          </p>
        </div>
        <div className="gap-2 flex">
          <button
            className="bg-red-400 text-white px-3 py-1 rounded-md"
            onClick={() => {
              toast.dismiss(t.id);
              handleDelete(id);
            }}
          >
            Yes
          </button>
          <button
            className="bg-green-400 text-white px-3 py-1 rounded-md"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  return (
    <tr className="transition duration-300 ease-in-out transform hover:bg-teal-50">
      <td className=" py-4 px-6">
        <img
          src={foodImage}
          alt={foodName}
          className="w-16 h-16 object-cover rounded-lg shadow-md transition-transform transform hover:scale-110"
        />
      </td>
      <td className="py-4 px-6 text-gray-800 dark:text-white text-lg font-medium">
        {foodName}
      </td>
      <td className="py-4 px-6 text-teal-600 dark:text-teal-400 text-lg font-semibold">
        ${totalPrice}
      </td>
      <td className="py-4 px-6 text-gray-800 dark:text-white text-lg font-medium">
        {orderQuantity}
      </td>
      <td className="py-4 px-6 text-gray-600 dark:text-gray-400 text-lg font-medium">
        {foodOwner}
      </td>
      <td className="py-4 px-6 text-gray-500 dark:text-gray-300 text-lg">
        {moment(buyingTime).format('MMMM Do YYYY,h:mm A')}
      </td>
      <td className="py-4 px-6 text-center">
        <button
          onClick={() => modernDelete(_id)}
          className="bg-red-500 text-white rounded-lg px-4 py-2 font-medium text-sm transition-all hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          <FiTrash2 />
        </button>
      </td>
    </tr>
  );
}
