import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { use } from "react";
import AuthContext from "../contexts/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  console.log(user);

  const displayName = user?.displayName;
  const photo =
    user?.photoURL ||
    `https://avatar.iran.liara.run/username?username=${displayName}+`;

  return (
    <div className="navbar px-30 bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>

            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link className="flex items-center">
          <img className="w-20" src={logo} alt="" />
          <h1 className="poppins-font text-xl font-bold">Skill Swap</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" flex gap-2">
          <li className="group hover:cursor-pointer">
            <a className="relative p-2 text-lg font-medium text-neutral transition-all duration-300 ease-in-out hover:text-secondary md:text-base">
              Home
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-secondary transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </li>
          <li className="group hover:cursor-pointer">
            <a className="relative p-2 text-lg font-medium text-neutral transition-all duration-300 ease-in-out hover:text-secondary md:text-base">
              My Profile
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-secondary transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-5">
        {user ? (
          <>
            <Link onClick={() => signOutUser()} className="btn">
              Log Out
            </Link>
            <div className="dropdown dropdown-end group relative">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar hover:scale-105 transition-transform duration-200"
              >
                <div className="w-10 rounded-full ring-2 ring-base-300 hover:ring-primary transition-colors duration-200">
                  <img alt="User avatar" src={photo} />
                </div>
              </div>

              <ul
                tabIndex={-1}
                className="menu menu-sm absolute right-0 mt-2 min-w-48 rounded-2xl bg-base-100 p-2 shadow-xl border border-base-200
               opacity-0 invisible group-hover:opacity-100 group-hover:visible
               transition-all duration-200 ease-out **:font-medium space-y-1 z-99"
              >
                <p className="text-center text-2xl font-semibold my-2">
                  {displayName}
                </p>

                <li>
                  <Link className="hover:bg-primary hover:text-primary-content transition-all duration-200 rounded-xl">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="hover:bg-primary hover:text-primary-content transition-all duration-200 rounded-xl">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => signOutUser()}
                    className="hover:bg-error hover:text-error-content transition-all duration-200 rounded-xl"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <NavLink to="/auth/login">
              <button className="btn btn-primary">Login</button>
            </NavLink>
            <NavLink to="/auth/signup">
              <button className="btn btn-primary">Signup</button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
