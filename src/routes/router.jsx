import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import DashboardLayout from "../layouts/DashboardLayout";
import SecretRoutes from "./SecretRoutes/SecretRoutes";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        // path: "",
        element: <Login />,
      },
      {
        path: "register",
        element: <Registration />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <SecretRoutes>
        <DashboardLayout />
      </SecretRoutes>
    ),
    children: [
      {
        index: true,
        element: <h1>Dashboard</h1>,
      },
      {
        path: "addproduct",
        element: <AddProduct />,
      },
    ],
  },
]);

export default router;
