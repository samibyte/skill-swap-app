import { use, useEffect, useRef } from "react";
import { Navigate, useLocation } from "react-router";
import AuthContext from "../contexts/AuthContext";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  const lastToastPath = useRef(null);

  useEffect(() => {
    if (!loading && !user && lastToastPath.current !== location.pathname) {
      const msg =
        location.pathname === "/my-profile"
          ? "Please login to view profile"
          : "Please login to view details";

      toast.error(msg);
      lastToastPath.current = location.pathname;
    }
  }, [user, loading, location.pathname]);

  if (loading) return <Loader />;

  if (user && user.email) return children;

  return (
    <Navigate to="/auth/login" state={{ from: location.pathname }} replace />
  );
};

export default PrivateRoute;
