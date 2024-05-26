import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div
        className="hero min-h-screen z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Style Your Story</h1>
            <p className="mb-5">
              Discover trendy fashion for every occasion. Elevate your wardrobe
              with our exclusive collections. Embrace the latest styles and
              timeless classics. Enjoy top-quality fabrics and impeccable
              designs. Shop now and transform your look with confidence.
            </p>
            <Link className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
