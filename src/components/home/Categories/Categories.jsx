import { useEffect, useState } from "react";

const Categories = () => {
  // const categories = [
  //   {
  //     id: 1,
  //     name: "Baby",
  //   },
  //   {
  //     id: 2,
  //     name: "Full sleave t-shirt",
  //   },
  //   {
  //     id: 3,
  //     name: "Half sleave t-shirt",
  //   },
  //   {
  //     id: 4,
  //     name: "Men jeans",
  //   },
  //   {
  //     id: 5,
  //     name: "Jeans",
  //   },
  // ];
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((categoriesData) => {
        setCategories(categoriesData);
      });
  }, []);
  return (
    <>
      <div className="w-fit mx-auto grid grid-cols-2 md:grid-cols-5 items-center gap-5 my-8">
        {categories?.map((category) => {
          // console.log(category.name);
          return (
            <div
              key={category.id}
              className="border flex justify-center items-center p-5 rounded shadow-lg shadow-gray-300"
            >
              {category.name}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
