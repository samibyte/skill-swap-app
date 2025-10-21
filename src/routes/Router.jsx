import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

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
    ],
  },
]);

export default router;
