import { SlEye } from "react-icons/sl";
import { Link } from "react-router-dom";

const VerticalCard = () => {
  return (
    <>
      <div className="card card-normal w-96 h-auto bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Product image"
            className="w-full h-56 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Men White T-Shirt</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            culpa rerum nisi exercitationem minus doloribus quod maiores
            quisquam, praesentium distinctio.
          </p>
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

export default VerticalCard;
