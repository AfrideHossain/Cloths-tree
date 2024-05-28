import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-96 h-full">
          <img
            src={product?.image}
            className="w-full h-full object-cover"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product?.name}</h2>
          <p>{product?.description}</p>
          <div>
            <p>
              <span className="font-semibold">Category : </span>{" "}
              {product?.category || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Price : </span> ${product?.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
