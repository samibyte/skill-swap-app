import { use, useRef } from "react";
import { Navigate, useLocation } from "react-router";
import AuthContext from "../contexts/AuthContext";
import { HashLoader } from "react-spinners";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  const hasShownToast = useRef(false);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <HashLoader />
      </div>
    );
  }
  if (user && user?.email) {
    return children;
  } else {
    if (!hasShownToast.current) {
      toast.error("Please login to view details");
      hasShownToast.current = true;
    }
    return <Navigate state={location.pathname} to="/auth/login" />;
  }
};

export default PrivateRoute;
