import "aos/dist/aos.css";
import { Star } from "lucide-react";

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
        {topProviders?.map((p) => (
          <div
            key={p.skillId}
            className="bg-base-100/70 backdrop-blur-md border border-base-300 rounded-4xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center p-6"
            data-aos="fade-up"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-delay={p.skillId * 100}
          >
            <img
              src={p.image}
              alt={p.providerName}
              className="w-48 h-48 rounded-full object-cover mb-3 border border-primary/40"
            />
            <h3 className="text-2xl poppins-font font-medium">
              {p.providerName}
            </h3>
            <p className="text-sm opacity-70">{p.category}</p>
            <div className="flex items-center justify-center mt-2 text-yellow-500">
              <Star className="w-4 h-4 fill-yellow-400" />
              <span className="ml-1 text-sm">{p.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedProviders;
