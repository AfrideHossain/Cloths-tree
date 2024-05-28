import { SlEye } from "react-icons/sl";
import { Link } from "react-router-dom";

const VerticalCard = ({ product }) => {
  const { id, name, description, price, image } = product;
  return (
    <>
      <div className="card card-normal w-96 h-auto bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Product image"
            className="w-full h-56 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>
            Price: $<span className="text-purple-600">{price}</span>
          </p>
          <div className="card-actions justify-end">
            <Link className="btn btn-primary" to={`/product/${id}`}>
              <SlEye className="w-5 h-5" />
              View
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalCard;
