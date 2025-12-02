import { useLoaderData } from "react-router";
import HeroSlider from "./components/HeroSlider";
import TopRatedProviders from "./components/TopRatedProviders";
import HowItWorks from "./components/HowItWorks";
import useAOS from "../../hooks/useAOS";
import SwapsInAction from "./components/SwapsInAction";
import PopularSkills from "./components/PopularSkills";

const Home = () => {
  useAOS({ duration: 1200, once: true });
  const { skillsData } = useLoaderData();
  // console.log(skillsData);

  return (
    <div>
      {/* hero slider */}
      <section
        data-aos="fade-down"
        className="max-w-9/12 mx-auto relative drop-shadow-xl my-28"
      >
        <HeroSlider />
      </section>

      {/* popular skills section  */}
      <section className="max-w-9/12 mx-auto">
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
