import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../customHooks/useAxiosSecure";

export default function FoodPurchase() {
  const { user } = useContext(AuthContext);
  const AxiosSecure = useAxiosSecure();

  const navigate = useNavigate();
  const [buyingDate, setBuyingDate] = useState(new Date().toLocaleString());
  const [orderQuantity, setOrderQuantity] = useState(1);
  const {
    foodName,
    foodImage,
    price,
    foodOrigin,
    quantity,
    foodCategory,
    description,
    purchaseCount,
    _id,
    addedBy,
  } = useLoaderData();

  const totalPrice = price * orderQuantity;

  const handlePurchase = async (e) => {
    e.preventDefault();
    const form = e.target;
    const orderQuantity = parseInt(form.quantity.value);

    const order = {
      foodName: foodName,
      foodImage: foodImage,
      totalPrice: totalPrice,
      orderQuantity,
      foodOwner: addedBy?.email,
      foodId: _id,
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      buyingTime: buyingDate,
    };
    console.log(order);

    // 1. Check order permissions validation
    if (user?.email === addedBy?.email)
      return toast.error(`You can't buy your own food!`);
    // 2. quantity validation
    if (orderQuantity > quantity)
      return toast.error(
        `You can't purchase more than the available quantity!`
      );

    try {
      // 1. make a post request
      const { data } = await AxiosSecure.post(`/add-order`, order);
      // 2. Reset form
      // form.reset()
      // 3. Show toast and navigate
      toast.success("Order Successful!!!");
      console.log(data);
      navigate("/my-orders");
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <Helmet>
        <title>Buy {foodName} | Taste Treasury</title>
      </Helmet>
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Food Card Section */}
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-1/2 relative">
            <img
              src={foodImage}
              alt={foodName}
              className="w-full h-64 md:h-full object-cover"
            />
            <span className="absolute top-4 left-4 bg-teal-600 text-white text-sm px-3 py-1 rounded-lg shadow">
              {foodCategory}
            </span>
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-between p-6 space-y-6">
            {/* Food Info */}
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{foodName}</h1>
              <p className="text-sm text-gray-500 mt-2">
                <strong>Origin:</strong> {foodOrigin}
              </p>
              <p className="text-gray-600 mt-4">{description}</p>
            </div>

            {/* Price and Quantity */}
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-teal-600">${price}</p>
              <p className="text-sm text-gray-500">
                <strong>Available:</strong> {quantity}
              </p>
            </div>
          </div>
        </div>

        {/* Purchase Section */}
        <div className="p-6 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Complete Your Purchase
          </h3>
          <form
            onSubmit={handlePurchase}
            className="mt-6 flex flex-wrap items-center gap-4"
          >
            {/* Quantity Selector */}
            <div className="flex items-center">
              <label htmlFor="quantity" className="mr-4 text-sm text-gray-600">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={orderQuantity}
                onChange={(e) => setOrderQuantity(parseInt(e.target.value))}
                className="w-20 px-4 py-2 border border-gray-300 rounded-md text-center focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            {/* Total Price */}
            <p className="text-lg font-medium text-gray-700">
              Total: <span className="text-teal-600">${totalPrice}</span>
            </p>

            {/* Purchase Button */}
            <button
              type="submit"
              className="ml-auto bg-teal-600 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
            >
              Purchase Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
