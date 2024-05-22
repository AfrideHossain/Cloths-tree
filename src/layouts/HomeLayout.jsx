import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomeLayout;
