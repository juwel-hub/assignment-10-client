import { Link } from "react-router-dom";
import SocialLogin from "../../SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    signIn(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              Login now!
            </h1>
          </div>
          <div className="card shrink-0 my-10 md:w-[500px]  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && <span>This field is required</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-500 text-xl font-bold text-white">
                  Login
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center text-xl pb-10">
              <h1>New here? Please: </h1>
              <Link
                className="text-black font-bold underline ml-2 hover:text-green-500"
                to="/register"
              >
                Register
              </Link>
            </div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
