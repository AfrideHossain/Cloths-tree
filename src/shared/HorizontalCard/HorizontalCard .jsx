/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { SlEye } from "react-icons/sl";

const HorizontalCard = ({ product }) => {
  const { id, name, price, image } = product;
  return (
    <>
      <div className="card lg:card-side bg-slate-600 bg-opacity-30 shadow-xl">
        <figure className="w-96 h-64">
          <img
            src={image}
            alt="Product image"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            Price: $<span className="text-purple-600">{price}</span>
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
