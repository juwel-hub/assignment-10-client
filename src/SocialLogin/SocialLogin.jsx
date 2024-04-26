const SocialLogin = () => {
  return (
    <div>
      <div className="divider text-xl">Continue with</div>
      <div className=" p-4">
        <button className="btn w-full hover:text-green-500 border-green-300 text-xl font-bold ">
          Google
        </button>
        <br />
        <button className="btn w-full my-4 hover:text-green-500 border-green-300 text-xl font-bold">
          Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
