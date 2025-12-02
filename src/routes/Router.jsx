import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import Loader from "../components/Loader";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import SkillsDetails from "../pages/SkillDetails/SkillDetails";
import MyProfile from "../pages/Dashboard/MyProfile";
import ExploreSkills from "../pages/Explore/ExlploreSkills";
import AboutUs from "../pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "/skills",
        Component: ExploreSkills,
      },
      {
        path: "/skills-details/:id",
        element: <SkillsDetails />,

        loader: async () => {
          const res = await fetch("/skillsListing.json");
          const skillData = await res.json();
          return { skillData };
        },
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/about-us",
        Component: AboutUs,
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
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
