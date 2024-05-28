import Categories from "../components/home/Categories/Categories";
import Featured from "../components/home/Featured/Featured";
import Banner from "../components/home/Banner";
import Popular from "../components/home/Popular/Popular";
import HomeShop from "../components/home/HomeShop/HomeShop";
import { useEffect, useState } from "react";

const Home = () => {
  // const products = useLoaderData();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  // console.log(products);
  // use
  return (
    <>
      <Banner />
      <Categories />
      <Featured products={products.slice(5, 9)} />
      <Popular products={products.slice(0, 4)} />
      <HomeShop products={products.slice(0, 8)} />
    </>
  );
};

export default Home;
