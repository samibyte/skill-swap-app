import { useLoaderData } from "react-router";
import HeroSlider from "../components/HeroSlider";
import SkillCard from "../components/SkillCard";

const Home = () => {
  const { skillData } = useLoaderData();
  // console.log(skillData);

  return (
    <div>
      {/* hero slider */}
      <section className="relative shadow-2xl rounded-4xl max-w-[1400px] my-20 h-[600px] mx-auto">
        <HeroSlider />
      </section>

      {/* popular skills section  */}
      <section className="mx-30">
        <h2 className="text-5xl font-semibold text-center poppins-font">
          Popular Skills You May Like
        </h2>
        <div className="grid grid-cols-3 gap-8 py-20">
          {skillData.map((skill) => (
            <SkillCard skill={skill} />
          ))}{" "}
        </div>
      </section>
    </div>
  );
};

export default Home;
