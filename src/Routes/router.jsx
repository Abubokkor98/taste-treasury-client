import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../Pages/AddFood";
import MyFoods from "../Pages/MyFoods";
import AllFoods from "../Pages/AllFoods";

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
        element: <h2>single food page</h2>,
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
