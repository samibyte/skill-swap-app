import { Star } from "lucide-react";
import { Link } from "react-router";

const SkillCard = ({ skill }) => {
  const { skillId, skillName, image, rating, price } = skill;
  return (
    <div className="bg-base-300/30 border border-base-300/20 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-0.5 overflow-hidden group">
      {/* Image with subtle overlay */}
      <div className="relative w-full h-48">
        <img
          src={image}
          alt={skillName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all rounded-t-2xl"></div>
      </div>

      {/* Card content */}
      <div className="p-6 flex flex-col gap-6 justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{skillName}</h3>
          <div className="flex justify-between items-center mb-4">
            <p className="font-medium text-base-content">${price} / session</p>
            <div className="flex gap-1 items-center">
              <Star className="w-4 h-4 text-secondary" />
              <span className="text-sm">{rating}</span>
            </div>
          </div>
        </div>

        <Link to={`/skills-details/${skillId}`}>
          <button className="btn btn-primary w-full">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default SkillCard;
