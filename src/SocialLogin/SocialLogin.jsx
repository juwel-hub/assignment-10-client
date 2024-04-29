import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSocialLogin = (social) => {
    social().then((res) => {
      console.log(res.user);
      if (res.user) {
        navigate(location?.state ? location.state : "/");
      }
    });
  };
  return (
    <div>
      <div className="divider text-xl">Continue with</div>
      <div className=" p-4">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn w-full hover:text-green-500 border-green-300 text-xl font-bold "
        >
          Google
        </button>
        <br />
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn w-full my-4 hover:text-green-500 border-green-300 text-xl font-bold"
        >
          Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
