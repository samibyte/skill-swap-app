import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
      <div className="max-w-9/12 mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold poppins-font mb-6">
            About <span className="text-secondary">SkillSwap</span>
          </h1>
          <p className="text-xl md:text-2xl text-base-content/80 max-w-3xl mx-auto mb-8">
            We're revolutionizing how people share knowledge by creating
            meaningful connections between learners and experts worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link to="/skills">
              <button className="btn btn-primary btn-lg gap-2">
                Explore Skills
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/auth/signup">
              <button className="btn btn-outline btn-lg">
                Join Our Community
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
