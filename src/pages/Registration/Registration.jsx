import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import { updateProfile } from "firebase/auth";
import { useState } from "react";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // states
  const [error, setError] = useState();

  // essential things from authcontext
  const { userRegisterWithPass, loginWithGoogle } = useAuthContext();

  // navigate and location
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmitHandler = (data) => {
    const { username, email, password } = data;
    userRegisterWithPass(email, password)
      .then((result) => {
        const currentUser = result.user;
        updateProfile(currentUser, {
          displayName: username,
        }).then(() => {});
        // console.log(result);
        //   navigate user
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const googleLogin = () => {
    loginWithGoogle()
      .then(() => {
        //   navigate user
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold py-6">Create An Account!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="input input-bordered"
                    {...register("username", {
                      required: true,
                    })}
                  />
                  {errors.email?.type === "required" && (
                    <p className="label text-red-500">
                      Email address is required
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    {...register("email", {
                      required: true,
                    })}
                  />
                  {errors.email?.type === "required" && (
                    <p className="label text-red-500">
                      Email address is required
                    </p>
                  )}
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
                    {...register("password", {
                      required: true,
                    })}
                  />
                  {errors.password?.type === "required" && (
                    <p className="label text-red-500">Password is required</p>
                  )}
                  <label className="label justify-start gap-1 text-sm mt-2">
                    Already have an account?
                    <Link to="/auth" className="text-blue-600">
                      Login!
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
                {error && <p className="label text-red-500">{error}</p>}
              </form>
              <div className="my-2 flex gap-3 justify-between items-center">
                <hr className="border border-gray-500 w-full" />
                <p className="text-lg font-semibold text-gray-500">OR</p>
                <hr className="border border-gray-500 w-full" />
              </div>
              {/* social logins */}
              <div className="join join-vertical gap-2">
                <button
                  className="btn w-full bg-gray-300"
                  onClick={googleLogin}
                >
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

export default Registration;
