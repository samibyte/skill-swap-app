import HeroSlider from "../components/HeroSlider";

const Home = () => {
  return (
    <div>
      {/* hero slider */}
      <section className="relative shadow-2xl rounded-4xl max-w-[1400px] my-20 h-[600px] mx-auto">
        <HeroSlider />
      </section>
    </div>
  );
};

export default Home;
