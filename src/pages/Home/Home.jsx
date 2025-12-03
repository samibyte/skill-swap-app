import HeroSlider from "./components/HeroSlider";
import TopRatedProviders from "./components/TopRatedProviders";
import HowItWorks from "./components/HowItWorks";
import useAOS from "../../hooks/useAOS";
import SwapsInAction from "./components/SwapsInAction";
import PopularSkills from "./components/PopularSkills";
import { useEffect, useState } from "react";

const Home = () => {
  useAOS({ duration: 1200, once: true });

  const [skillsData, setSkillsData] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await fetch("/skillsListing.json");
      const data = await result.json();
      setSkillsData(data);
    })();
  }, []);
  return (
    <div>
      {/* hero slider */}
      <section
        data-aos="fade-down"
        className="max-w-11/12 md:max-w-9/12 mx-auto relative drop-shadow-xl my-28"
      >
        <HeroSlider />
      </section>

      {/* popular skills section  */}
      <section className="max-w-11/12 md:max-w-9/12 mx-auto">
        <PopularSkills skillsData={skillsData} />
      </section>
      <section>
        <TopRatedProviders skillsData={skillsData} />
      </section>
      <section>
        <HowItWorks />
      </section>
      <section>
        <SwapsInAction />
      </section>
    </div>
  );
};

export default Home;
