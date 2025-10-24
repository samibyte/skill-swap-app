import useAOS from "../hooks/useAOS";
import StickyStep from "./StickyStep";

const steps = [
  {
    step: 1,
    title: "Find & Connect",
    description:
      "Discover skilled and like-minded people. Connect with them to begin your skill swapping journey.",
    images: [
      "https://i.ibb.co/nsKXj72Y/gradient-career-cushioning-illustration-52683-140257.jpg",
      "https://i.ibb.co/MDJSjDfD/people-carrying-different-icons-related-online-media-53876-66106.jpg",
      "https://i.ibb.co/yBhvDX6w/gradient-asynchronous-work-illustration-52683-140248.jpg",
    ],
  },
  {
    step: 2,
    title: "Plan & Exchange",
    description:
      "Discuss your learning goals and set sessions or projects for exchanging the skills you both value.",
    images: [
      "https://i.ibb.co/dszYVQBJ/6187354.jpg",
      "https://i.ibb.co/5N90ffQ/flat-design-stakeholders-illustration-23-2149337646.jpg",
    ],
  },
  {
    step: 3,
    title: "Learn & Teach",
    description:
      "Attend sessions, share knowledge, and grow together through real collaboration.",
    images: [
      "https://i.ibb.co/qMxmLq7d/webinar-internet-lesson-distance-university-tutor-educator-online-learning-seniors-online-courses-se.jpg",
      "https://i.ibb.co/fY6jqHM5/student-centered-education-knowledge-gaining-remote-graduation-bite-sized-learning-learn-own-pace-fl.jpg",
      "https://i.ibb.co/NkcmHq4/men-with-bulb-creative-characters-603843-3637.jpg",
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
          How <span className="text-secondary">Skill Swap</span> Works
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
          <StickyStep key={index} step={step} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
