import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import SkillsDetails from "../pages/SkillsDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          const res = await fetch("/skillsListing.json");
          const skillData = await res.json();
          return { skillData };
        },
      },
      {
        path: "/skills-details/:id",
        element: (
          <PrivateRoute>
            <SkillsDetails />
          </PrivateRoute>
        ),
        loader: async () => {
          const res = await fetch("/skillsListing.json");
          const skillData = await res.json();
          return { skillData };
        },
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/signup",
        Component: Signup,
      },
      {
        path: "/auth/forgot-password",
        Component: ForgotPassword,
      },
    ],
  },
]);

export default router;
