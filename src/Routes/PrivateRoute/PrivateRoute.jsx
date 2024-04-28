import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <span className="loading text-center loading-spinner loading-lg"></span>
    );
  }
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
