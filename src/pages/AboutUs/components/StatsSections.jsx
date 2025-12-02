import { useEffect, useState } from "react";

import { Users, Globe, Award, Clock } from "lucide-react";

const StatsSections = () => {
  const [stats, setStats] = useState({
    users: 0,
    skills: 0,
    exchanges: 0,
    countries: 0,
  });

  useEffect(() => {
    // Simulate counting animation
    const animateCounter = (target, setter, key) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setter((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, 30);
    };

    animateCounter(12500, setStats, "users");
    animateCounter(340, setStats, "skills");
    animateCounter(8500, setStats, "exchanges");
    animateCounter(45, setStats, "countries");
  }, []);

  return (
    <section className="py-12 bg-base-200/50">
      <div className="max-w-9/12 mx-auto px-4">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          data-aos="fade-up"
        >
          {[
            {
              icon: <Users className="w-8 h-8" />,
              value: stats.users,
              label: "Active Users",
              suffix: "+",
            },
            {
              icon: <Award className="w-8 h-8" />,
              value: stats.skills,
              label: "Skills Offered",
              suffix: "+",
            },
            {
              icon: <Clock className="w-8 h-8" />,
              value: stats.exchanges,
              label: "Skill Exchanges",
              suffix: "+",
            },
            {
              icon: <Globe className="w-8 h-8" />,
              value: stats.countries,
              label: "Countries",
              suffix: "+",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-base-100/70 backdrop-blur-sm border border-base-300/50 rounded-2xl p-6 text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-primary mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold poppins-font mb-2">
                {stat.value.toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-base-content/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSections;
