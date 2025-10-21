import { Swiper, SwiperSlide } from "swiper/react";
import heroImg1 from "../assets/images/hero-img-1.jpg";
import heroImg2 from "../assets/images/hero-img-2.jpg";
import heroImg3 from "../assets/images/hero-img-3.jpg";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
    <>
      <Swiper
        className="rounded-4xl"
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ dynamicBullets: true }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <img src={heroImg1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={heroImg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={heroImg3} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlider;
