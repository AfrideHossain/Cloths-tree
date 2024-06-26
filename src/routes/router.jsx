import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import DashboardLayout from "../layouts/DashboardLayout";
import SecretRoutes from "./SecretRoutes/SecretRoutes";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import AllProducts from "../pages/Dashboard/AllProducts/AllProducts";
import EditProduct from "../pages/Dashboard/EditProduct/EditProduct";
import Profile from "../pages/Profile/Profile";
import ProductDetails from "../pages/Dashboard/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
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
        element: <AllProducts />,
      },
      {
        path: "addproduct",
        element: <AddProduct />,
      },
      {
        path: "editproduct/:id",
        element: <EditProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
      },
    ],
  },
]);

export default router;
