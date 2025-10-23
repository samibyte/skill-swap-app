import { Star } from "lucide-react";

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-base-300 rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1 overflow-hidden">
      <img
        src={skill.image}
        alt={skill.skillName}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 flex flex-col gap-8 justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-1">{skill.skillName}</h3>
          <p className=" text-sm mb-2">{skill.providerName}</p>
          <div className="flex justify-between">
            <p className=" font-medium mb-2">${skill.price} / session</p>
            <div className="flex gap-1 items-center mb-2">
              <Star className="w-4 h-4 text-secondary" />
              <span className=" text-sm">{skill.rating}</span>
            </div>
          </div>
        </div>
        <button className="btn btn-primary">View Details</button>
      </div>
    </div>
  );
};

export default SkillCard;
