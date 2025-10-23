import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import heroImg from "../assets/images/skills-hero-1.jpg";
import heroImg2 from "../assets/images/skills-hero-2.jpg";
import heroImg3 from "../assets/images/skills-hero-3.jpg";

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
          <img src={heroImg} alt="" />
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

/* import { Navigation, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        height={800}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot=""
          className="parallax-bg"
          style={{
            backgroundImage:
              "url(https://i.ibb.co.com/679cDNFD/skill-hero-2.jpg)",
          }}
          data-swiper-parallax="-33%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 1
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 2
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle 2
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem
              justo. Integer laoreet magna nec elit suscipit.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 3
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle 3
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider; */
