import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../Pages/AddFood";
import MyFoods from "../Pages/MyFoods";
import AllFoods from "../Pages/AllFoods";
import FoodDetails from "../Pages/FoodDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-foods",
        element: <AllFoods></AllFoods>,
      },
      {
        path: "/gallery",
        element: <h2>gallery</h2>,
      },
      {
        path: "/food/:id",
        element: <FoodDetails></FoodDetails>,
        loader: async ({ params }) => {
          const res = await fetch(
            `${import.meta.env.VITE_API_URL}/foods`
          );
          const foods = await res.json();
          const food = foods.find((f) => f._id == params.id);
          return food;
        },
      },
      {
        path: "/my-foods",
        element: (
          <PrivateRoute>
            <MyFoods></MyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-food/:id",
        element: (
          <PrivateRoute>
            <h2>update-food</h2>
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(
        //     `https://assignment-10-server-ab.vercel.app/equipments/${params.id}`
        //   ),
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <h2>my-orders</h2>
          </PrivateRoute>
        ),
      },
      {
        path: "/purchase/:id",
        element: (
          <PrivateRoute>
            <h2>purchase/:id</h2>
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
