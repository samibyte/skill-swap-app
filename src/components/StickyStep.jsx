const StickyStep = ({ step, reverse }) => {
  const { title, description, images } = step;

  return (
    <div
      className={`relative flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } gap-8 md:gap-20 min-h-[120vh]`}
    >
      {/* Sticky Text Side */}
      <div className="md:w-1/2 sticky top-[10%] md:top-[25%] self-start h-fit">
        <div
          className="bg-base-200/60 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-base-300"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-secondary-content font-bold text-lg shadow-sm">
              {step.step}
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

export default StickyStep;
