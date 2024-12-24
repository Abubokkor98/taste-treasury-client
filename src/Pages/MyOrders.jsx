import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import MyOrdersTableRow from "../Components/MyOrdersTableRow";
import useAxiosSecure from "../customHooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../Components/LoadingSpinner";

export default function MyOrders() {
  const AxiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchAllOrders();
  }, [user]);
  const fetchAllOrders = async () => {
    const { data } = await AxiosSecure.get(`/orders/${user?.email}`);
    setOrders(data);
    setLoading(false);
  };
  console.log(orders);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 px-4 py-8">
      <Helmet>
        <title>My Orders | Taste Treasury</title>
      </Helmet>

      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <>
          <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-6">
            My Orders ({orders.length})
          </h2>

          {orders.length > 0 ? (
            <div className="overflow-x-auto rounded-lg shadow-lg">
              <table className="min-w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                <thead>
                  <tr className="bg-teal-600 text-white">
                    <th className="py-3 px-4 text-left">Food Image</th>
                    <th className="py-3 px-4 text-left">Food Name</th>
                    <th className="py-3 px-4 text-left">Total Price</th>
                    <th className="py-3 px-4 text-left">Quantity</th>
                    <th className="py-3 px-4 text-left">Food Owner</th>
                    <th className="py-3 px-4 text-left">Buying Date</th>
                    <th className="py-3 px-4 text-left">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((order) => (
                    <MyOrdersTableRow
                      key={order._id}
                      order={order}
                      fetchAllOrders={fetchAllOrders}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <>
              <div className="text-center ">
                <h2 className="text-red-400 text-3xl font-bold">
                  You don't ordered any foods yet! Please order some food to see
                  your order here!!
                </h2>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
