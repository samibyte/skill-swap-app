import { useEffect, useRef, useState } from "react";
import { User, Star, Calendar, CircleCheckBig, Mail } from "lucide-react";
import { useLoaderData, useParams } from "react-router";
import toast from "react-hot-toast";
import useAOS from "../hooks/useAOS";

const SkillsDetails = () => {
  useAOS({ duration: 1200, once: true });

  const { skillData } = useLoaderData();
  const { id } = useParams();

  const [skillDetails, setSkillDetails] = useState(null);

  const formRef = useRef();

  useEffect(() => {
    if (skillData && id) {
      const skillInfo = skillData.find((skill) => String(skill.skillId) === id);
      setSkillDetails(skillInfo);
    }
  }, [skillData, id]);

  if (!skillDetails) {
    return <h1 className="text-center py-20 text-xl">Loading...</h1>;
  }

  const {
    skillName,
    image,
    providerName,
    providerEmail,
    providerDescription,
    price,
    rating,
    slotsAvailable,
    description,
    whatYoullLearn,
    category,
  } = skillDetails;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    formRef.current.reset();
    toast.success(`You've booked a session with ${providerName}!`, {
      className: "min-w-96",
    });
  };

  return (
    <div className="relative bg-base-200 overflow-hidden">
      {/* Skill Hero */}
      <section
        className="relative  mx-auto sm:h-[30vh] md:h-[50vh] rounded-b-[80px] flex flex-col justify-end bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 rounded-b-[80px] to-transparent"></div>
        <div className="relative z-10 p-8 md:p-12 text-white max-w-6xl mx-auto w-full">
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-3">
            {category}
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {skillName}
          </h1>

          <div
            className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <User size={18} /> {providerName}
            </span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star size={18} className="fill-yellow-400 text-yellow-400" />
              {rating}
            </span>
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full font-semibold">
              ${price}/hr
            </span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Mail size={18} />
              {providerEmail}
            </span>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="p-8 md:p-16 max-w-4xl mx-auto space-y-8 bg-base-200 pb-32">
        <h2 className="text-2xl md:text-4xl font-bold" data-aos="fade-up">
          About this Skill
        </h2>

        <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
          <p className="text-lg leading-relaxed">{description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div
            className="bg-base-100 p-6 rounded-2xl shadow-lg"
            data-aos="zoom-out-up"
            data-aos-delay="200"
            data-aos-easing="ease-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="text-sm opacity-70 mb-2">Available Slots</div>
            <div className="text-3xl font-bold text-primary">
              {slotsAvailable}
            </div>
          </div>
          <div
            className="bg-base-100 p-6 rounded-2xl shadow-lg"
            data-aos="zoom-out-up"
            data-aos-delay="200"
            data-aos-easing="ease-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="text-sm opacity-70 mb-2">Rating</div>
            <div className="text-3xl font-bold text-primary">
              {rating} / 5.0
            </div>
          </div>
          <div
            className="bg-base-100 p-6 rounded-2xl shadow-lg"
            data-aos="zoom-out-up"
            data-aos-delay="200"
            data-aos-easing="ease-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="text-sm opacity-70 mb-2">Hourly Rate</div>
            <div className="text-3xl font-bold text-primary">${price}</div>
          </div>
        </div>

        <div className="space-y-4 mt-12" data-aos="fade-up">
          <h3 className="text-2xl font-bold">What You'll Learn</h3>
          <ul className="space-y-3 text-lg">
            {whatYoullLearn.map((outcome, i) => (
              <li
                key={i}
                className="flex items-center gap-3"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <CircleCheckBig width={18} />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 mt-12" data-aos="fade-up">
          <h3 className="text-2xl font-bold">About the Instructor</h3>
          <p className="text-lg leading-relaxed">{providerDescription}</p>
        </div>
      </section>

      {/* Booking Form*/}
      <div
        /* data-aos="zoom-in-up"
        data-aos-easing="ease-in-out"
        data-aos-delay="100"
        data-aos-mirror="true"
        data-aos-once="false" */
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div className="bg-base-100 shadow-2xl rounded-t-3xl p-6 md:p-8 max-w-4xl mx-auto border-t-4 border-primary">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <Calendar size={28} className="text-primary" /> Book a Session
          </h2>
          <form
            ref={formRef}
            onSubmit={handleBookingSubmit}
            className="flex flex-col gap-4"
          >
            <div>
              <label className="label">
                <span className="label-text font-medium">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Your Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Preferred Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Additional Notes</span>
              </label>
              <textarea
                name="notes"
                placeholder="Tell us about your goals or any specific topics you'd like to cover"
                className="textarea textarea-bordered w-full h-20"
              ></textarea>
            </div>

            <button className="btn btn-primary w-full mt-2 text-lg h-12">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SkillsDetails;
