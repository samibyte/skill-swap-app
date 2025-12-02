import { ArrowLeft, LoaderCircle, Mail } from "lucide-react";
import { use, useState } from "react";
import { Link, useLocation } from "react-router";
import logo from "/logo.png";
import AuthContext from "../../contexts/AuthContext";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const location = useLocation();
  const preFilledEmail = location.state?.email || "";

  const { resetPassWithEmail } = use(AuthContext);
  const [email, setEmail] = useState(preFilledEmail);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email.trim()) {
      setError("Please enter a valid email.");
      return;
    }
    setLoadingBtn(true);
    try {
      await resetPassWithEmail(email);
      setMessage("If this email is registered, a reset link has been sent.");

      setLoadingText("Opening Gmail");
      setTimeout(() => {
        // Redirect to Gmail
        window.open("https://mail.google.com", "_blank");
      }, 2500);
    } catch (err) {
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoadingBtn(false);
    }
  };

  return (
    <div className="flex min-h-screen relative bg-base-100 items-center justify-center">
      <title>SkillSwap - Reset Password</title>
      <div className="w-full max-w-md rounded-lg p-6">
        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <img className="w-16" src={logo} alt="skill swap logo" />
        </div>

        <h2 className="mb-2 poppins-font text-center text-4xl font-semibold text-neutral">
          Reset Password
        </h2>
        <h2 className="mb-8 poppins-font text-center opacity-50 text-xl font-semibold text-neutral">
          We'll send you a reset link
        </h2>

        <form onSubmit={handleReset}>
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
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full placeholder:opacity-60 rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200 ${
                  error ? "border-red-500 ring-red-200" : "border-neutral-300"
                }`}
              />
            </div>
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loadingBtn}
            className="flex btn w-full items-center justify-center rounded-lg bg-primary text-white hover:bg-neutral disabled:bg-neutral-300"
          >
            {loadingBtn ? (
              <div className="flex gap-2">
                <LoaderCircle className="animate-spin" size={20} />
                <p>{loadingText}</p>
              </div>
            ) : (
              "Send Reset Link"
            )}
          </button>

          <div className="mt-4 min-h-6">
            {message && (
              <p className="text-center text-sm text-green-600">{message}</p>
            )}
          </div>
        </form>

        {/* Back to login */}
        <div className="mt-6 text-center">
          <span className="text-sm text-neutral-600">
            Remembered your password?{" "}
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
        className="text-center absolute bottom-6 lg:bottom-12 flex justify-center items-center text-sm text-gray-700"
      >
        <ArrowLeft /> <p className="hover:underline">Go Back Home</p>
      </Link>
    </div>
  );
};

export default ForgotPassword;
