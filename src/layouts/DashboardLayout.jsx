import { Link, Outlet } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import useAuthContext from "../hooks/useAuthContext";
import Loader from "../shared/Loader/Loader";

const DashboardLayout = () => {
  const { userLogOut, loading } = useAuthContext();
  return (
    <div className="drawer lg:drawer-open">
      <input id="SidePanel" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="SidePanel"
          className="absolute left-0 btn btn-ghost drawer-button lg:hidden"
        >
          <AiOutlineMenuUnfold className="w-8 h-8" />
        </label>
        <div className="w-full min-h-screen">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="SidePanel"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="p-4 w-80 min-h-full bg-base-200 text-base-content">
          <ul className="menu">
            {/* Sidebar content here */}
            <li>
              <Link to={"/dashboard"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>Profile</Link>
            </li>
            <li>
              <Link to={"addproduct"}>Add Product</Link>
            </li>
          </ul>
          <div className="flex gap-2 items-center absolute bottom-4">
            <Link to={"/"} className="btn btn-ghost">
              Homepage
            </Link>
            <button className="btn btn-ghost" onClick={userLogOut}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
