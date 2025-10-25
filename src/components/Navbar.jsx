import { Link, NavLink } from "react-router";
import logo from "/logo.png";
import { use } from "react";
import AuthContext from "../contexts/AuthContext";
import UserAvatarDropdown from "./UserAvatarDropdown";
import { ClipLoader } from "react-spinners";
import { Moon, Sun } from "lucide-react";
import toast from "react-hot-toast";
import ThemeContext from "../contexts/ThemeContext";

const Navbar = () => {
  const { user, signOutUser, loading, setLoading } = use(AuthContext);

  const { theme, toggleTheme } = use(ThemeContext);

  const handleSignOut = async () => {
    try {
      await signOutUser();
      toast.success("Signed out successfully");
    } catch (err) {
      toast.error(err.message || "Couldn't sign out, try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="navbar md:px-12 xl:px-30 bg-base-100/96 backdrop-blur-lg border border-base-200 shadow-sm">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-36 p-2 shadow"
          >
            <li className="group hover:cursor-pointer">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `relative p-2 text-lg font-medium transition-all duration-300 ease-in-out md:text-base
                ${isActive ? "text-secondary" : "text-neutral"}`
                }
              >
                {({ isActive }) => (
                  <>
                    Home
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ease-in-out
                ${
                  isActive
                    ? "w-full bg-secondary"
                    : "w-0 bg-secondary group-hover:w-full"
                }`}
                    ></span>
                  </>
                )}
              </NavLink>
            </li>
            <li className="group hover:cursor-pointer">
              <NavLink
                to="/my-profile"
                className={({ isActive }) =>
                  `relative p-2 text-lg font-medium transition-all duration-300 ease-in-out md:text-base
     ${isActive ? "text-secondary" : "text-neutral"}`
                }
              >
                {({ isActive }) => (
                  <>
                    My Profile
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ease-in-out
          ${
            isActive
              ? "w-full bg-secondary"
              : "w-0 bg-secondary group-hover:w-full"
          }`}
                    ></span>
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
        <Link className="flex gap-2 items-center">
          <img className="w-12 sm:w-16 " src={logo} alt="" />
          <h1 className="poppins-font md:text-2xl hidden sm:inline-block font-bold">
            Skill Swap
          </h1>
        </Link>
      </div>
      <div className="navbar-end flex gap-3 sm:gap-8">
        {/* nav links */}
        <ul className="hidden lg:flex">
          <li className="group hover:cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative p-2 text-lg font-medium transition-all duration-300 ease-in-out md:text-base
                ${isActive ? "text-secondary" : "text-neutral"}`
              }
            >
              Home
              <span className="absolute bottom-0 left-0 h-0.5 transition-all duration-300 ease-in-out w-0 group-hover:w-full bg-secondary"></span>
            </NavLink>
          </li>
          <li className="group hover:cursor-pointer">
            <NavLink
              to="/my-profile"
              className={({ isActive }) =>
                `relative p-2 text-lg font-medium transition-all duration-300 ease-in-out md:text-base
                ${isActive ? "text-secondary" : "text-neutral"}`
              }
            >
              My Profile
              <span className="absolute bottom-0 left-0 h-0.5 transition-all duration-300 ease-in-out w-0 group-hover:w-full bg-secondary"></span>
            </NavLink>
          </li>
        </ul>

        <div className="flex gap-2 sm:gap-3">
          {/* navbar theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-base-200 transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {theme === "skillswapdark" ? (
              <Sun className="h-6 w-6 text-yellow-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
            ) : (
              <Moon className="h-6 w-6 text-slate-600 transition-transform duration-300 rotate-0 hover:rotate-45" />
            )}
          </button>

          {loading ? (
            <ClipLoader color="#365a73" size={30} />
          ) : user ? (
            <>
              <Link onClick={handleSignOut} className="btn">
                Log Out
              </Link>
              <UserAvatarDropdown />
            </>
          ) : (
            <div className="flex items-center">
              <NavLink to="/auth/login">
                <button className="btn">Login</button>
              </NavLink>
              <div className="divider text-neutral-400 divider-horizontal">
                OR
              </div>
              <NavLink to="/auth/signup">
                <button className="btn btn-primary">Signup</button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
