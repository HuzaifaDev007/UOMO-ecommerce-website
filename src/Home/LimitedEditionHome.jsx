import React, { useEffect, useRef, useState } from "react";
import "../HomeCss/LimitedEditionHome.css";
import data from "../mainpage-LimitedData.js";
import ProductCard from "../component/ProductCard.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function LimitedEditionHome(displayDataInfo) {

  const modulesArray = [Pagination, Navigation];


  if (displayDataInfo?.autoplay) 
  { 
      modulesArray.push(Autoplay); 

  }


  const [displayData, setDisplayData] = useState(null);

  useEffect(() => {
    const products = data.map((product, index) => (
      <SwiperSlide key={index}>
        <ProductCard product={product} />
      </SwiperSlide>
    ));

    setDisplayData(products);
  }, []);

  

  return (
    <section id="LimitedEditionHome">
      <div className="limitedEditionHome-container">
        <div className="limitedEditionHome-title-container">
          <h5 style={{ textAlign: displayDataInfo?.titleText ? "left" : "center" }}>
          {`${displayDataInfo?.titleText ? displayDataInfo.titleText.split(' ')[0] : "Limited"}`} <span>
          {`${displayDataInfo?.titleText ? displayDataInfo.titleText.split(' ')[1] : "Edition"}`}
          </span>
          </h5>
        </div>

        <div className="limitedEdition-product-container">
          <div className="prev-arrow-div swiper-button-prev"></div>
          <div className="next-arrow-div swiper-button-next"></div>

          <Swiper
            breakpoints={{
              0: { slidesPerView: 2 },
              786: { slidesPerView: 3 },
              1080: { slidesPerView: 4 },
              1079: { slidesPerView: 4 },
            }}
            // slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            modules={modulesArray 
              
            }
            className="mySwiper-limited"
          >
            {displayData}
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default LimitedEditionHome;
