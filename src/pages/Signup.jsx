import {
  ArrowLeft,
  CircleUserRound,
  Eye,
  EyeOff,
  LoaderCircle,
  Lock,
  Mail,
  UserRound,
} from "lucide-react";
import { use, useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile, setUser, signInWithGoogle } =
    use(AuthContext);

  const [userFormData, setUserFormData] = useState({
    name: "",
    photo: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const name = userFormData.name;
    const photo = userFormData.photo || null;
    const email = userFormData.email;
    const password = userFormData.password;

    let newErrors = { name: "", email: "", password: "" };

    if (!name.trim()) newErrors.name = "Please enter your name";
    if (!email.trim()) newErrors.email = "Please enter a valid email.";

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!password.trim()) {
      newErrors.password = "Password cannot be empty.";
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.";
    }

    if (newErrors.name || newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const userCred = await createUser(email, password);
      const user = userCred.user;
      console.log(user);
      await updateUserProfile({ displayName: name, photoURL: photo });
      setUser({ ...user, displayName: name, photoURL: photo });
      toast.success("Account created successfully");
      navigate("/");
    } catch (err) {
      console.log(err);

      let errorMessage = "Registration failed. Try again.";

      switch (err.code) {
        case "auth/email-already-in-use":
          errorMessage = "This email is already registered. Try logging in.";
          break;
        case "auth/invalid-email":
          errorMessage = "Please enter a valid email address.";
          break;
        case "auth/network-request-failed":
          errorMessage = "Network error. Check your connection and try again.";
          break;
        default:
          errorMessage = err.message || errorMessage;
      }

      toast.error(errorMessage);
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;
      setUser(user);
      toast.success("Signed in successfully!");
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className="flex min-h-screen relative bg-base-100 items-center justify-center">
      <div className="w-full max-w-md rounded-lg  p-6">
        {/* login text and logo */}
        <div className="mb-4 flex justify-center">
          <img className="w-16" src={logo} alt="skill swap logo" />
        </div>
        <h2 className="mb-2 poppins-font text-center text-4xl font-semibold text-neutral">
          Hello, Welcome!
        </h2>
        <h2 className="mb-8 poppins-font text-center opacity-50 text-xl font-semibold text-neutral">
          Join Skill Swap
        </h2>
        <form onSubmit={handleRegister}>
          {/* Name*/}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-neutral-700"
            >
              Name
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-neutral-500">
                <UserRound size={20} />
              </span>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={userFormData.name}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200 ${
                  errors.name
                    ? "border-red-500 ring-red-200"
                    : "border-neutral-300"
                }`}
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* photoURL */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-neutral-700"
            >
              Photo
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-neutral-500">
                <CircleUserRound size={20} />
              </span>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo URL (optional)."
                value={userFormData.photo}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200 ${
                  errors.photo
                    ? "border-red-500 ring-red-200"
                    : "border-neutral-300"
                }`}
              />
            </div>
            {errors.photo && (
              <p className="mt-1 text-sm text-red-600">{errors.photo}</p>
            )}
          </div>

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
                placeholder="Enter your email"
                value={userFormData.email}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200 ${
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
                placeholder="Enter your password"
                value={userFormData.password}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200 ${
                  errors.password
                    ? "border-red-500 ring-red-200"
                    : "border-neutral-300"
                }`}
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex btn w-full items-center justify-center rounded-lg bg-primary text-white hover:bg-neutral disabled:bg-neutral-300"
          >
            {loading ? (
              <LoaderCircle className="animate-spin" size={20} />
            ) : (
              "Register"
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
            Continue with Google
          </button>
        </form>

        {/* Sign up */}
        <div className="mt-4 text-center">
          <span className="text-sm text-neutral-600">
            Already have an account?{" "}
          </span>
          <Link
            to="/auth/login"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
      <Link
        to="/"
        className="text-center absolute bottom-12 flex justify-center items-center text-sm text-gray-700"
      >
        <ArrowLeft /> <p className=" hover:underline">Go Back Home</p>
      </Link>
    </div>
  );
};

export default Signup;
