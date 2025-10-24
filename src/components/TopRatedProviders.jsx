import TopProviderCard from "./TopProviderCard";

const TopRatedProviders = ({ skillData }) => {
  const topProviders = skillData
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div
      className="my-48 bg-linear-to-b from-base-100 via-base-200 to-base-100 overflow-hidden"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <h2
        className="md:text-5xl text-3xl font-bold text-center mb-25 tracking-tight poppins-font"
        data-aos="fade-in"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="bottom-center"
      >
        Top Rated <span className="text-secondary">Providers</span>
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 max-w-11/12 xl:max-w-8/12 mx-auto"
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
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
