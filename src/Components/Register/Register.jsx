import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  // console.log(info);
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    createUser(email, password)
      .then((res) => {
        if (res.user) {
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register Please!</h1>
          </div>
          <div className="card shrink-0 my-10 md:w-[500px]  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">Name field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">Email field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  {...register("photoURL", { required: true })}
                />
                {errors.photoURL && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                      message:
                        "password must have 1 Upper 1 Lower and at least 6 character.",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-500 text-xl font-bold text-white">
                  Register
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center text-xl pb-10">
              <h1>Already Have account? Please:</h1>
              <Link
                className="text-black font-bold underline ml-2 hover:text-green-500"
                to="/login"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
