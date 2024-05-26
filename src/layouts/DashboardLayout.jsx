import { Link, Outlet } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const DashboardLayout = () => {
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
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>Profile</Link>
          </li>
          <li>
            <Link to={"addproduct"}>Add Product</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
