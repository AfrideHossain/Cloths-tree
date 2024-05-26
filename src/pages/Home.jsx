import Categories from "../components/home/Categories/Categories";
import Featured from "../components/home/Featured/Featured";
import Banner from "../components/home/Banner";
import Popular from "../components/home/Popular/Popular";
import HomeShop from "../components/home/HomeShop/HomeShop";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <Featured />
      <Popular />
      <HomeShop />
    </>
  );
};

export default Home;
