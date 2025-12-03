import { Target } from "lucide-react";

const OurStory = () => {
  return (
    <section className="py-16">
      <div className="max-w-9/12 mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold poppins-font mb-6">
              Our <span className="text-secondary">Story</span>
            </h2>
            <div className="space-y-4 text-base-content/80">
              <p>
                SkillSwap was born from a simple observation: everyone has
                something valuable to teach, and everyone has something new to
                learn. Yet traditional education systems often miss the
                opportunity for peer-to-peer knowledge exchange.
              </p>
              <p>
                Founded in 2021 by a team of educators, technologists, and
                community builders, we set out to create a platform where
                knowledge flows freely in all directions. Where a graphic
                designer in Tokyo could learn Spanish from a teacher in Mexico,
                while teaching web design to a student in Canada.
              </p>
              <p>
                Today, we're proud to have built a global community where
                thousands of members regularly exchange skills, build meaningful
                connections, and grow together in ways they never thought
                possible.
              </p>
            </div>
          </div>
          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <div className="bg-linear-to-br from-primary/20 to-secondary/20 rounded-3xl p-8">
              <div className="bg-base-100 rounded-2xl p-6 shadow-lg border border-base-300">
                <Target className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                <p className="text-base-content/80">
                  To democratize access to knowledge by empowering everyone to
                  both teach and learn, creating a world where skills are
                  shared, not hoarded, and growth is a collective journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
