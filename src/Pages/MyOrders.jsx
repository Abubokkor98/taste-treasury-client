import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import MyOrdersTableRow from "../Components/MyOrdersTableRow";

export default function MyOrders() {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetchAllOrders();
  }, [user]);
  const fetchAllOrders = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/orders/${user?.email}`
    );
    setOrders(data);
  };
  console.log(orders);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 px-4 py-8">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
        My Orders {orders.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-700 rounded-lg shadow-md border border-gray-300 dark:border-gray-600">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left text-gray-700 dark:text-gray-200 border-b">
                Food Image
              </th>
              <th className="py-2 px-4 text-left text-gray-700 dark:text-gray-200 border-b">
                Food Name
              </th>
              <th className="py-2 px-4 text-left text-gray-700 dark:text-gray-200 border-b">
                Price
              </th>
              <th className="py-2 px-4 text-left text-gray-700 dark:text-gray-200 border-b">
                Food Owner
              </th>
              <th className="py-2 px-4 text-left text-gray-700 dark:text-gray-200 border-b">
                Buying Date
              </th>
              <th className="py-2 px-4 text-left text-gray-700 dark:text-gray-200 border-b">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {
                orders.map(order=> <MyOrdersTableRow key={order._id} order={order} fetchAllOrders={fetchAllOrders}></MyOrdersTableRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
