import useAOS from "../hooks/useAOS";

const steps = [
  {
    step: 1,
    title: "Find & Connect",
    description:
      "Discover skilled and like-minded people. Connect with them to begin your skill swapping journey.",
    images: [
      "https://i.ibb.co.com/dszYVQBJ/6187354.jpg",
      "https://i.ibb.co.com/dszYVQBJ/6187354.jpg",
      "https://i.ibb.co.com/dszYVQBJ/6187354.jpg",
    ],
  },
  {
    step: 2,
    title: "Plan & Exchange",
    description:
      "Discuss your learning goals and set sessions or projects for exchanging the skills you both value.",
    images: [
      "https://i.ibb.co.com/dszYVQBJ/6187354.jpg",
      "https://i.ibb.co.com/dszYVQBJ/6187354.jpg",
    ],
  },
  {
    step: 3,
    title: "Learn & Teach",
    description:
      "Attend sessions, share knowledge, and grow together through real collaboration.",
    images: [
      "https://i.ibb.co.com/dszYVQBJ/6187354.jpg",
      "https://i.ibb.co.com/dszYVQBJ/6187354.jpg",
      "https://i.ibb.co.com/dszYVQBJ/6187354.jpg",
    ],
  },
];

const HowItWorks = () => {
  useAOS({ duration: 900, once: true });
  return (
    <section className="bg-base-100 py-20 px-4 md:px-8 text-base-content">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2
          className="text-3xl md:text-4xl font-bold text-primary"
          data-aos="fade-up"
        >
          How <span className="text-secondary">SkillSwap</span> Works
        </h2>
        <p
          className="mt-3 text-base md:text-lg text-base-content/70"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          A simple, scroll-through journey of how you exchange skills.
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-20 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <StickyStep key={index} {...step} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
};

const StickyStep = ({ step, title, description, images, reverse }) => {
  return (
    <div
      className={`relative flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } gap-8 md:gap-20 min-h-[120vh]`}
    >
      {/* Sticky Text Side */}
      <div className="md:w-1/2 sticky top-1/8 md:top-1/4 self-start h-fit">
        <div
          className="bg-base-200/60 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-base-300"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-secondary-content font-bold text-lg shadow-sm">
              {step}
            </div>
            <h3 className="text-2xl font-semibold text-primary">{title}</h3>
          </div>
          <p className="text-base md:text-lg text-base-content/70 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Scrolling Images Side */}
      <div className="md:w-1/2 relative">
        {images.map((src, i) => (
          <div
            key={i}
            className="mb-12"
            data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}
            data-aos-delay={i * 150}
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <img
              src={src}
              alt={`${title}-${i}`}
              className="rounded-2xl shadow-lg border border-base-300 w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
