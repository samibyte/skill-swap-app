import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useAOS from "../hooks/useAOS";

const MainLayout = () => {
  useAOS({ duration: 1200, once: true });

  return (
    <div>
      <header className="sticky top-0 z-99">
        <Navbar />
      </header>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
