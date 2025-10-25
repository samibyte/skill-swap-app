import { Link } from "react-router";
import { AlertCircle } from "lucide-react";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center p-5">
      <AlertCircle className="w-16 h-16 text-red-500 mb-5" />
      <h1 className="text-6xl font-bold text-secondary mb-3">404</h1>
      <h2 className="text-2xl font-semibold mb-3">Oops! Page not found.</h2>
      <p className="text-lg opacity-70 mb-6">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-focus transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
