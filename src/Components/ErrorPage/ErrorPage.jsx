import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-slate-100 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold">Oops!</h1>
      <p className="text-3xl font-semibold my-5">The page is not found</p>
      <p className="text-5xl font-semibold mb-5">404</p>
      <Link to="/" className="btn text-xl text-white bg-green-500">
        Back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
