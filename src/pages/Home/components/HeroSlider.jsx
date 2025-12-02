import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Users, Star, BookOpen } from "lucide-react";

import heroImg from "../../../assets/images/skills-hero-1.jpg";
import heroImg2 from "../../../assets/images/skills-hero-2.jpg";
import heroImg3 from "../../../assets/images/skills-hero-3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// static data
const slides = [
  {
    image: heroImg,
    title: "Swap Skills, Not Bills",
    subtitle:
      "Trade your expertise and learn something new - because learning should never be a luxury.",
  },
  {
    image: heroImg2,
    title: "Learn, Teach, Repeat",
    subtitle:
      "Everyone has something to offer. Discover, connect, and grow together in Skill Swap.",
  },
  {
    image: heroImg3,
    title: "Build Connections, Not Just Skills",
    subtitle:
      "Join a network that values curiosity, creativity, and shared growth.",
  },
];

const HeroSlider = () => {
  return (
    <div className="relative w-full h-[30vh] md:h-[60vh] rounded-4xl overflow-hidden">
      <Swiper
        grabCursor={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination, Autoplay]}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section
              className="relative mx-auto h-full flex flex-col justify-end bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
              data-aos="fade-in"
            >
              <div className="absolute inset-0 bg-linear-to-t from-neutral/85 via-black/50 to-black/10 rounded-4xl" />

              <div className="relative text-left z-10 p-4 md:p-12 text-white max-w-6xl mx-auto w-full">
                <h1
                  className="text-3xl md:text-6xl font-bold mb-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {slide.title}
                </h1>

                <p
                  className="text-sm md:text-xl text-white/90 max-w-2xl mb-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {slide.subtitle}
                </p>

                <div
                  className="hidden md:flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Users size={18} /> 4700+ Learners
                  </span>
                  <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Star
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    4.9 Rating
                  </span>
                  <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <BookOpen size={18} /> 6300+ Skills Shared
                  </span>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
