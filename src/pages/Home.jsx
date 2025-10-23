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
      <section className="relative drop-shadow-xl rounded-xl max-w-[1400px] my-25 h-[700px] mx-auto">
        <HeroSlider />
      </section>

      {/* popular skills section  */}
      <section className="mx-50">
        <h2 className="text-5xl font-bold text-center poppins-font">
          Popular Skills You May Like
        </h2>
        <div className="grid grid-cols-3 gap-10 py-20">
          {skillData.map((skill) => (
            <SkillCard key={skill.skillId} skill={skill} />
          ))}{" "}
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
