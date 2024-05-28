import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#18a13d",
      confirmButtonText: "Yes, Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((resData) => {
            setProducts(
              products.filter((product) => product.id !== resData.id)
            );
            toast.success("Product Deleted");
          });
      }
    });
  };

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-semibold text-center mb-10">Products</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {products?.map((product) => {
          return (
            <div
              key={product.id}
              className="card lg:card-side bg-base-100 shadow-xl"
            >
              <figure className="w-96 full">
                <img
                  className="w-full h-full object-cover"
                  src={product.image}
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <p className="font-semibold">{product.category}</p>
                <p className="font-semibold">
                  Price: ${" "}
                  <span className="font-medium text-orange-500">
                    {product.price}
                  </span>
                </p>

                <div className="card-actions justify-end">
                  <Link to={`/product/${product.id}`} className="btn btn-info">
                    View
                  </Link>
                  <Link
                    to={`editproduct/${product.id}`}
                    className="btn btn-primary"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-error"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
