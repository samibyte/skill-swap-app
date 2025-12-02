import { ArrowRightLeft, Users, TrendingUp, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import useAOS from "../../../hooks/useAOS";

// stats data
const stats = [
  { icon: Users, value: "2,500+", label: "Active Swappers" },
  { icon: ArrowRightLeft, value: "5,200+", label: "Skills Exchanged" },
  { icon: TrendingUp, value: "98%", label: "Satisfaction Rate" },
];

const SwapsInAction = () => {
  useAOS({ duration: 1200, once: false });
  const [recentSwaps, setRecentSwaps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSwaps = async () => {
      try {
        const res = await fetch("/recentSwaps.json");
        const data = await res.json();
        setRecentSwaps(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSwaps();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-base-100">
      <div className="container mx-auto max-w-9/12">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Swaps in <span className="text-secondary">Action</span>
          </h2>
          <p className="text-lg md:text-xl opacity-70 max-w-2xl mx-auto">
            See how our community is exchanging skills and growing together
          </p>
        </div>

        {/* stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="bg-base-200 rounded-2xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-once={false}
              data-aos-delay={idx * 100}
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base opacity-70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* recent swaps */}
        <div className="space-y-6">
          <h3
            className="text-2xl md:text-3xl font-bold text-center mb-8"
            data-aos="fade"
          >
            Recent Skill Exchanges
          </h3>

          {loading ? (
            <p className="text-center opacity-70">Loading recent swaps...</p>
          ) : (
            <div className="grid gap-6">
              {recentSwaps.map((swap, index) => (
                <div
                  key={swap.id}
                  className="bg-base-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                >
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* user 1 */}
                    <div className="flex flex-col items-center text-center flex-1">
                      <div className="avatar mb-3">
                        <div className="w-16 md:w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={swap.user1.avatar} alt={swap.user1.name} />
                        </div>
                      </div>
                      <h4 className="font-bold text-lg">{swap.user1.name}</h4>
                      <span className="badge badge-primary badge-lg mt-2">
                        {swap.user1.skill}
                      </span>
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="bg-primary/10 p-4 rounded-full">
                        <ArrowRightLeft className="w-8 h-8 text-primary animate-pulse" />
                      </div>
                    </div>

                    {/* user 2 */}
                    <div className="flex flex-col items-center text-center flex-1">
                      <div className="avatar mb-3">
                        <div className="w-16 md:w-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                          <img src={swap.user2.avatar} alt={swap.user2.name} />
                        </div>
                      </div>
                      <h4 className="font-bold text-lg">{swap.user2.name}</h4>
                      <span className="badge badge-secondary badge-lg mt-2">
                        {swap.user2.skill}
                      </span>
                    </div>
                  </div>

                  {/* time and status */}
                  <div className="flex flex-col md:flex-row items-center justify-between mt-6 pt-6 border-t border-base-300 gap-4">
                    <div className="flex items-center gap-2 text-sm opacity-70">
                      <Clock className="w-4 h-4" />
                      <span>{swap.time}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm opacity-70">
                        {swap.location}
                      </span>
                      <div className="badge badge-success gap-2">
                        <div className="w-2 h-2 rounded-full bg-success-content"></div>
                        Completed
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button className="btn btn-primary btn-lg px-8 text-lg flex items-center justify-center gap-2 mx-auto">
            Start Your First Swap
            <ArrowRightLeft className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SwapsInAction;
