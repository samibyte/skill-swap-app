import { useLoaderData } from "react-router";
import HeroSlider from "./components/HeroSlider";
import SkillCard from "../../components/SkillCard";
import TopRatedProviders from "./components/TopRatedProviders";
import HowItWorks from "./components/HowItWorks";
import useAOS from "../../hooks/useAOS";
import SwapsInAction from "./components/SwapsInAction";

const Home = () => {
  useAOS({ duration: 1200, once: true });
  const { skillsData } = useLoaderData();
  // console.log(skillsData);

  return (
    <div>
      {/* hero slider */}
      <section
        data-aos="fade-down"
        className="max-w-9/12 mx-auto relative drop-shadow-xl md:mb-50 my-20 md:mt-30"
      >
        <HeroSlider />
      </section>

      {/* popular skills section  */}
      <section className="max-w-9/12 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center poppins-font">
          Popular <span className="text-secondary">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 py-10 sm:py-20">
          {skillsData.map((skill) => (
            <SkillCard key={skill.skillId} skill={skill} />
          ))}
        </div>
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
