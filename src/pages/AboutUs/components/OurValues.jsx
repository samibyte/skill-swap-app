import { Globe, Heart, Shield, Sparkles } from "lucide-react";

const OurValues = () => {
  const values = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovation",
      description:
        "Constantly evolving our platform to make skill sharing more accessible, efficient, and rewarding for everyone.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community First",
      description:
        "Building genuine connections and fostering a supportive environment where everyone can grow together.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Safety",
      description:
        "Prioritizing user safety with verified profiles, secure payments, and transparent review systems.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description:
        "Connecting learners and teachers across borders to create a truly worldwide learning community.",
    },
  ];

  return (
    <section className="py-16 bg-base-200/30">
      <div className="max-w-11/12 md:max-w-9/12 mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold poppins-font mb-4">
            Our <span className="text-secondary">Values</span>
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            The principles that guide everything we do at SkillSwap
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-base-100/70 backdrop-blur-sm border border-base-300/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-primary mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-base-content/70">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
