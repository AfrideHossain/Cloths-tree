import HorizontalCard from "../../../shared/HorizontalCard/HorizontalCard ";

const Featured = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl my-6 text-center font-semibold border-b-2 border-purple-600 px-5 py-2">
          Featured Cloths
        </h1>
      </div>
      <div className="w-full grid md:grid-cols-4 justify-center items-center gap-4 p-4">
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
      </div>
    </>
  );
};

export default Featured;
