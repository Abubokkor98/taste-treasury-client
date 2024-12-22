import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

export default function FoodPurchase() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [buyingDate, setBuyingDate] = useState(new Date());
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

  const handlePurchase = async (e) => {
    e.preventDefault();
    const form = e.target;
    const orderQuantity = form.quantity.value;

    const order = {
      foodName: foodName,
      foodImage: foodImage,
      price: price,
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
      return toast.error(`You can't buy own food!`);
    // 2. quantity validation
    if (orderQuantity > quantity)
      return toast.error(`You can't purchase more than available quantity!`);

    try {
      // 1. make a post request
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-order`,
        order
      );
      // 2. Reset form
      // form.reset()
      // 3. Show toast and navigate
      toast.success("Bid Successful!!!");
      console.log(data);
      navigate("/my-orders");
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
          Purchase Food
        </h2>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
          {/* Food Image */}
          <div className="w-full md:w-1/3">
            <img
              src={foodImage}
              alt={foodName}
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>

          {/* Purchase Info Form */}
          <div className="w-full md:w-2/3">
            <form onSubmit={handlePurchase}>
              {/* Food Name */}
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300">
                  Food Name
                </label>
                <input
                  type="text"
                  defaultValue={foodName}
                  readOnly
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              {/* Price */}
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300">
                  Price
                </label>
                <input
                  type="text"
                  defaultValue={price}
                  readOnly
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              {/* Quantity */}
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  defaultValue="1"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              {/* Buying Date */}
              {/* <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300">
                  Buying Date
                </label>
                <input
                  type="text"
                  value={buyingDate.toLocaleString()}
                  readOnly
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div> */}

              {/* Purchase Button */}
              <button
                type="submit"
                className="w-full py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                Purchase
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
