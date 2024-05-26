import { Link } from "react-router-dom";
import { SlEye } from "react-icons/sl";

const HorizontalCard = () => {
  return (
    <>
      <div className="card lg:card-side bg-slate-600 bg-opacity-30 shadow-xl">
        <figure className="w-96 h-64">
          <img
            src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Product image"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Men White T-Shirt</h2>
          <p>
            Price: $<span className="text-purple-600">80</span>
          </p>
          <div className="card-actions justify-end">
            <Link className="btn btn-primary">
              <SlEye className="w-5 h-5" />
              View 
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalCard;
