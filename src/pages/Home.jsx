import { useLoaderData } from "react-router";
import HeroSlider from "../components/HeroSlider";
import SkillCard from "../components/SkillCard";
import TopRatedProviders from "../components/TopRatedProviders";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  const { skillData } = useLoaderData();
  // console.log(skillData);

  return (
    <div>
      {/* hero slider */}
      <section
        data-aos="fade-down"
        className="relative drop-shadow-xl rounded-xl max-w-11/12 md:max-w-7xl md:mb-50 my-20 md:mt-30 h-[30vh]  md:h-[60vh] mx-auto"
      >
        <HeroSlider />
      </section>

      {/* popular skills section  */}
      <section className="mx-auto w-11/12 md:max-w-9/12">
        <h2 className="text-4xl md:text-5xl font-bold text-center poppins-font">
          Popular <span className="text-secondary">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 py-10 sm:py-20">
          {skillData.map((skill) => (
            <SkillCard key={skill.skillId} skill={skill} />
          ))}
        </div>
      </section>
      <section>
        <TopRatedProviders skillData={skillData} />
      </section>
      <section>
        <HowItWorks />
      </section>
    </div>
  );
};

export default Home;
