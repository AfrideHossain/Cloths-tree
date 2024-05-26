import { Link } from "react-router-dom";
import VerticalCard from "../../../shared/Vertical/VerticalCard";

const HomeShop = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl my-6 text-center font-semibold border-b-2 border-purple-600 px-5 py-2">
          Our Shop
        </h1>
      </div>
      <div className="w-full grid md:grid-cols-4 justify-center items-center gap-4 p-4">
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
      </div>
      <div className="my-5 flex gap-6 justify-center items-center">
        <Link to={"/shop"} className="btn btn-accent w-40">
          Shop
        </Link>
      </div>
    </>
  );
};

export default HomeShop;
