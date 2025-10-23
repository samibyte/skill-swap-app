const steps = [
  { title: "Step 1", description: "Sign up to SkillSwap" },
  { title: "Step 2", description: "Browse skills nearby" },
  { title: "Step 3", description: "Connect with providers" },
  { title: "Step 4", description: "Learn and exchange" },
];

const HowItWorks = () => {
  return (
    <div className="relative h-[200vh] bg-gray-100 flex justify-center items-start pt-40">
      <div className="sticky top-20 flex flex-col gap-20">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg w-96 text-center"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <h2 className="text-xl font-bold mb-2">{step.title}</h2>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
