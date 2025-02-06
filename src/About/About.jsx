import React from 'react'
import './About.css'
import ServicesHome from '../Home/ServicesHome'
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';


function About() {
  return (
    <section id='about'>
        <h3 className='about-title'>About UOMO</h3>
        <div className="about-img-container">
            <img src="\blog\blog-13.png" alt="" />
        </div>
        <div className="about-content-section-wrapper">
        <div className="about-content-section" >
            <h3>OUR STORY</h3>
        
      <strong style={{fontWeight: "500"}}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</strong>
        <br />
        <p style={{padding:"1rem 0rem", fontSize: "0.85rem", lineHeight: "2.3rem" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

        <div className="row">
          <div className="  col-lg-6">
            <strong style={{fontWeight: "500"}}>Our Mission</strong>
            <ul>
              <li style={{fontSize: "0.85rem", lineHeight: "2.3rem" }}>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li style={{fontSize: "0.85rem", lineHeight: "2.3rem" }}>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            </ul>
          </div>
          <div className="  col-lg-6" >
            <strong style={{fontWeight: "500"}}>Why choose product?</strong>
            <ul>
              <li style={{fontSize: "0.85rem", lineHeight: "2.3rem" }}>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li style={{fontSize: "0.85rem", lineHeight: "2.3rem" }}>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            </ul>
          </div>
        </div>
        <div className="row g-4">
            <div className="col-lg-6">
                <div className="about-company-img-container" style={{width: "100%", height: "100%"}}>
                    <img src="/about-2.png" alt="" />
                </div>
                
            </div>
            <div className="col-lg-6">
                <div  style={{display: "flex", height: "100%", flexDirection: "column", justifyContent: "center", backgroundColor: "var(--main-white-color)", width: "100%"}}>
            <strong>The Company</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras.</p>

                </div>

            </div>
        </div>
        
      </div>
      <ServicesHome about={true}/>

      
      </div>
      <div className="about-logo-swiper-container">
        <h3>Company Partners</h3>
      <Swiper
       breakpoints={{
        0: { slidesPerView: 3 },
        575: { slidesPerView: 3 },
        576: { slidesPerView: 5 },
        1079: { slidesPerView: 5 },
      }}
        spaceBetween={30}
        autoplay={{
          delay: 3000, // 100ms = 0.1 second
          disableOnInteraction: false,
      }}
      modules={[Autoplay]}
        className="about-logo-swiper"
      >
          <SwiperSlide>
            <img src="\about\brand2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="\about\brand3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="\about\brand4.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="\about\brand5.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="\about\brand6.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="\about\brand7.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="\about\brand2.png" alt="" />
          </SwiperSlide>
        
        </Swiper>

      </div>

    </section>
  )
}

export default About