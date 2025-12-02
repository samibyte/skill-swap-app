import React from "react";

const Timeline = () => {
  const milestones = [
    {
      year: "2021",
      event: "SkillSwap founded with a vision to democratize skill sharing",
    },
    { year: "2022", event: "Launched beta platform with 100 early adopters" },
    {
      year: "2023",
      event: "Reached 10,000 users and expanded to 20+ countries",
    },
    {
      year: "2024",
      event: "Introduced AI-powered skill matching and video learning features",
    },
    {
      year: "2025",
      event:
        "Expanded platform to 50,000 users and launched premium subscription plans",
    },
  ];

  return (
    <section className="py-16 bg-base-200/30">
      <div className="max-w-9/12 mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold poppins-font mb-4">
            Our <span className="text-secondary">Journey</span>
          </h2>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-primary/30 to-secondary/30 hidden md:block"></div>

          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="md:w-1/2 md:px-8 mb-4 md:mb-0">
                <div
                  className={`bg-base-100/70 backdrop-blur-sm border border-base-300/50 rounded-2xl p-6 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="text-2xl font-bold text-primary mb-2">
                    {milestone.year}
                  </div>
                  <p className="text-base-content/80">{milestone.event}</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary border-4 border-base-100 shadow-lg z-10 hidden md:block"></div>
              <div className="md:w-1/2 md:px-8"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
