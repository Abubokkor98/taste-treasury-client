import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";

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
        element: <h2>All Foods</h2>,
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
            <h2>my-foods</h2>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <h2>add-food</h2>
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
