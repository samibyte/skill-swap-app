import { use, useRef } from "react";
import { Navigate, useLocation } from "react-router";
import AuthContext from "../contexts/AuthContext";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  const hasShownToast = useRef(false);

  if (loading) {
    return <Loader />;
  }
  if (user && user?.email) {
    return children;
  } else {
    if (!hasShownToast.current) {
      if (location.pathname === "/my-profile") {
        toast.error("Please login to view profile");
      } else {
        toast.error("Please login to view details");
      }

      hasShownToast.current = true;
    }
    return <Navigate state={location.pathname} to="/auth/login" replace />;
  }
};

export default PrivateRoute;
