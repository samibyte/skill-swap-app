import { Star } from "lucide-react";
import { Link } from "react-router";
import useAOS from "../hooks/useAOS";

const SkillCard = ({ skill }) => {
  useAOS({ duration: 1200, once: true });
  console.log(skill);
  const {
    skillId,
    skillName,
    image,
    description,
    rating,
    price,
    providerName,
  } = skill;
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      className="bg-base-300/30 border border-base-300/20 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden group"
    >
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
      <div className="p-6 flex flex-col gap-4 justify-between">
        <div>
          <h3 className="text-xl font-semibold">{skillName}</h3>
          <p className="mb-4 text-secondary">by {providerName}</p>
          <p className="text-sm line-clamp-2 mb-6">{description}</p>
          <div className="flex justify-between items-center">
            <p className="font-medium text-base-content">${price} / hour</p>
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
