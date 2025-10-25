import { ArrowLeft, Eye, EyeOff, LoaderCircle, Lock, Mail } from "lucide-react";
import { use, useState } from "react";
import logo from "/logo.png";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import AuthContext from "../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { setUser, setLoading, signInWithEmail, signInWithGoogle } =
    use(AuthContext);

  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = userFormData.email;
    const password = userFormData.password;

    let newErrors = { email: "", password: "" };

    if (!email.trim()) newErrors.email = "Please enter a valid email.";
    if (!password.trim()) newErrors.password = "Password cannot be empty.";

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    setLoadingBtn(true);

    try {
      const userCred = await signInWithEmail(email, password);
      const user = userCred.user;
      setUser(user);
      toast.success("Login successful!");
      navigate(location.state?.from || "/");
    } catch (err) {
      // console.log(err);

      let errorMessage = "Login failed. Please try again.";

      switch (err.code) {
        case "auth/invalid-credential":
          errorMessage =
            "Login failed: invalid credential. Try signing in again.";
          break;
        case "auth/user-not-found":
          errorMessage = "No account found with this email.";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password. Please try again.";
          break;
        case "auth/invalid-email":
          errorMessage = "Please enter a valid email address.";
          break;
        case "auth/user-disabled":
          errorMessage = "This account has been disabled.";
          break;
        case "auth/network-request-failed":
          errorMessage = "Network error. Check your connection and try again.";
          break;
        default:
          errorMessage = err.message || errorMessage;
      }

      toast.error(errorMessage);
    } finally {
      setLoadingBtn(false);
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;
      setUser(user);
      toast.success("Signed in successfully!");
      navigate(location.state?.from || "/");
    } catch (err) {
      toast.error(err.message || "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex min-h-screen relative bg-base-100 items-center justify-center">
      <title>SkillSwap - Login</title>
      <div className="w-full max-w-md rounded-lg p-6">
        {/* login text and logo */}
        <div className="mb-4 flex justify-center">
          <img className="w-16" src={logo} alt="skill swap logo" />
        </div>
        <h2 className="mb-2 poppins-font text-center text-4xl font-semibold text-neutral">
          Welcome Back!
        </h2>
        <h2 className="mb-8 poppins-font text-center opacity-50 text-xl font-semibold text-neutral">
          Login to Skill Swap
        </h2>
        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-neutral-700"
            >
              Email
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-neutral-500">
                <Mail size={20} />
              </span>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={userFormData.email}
                onChange={handleChange}
                className={`w-full placeholder:opacity-60 rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200 ${
                  errors.email
                    ? "border-red-500 ring-red-200"
                    : "border-neutral-300"
                }`}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium text-neutral-700"
            >
              Password
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-neutral-500">
                <Lock size={20} />
              </span>
              <div
                onClick={() => setShowPass(!showPass)}
                aria-label={showPass ? "Hide password" : "Show password"}
                role="button"
                tabIndex={0}
                className="absolute right-3 hover:cursor-pointer hover:text-neutral text-neutral-500"
              >
                {showPass ? (
                  <span>
                    <Eye size={20} />
                  </span>
                ) : (
                  <span>
                    <EyeOff size={20} />
                  </span>
                )}
              </div>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                value={userFormData.password}
                onChange={handleChange}
                className={`w-full placeholder:opacity-60 rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200 ${
                  errors.password
                    ? "border-red-500 ring-red-200"
                    : "border-neutral-300"
                }`}
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
            <div className="mt-2 text-right">
              <Link
                to="/auth/forgot-password"
                state={{ email: userFormData.email }}
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Sign in Button */}
          <button
            type="submit"
            disabled={loadingBtn}
            className="flex btn w-full items-center justify-center rounded-lg bg-primary text-white hover:bg-neutral disabled:bg-neutral-300"
          >
            {loadingBtn ? (
              <LoaderCircle className="animate-spin" size={20} />
            ) : (
              "Sign in"
            )}
          </button>
          <div className="divider">OR</div>
          {/* Google Button */}
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="btn w-full bg-white text-neutral hover:shadow-sm border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </form>

        {/* Sign up */}
        <div className="mt-4 text-center">
          <span className="text-sm text-neutral-600">New here? </span>
          <Link
            to="/auth/signup"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
      <Link
        to="/"
        className="text-center absolute bottom-6 lg:bottom-12 flex justify-center items-center text-sm text-gray-700"
      >
        <ArrowLeft /> <p className=" hover:underline">Go Back Home</p>
      </Link>
    </div>
  );
};

export default Login;
