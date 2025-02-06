import React, { useEffect } from "react";
import "../HomeCss/HeroSection.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function HeroSection() {
  useEffect(() => {
    const swiper = document.querySelector(".mySwiper-hero").swiper;
    
    // Initial trigger for animations on the active slide
    const initialActiveSlide = swiper.slides[swiper.activeIndex];
    initialActiveSlide.querySelectorAll(".hero-animation").forEach((content) => {
      content.classList.add("animate");
    });
  
    swiper.on("slideChangeTransitionStart", () => {
      document.querySelectorAll(".hero-animation").forEach((content) => {
        content.classList.remove("animate");
      });
    });
  
    swiper.on("slideChangeTransitionEnd", () => {
      swiper.slides[swiper.activeIndex]
        .querySelectorAll(".hero-animation")
        .forEach((content) => {
          content.classList.add("animate");
        });
    });
  }, []);
  

  return (
    <section id="HeroSection">
      <div className="hero-touch-disable-wraper">
      </div>



      <div className="hero-line-wrapper">


      <div className="hero-img-wrapper">

      {/* upper */}
      <Swiper
      direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          el: '.hero-pagination',

          clickable: false,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper-hero"
        allowTouchMove={false} // Disable touch swiping
        mousewheel={false}     // Disable mousewheel swiping
      >
        
        <SwiperSlide>

      <div className="hero-section-container ">
        <div className="hero-right-section  ">
          {/* new trends */}
          
          <div className="new-trends-container hero-animation">
            <h6>new trend</h6>
          </div>
          {/* hero-title */}
          <div className="hero-title-container hero-animation ">
            <h4>
              SUmmer Sales stylish
              <br className="br-display"/>
              <span> Woman</span>
            </h4>
          </div>
          <div className="button-container hero-button hero-animation">
            <p className="button-with-line">discover now</p>
          </div>
        </div>

        <img src="\hero-hero.jpg" alt="" className="hero-animation" />
      </div>

      
        </SwiperSlide>

        
        <SwiperSlide>

      <div className="hero-section-container ">
        <div className="hero-right-section  ">
          {/* new trends */}
          
          <div className="new-trends-container hero-animation">
            <h6>summer 2025</h6>
          </div>
          {/* hero-title */}
          <div className="hero-title-container hero-animation hero-title-container-2">
            <h4>
              hello new season
              <br className="br-display"/>
              <span> Woman</span>
            </h4>
            <p className="br-display">limited time offer -up to 60% off & free shipping</p>
          </div>
          <div className="button-container hero-button hero-animation">
            <p className="button-with-line">discover now</p>
          </div>
        </div>

        <img src="\hero-hero-2.jpg" alt="" className="hero-animation" />
      </div>

      
        </SwiperSlide>
      </Swiper>
      <div className="hero-pagination"></div>

      
      </div>
      </div>



    </section>
  );
}

export default HeroSection;

