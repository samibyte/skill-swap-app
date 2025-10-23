import "aos/dist/aos.css";
import { Star } from "lucide-react";
import TopProviderCard from "./TopProviderCard";

const TopRatedProviders = ({ skillData }) => {
  const topProviders = skillData
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div
      className="py-16 bg-linear-to-b from-base-100 via-base-200 to-base-100 overflow-hidden"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <h2
        className="text-5xl md:text-3xl font-bold text-center mb-10 tracking-tight poppins-font"
        data-aos="fade-down"
      >
        Top Rated Providers
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 px-80"
        data-aos="zoom-in-up"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        {topProviders?.map((provider) => (
          <TopProviderCard key={provider.skillId} provider={provider} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedProviders;
