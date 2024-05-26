/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [categories, setCategories] = useState();
  const product = useLoaderData();
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const onSubmitHandler = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#18a13d",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/products/${product.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((resData) => {
            console.log(resData);
            reset();
          });
      }
    });
  };
  return (
    <>
      <div
        className="my-auto h-full flex justify-center items-center"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="space-y-4">
          <h1 className="text-4xl text-center font-semibold">
            Edit {product.name}
          </h1>
          <form className="card-body h-fit w-full md:w-[768px] border rounded-lg shadow-lg">
            <div className="form-control">
              <label className="label">
                <span className="label-text">ID</span>
              </label>
              <input
                type="text"
                placeholder="id"
                className="input input-bordered"
                value={product.id}
                required
                {...register("id")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
                {...register("name", { value: product.name })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                className="input input-bordered"
                required
                {...register("description", { value: product.description })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                className="input input-bordered"
                required
                {...register("price", {
                  valueAsNumber: true,
                  value: product.price,
                })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                className="select select-bordered w-full max-w-full"
                {...register("category")}
              >
                {categories?.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                placeholder="Product image"
                className="input input-bordered"
                required
                {...register("image", { value: product.image })}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Edit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
