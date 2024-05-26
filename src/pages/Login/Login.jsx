import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold py-6">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label justify-start gap-1 text-sm mt-2">
                    Dont have an account?
                    <Link href="/" className="text-blue-600">
                      Create one!
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <div className="my-2 flex gap-3 justify-between items-center">
                <hr className="border border-gray-500 w-full" />
                <p className="text-lg font-semibold text-gray-500">OR</p>
                <hr className="border border-gray-500 w-full" />
              </div>
              {/* social logins */}
              <div className="join join-vertical gap-2">
                <button className="btn w-full bg-gray-300">
                  <img
                    src="/images/icons/google.png"
                    alt="google icon"
                    className="w-6 h-6"
                  />
                  Login with google
                </button>
                <button className="btn w-full bg-gray-300">
                  <img
                    src="/images/icons/github.png"
                    alt="google icon"
                    className="w-6 h-6"
                  />{" "}
                  Login with github
                </button>
                <button className="btn w-full bg-gray-300">
                  <img
                    src="/images/icons/facebook.png"
                    alt="google icon"
                    className="w-6 h-6"
                  />{" "}
                  Login with facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
