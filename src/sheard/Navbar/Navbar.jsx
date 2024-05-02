import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };

  // const handleLogout = () => {
  //   logOut()
  //     .then(() => console.log("user logged out successfully"))
  //     .catch((error) => console.error(error));
  // };
  const navItem = (
    <>
      <li className="text-xl font-bold hover:text-green-500">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "border rounded-lg border-green-500 text-green-500"
              : isPending
              ? "loading loading-spinner loading-lg"
              : ""
          }
        >
          <a>Home</a>
        </NavLink>
      </li>
      <li className="text-xl font-bold hover:text-green-500">
        <NavLink
          to="allTouristSport"
          className={({ isActive, isPending }) =>
            isActive
              ? "border rounded-lg border-green-500 text-green-500"
              : isPending
              ? "loading loading-spinner loading-lg"
              : ""
          }
        >
          <a>All Tourists Spot</a>
        </NavLink>
      </li>
      <li className="text-xl font-bold hover:text-green-500">
        <NavLink
          to="addTouristSport"
          className={({ isActive, isPending }) =>
            isActive
              ? "border rounded-lg border-green-500 text-green-500"
              : isPending
              ? "loading loading-spinner loading-lg"
              : ""
          }
        >
          <a>Add Tourist Spot</a>
        </NavLink>
      </li>
      <li className="text-xl font-bold hover:text-green-500">
        <NavLink
          to="myList"
          className={({ isActive, isPending }) =>
            isActive
              ? "border rounded-lg border-green-500 text-green-500"
              : isPending
              ? "loading loading-spinner loading-lg"
              : ""
          }
        >
          <a>My List</a>
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 mb-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <a className=" text-xl md:text-4xl font-bold">
            Traveler<span className="text-green-500">Hero</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>

        <div className="navbar-end">
          <div className="flex items-center justify-center">
            <div className="mr-3">
              <input
                onChange={handleTheme}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
            </div>
            <div>
              {user ? (
                <div className="flex items-center">
                  <a id="my-anchor-element">
                    <img
                      className="w-10 rounded-full mr-3"
                      src={user.photoURL}
                      alt=""
                    />
                  </a>
                  <Tooltip
                    anchorSelect="#my-anchor-element"
                    content={user.displayName}
                  />
                  <button
                    onClick={logOut}
                    className="btn  bg-green-500 text-xl font-bold text-white hover:border-green-500"
                  >
                    LogOut
                  </button>
                </div>
              ) : (
                <Link to="/login">
                  <a
                    className="btn bg-green-500 text-xl font-bold text-white hover:border-green-500"
                    href=""
                  >
                    Login
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
