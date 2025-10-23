import { useEffect, useMemo } from "react";
import { useLocation } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const useAOS = (options = {}) => {
  const location = useLocation();

  const aosOptions = useMemo(
    () => ({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      ...options,
    }),
    [options]
  );

  useEffect(() => {
    AOS.init(aosOptions);
  }, [aosOptions]);

  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, [location]);
};

export default useAOS;
