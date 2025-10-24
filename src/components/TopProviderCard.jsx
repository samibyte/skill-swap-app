import { Star } from "lucide-react";

const TopProviderCard = ({ provider }) => {
  const { skillId, providerImage, providerName, category, rating } = provider;

  return (
    <div
      key={skillId}
      className="bg-base-100/70 backdrop-blur-md border border-base-300 rounded-4xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center p-6"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      data-aos-delay={skillId * 100}
    >
      <img
        src={providerImage}
        alt={providerName}
        className="w-48 h-48 rounded-full object-cover mb-3 border border-primary/40"
      />
      <h3 className="text-2xl poppins-font font-medium">{providerName}</h3>
      <p className="text-sm opacity-70">{category}</p>
      <div className="flex items-center justify-center mt-2 text-yellow-500">
        <Star className="w-4 h-4 fill-yellow-400" />
        <span className="ml-1 text-sm">{rating}</span>
      </div>
    </div>
  );
};

export default TopProviderCard;
