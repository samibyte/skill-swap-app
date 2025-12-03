import Loader from "../../../components/Loader";
import SkillCard from "../../../components/SkillCard";

const PopularSkills = ({ skillsData }) => {
  if (!skillsData) {
    return <Loader />;
  }

  const latestSkills = skillsData.slice(0, 8);

  return (
    <div>
      <h2 className="text-4xl mb-6 md:text-5xl font-bold text-center poppins-font">
        Popular <span className="text-secondary">Skills</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-10 py-10 sm:py-20">
        {latestSkills?.map((skill) => (
          <SkillCard key={skill.skillId} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default PopularSkills;
