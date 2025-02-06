import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Thumbs,
  FreeMode,
  EffectFade,
} from "swiper/modules";

import { Tooltip } from "bootstrap";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

function ProductSingleImages({ data, productDetails }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeIndex, setActiveIndex] = useState(0);
  const [productImgs, setProductImgs] = useState(null);
  const [zoomImgs, setZoomImgs] = useState(null);

  let options = {
    dataSource: [
      // simple image
      {
        src: "/product_0.jpg",
        width: "647",
        height: "647",

        alt: "image 1",
      },

      {
        src: "/product_0-1.jpg",
        width: "647",
        height: "647",

        alt: "image 2",
      },

      // responsive image
      {
        srcset: "",
        src: "/product_0-2.jpg",
        width: "647",
        height: "647",

        alt: "image 3",
      },
      {
        srcset: "",
        src: "/product_0-3.jpg",
        width: "647",
        height: "647",

        alt: "image 3",
      },
    ],

    showHideAnimationType: "zoom",
    pswpModule: () => import("photoswipe"),
    openAnimationDuration: 400, // Duration in milliseconds
    closeAnimationDuration: 400, // Duration in milliseconds
  };

  useEffect(() => {
    const tooltipTriggerList = Array.from(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new Tooltip(tooltipTriggerEl, {
        customClass: "custom-tooltip", // Attach custom class
      });
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (productDetails) {
      const swiperImgs = productDetails.images;

      const swiperimg = Object.values(swiperImgs).map((value, index) => (
        <SwiperSlide key={index}>
          <img src={value} />
        </SwiperSlide>
      ));
      setProductImgs(swiperimg);

      const photoSwipeImgs = Object.values(swiperImgs).map((value, index) => ({
        src: value,
        width: "647",
        height: "647",

        alt: `img ${index}`,
      }));
      setZoomImgs(photoSwipeImgs)

    }

  }, [productDetails]);

  useEffect(()=> {

    options = {
      dataSource: zoomImgs,

      showHideAnimationType: "zoom",
      pswpModule: () => import("photoswipe"),
      openAnimationDuration: 400, // Duration in milliseconds
      closeAnimationDuration: 400, // Duration in millisecond
    };


  },[zoomImgs])

  const handleZoomProduct = () => {
    const pswp = new PhotoSwipeLightbox(options);
    pswp.init(); // initializing PhotoSwipe core adds it to DOM
    options.index = 0; // defines start slide index

    pswp.loadAndOpen(activeIndex);
  };

  return (
    <div className="product-single-page-image-container">
      <div className="product-single-multiple-page-container">
        <Swiper
          direction={isMobile ? "horizontal" : "vertical"}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper-small"
        >
          {/* <SwiperSlide>
            <img src="\product_0.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="\product_0-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="\product_0-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="\product_0-3.jpg" />
          </SwiperSlide> */}
          {productImgs}
        </Swiper>
      </div>

      <div className="product-single-page-main-image-container">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={{
            nextEl: ".swiper-button-next-product", // Reference to custom next button
            prevEl: ".swiper-button-prev-product", // Reference to custom previous button
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex); // Updates active index when the slide changes
          }}
        >
          {/* <SwiperSlide>
  <img src="\product_0.jpg" />
</SwiperSlide>
<SwiperSlide>
  <img src="\product_0-1.jpg" />
</SwiperSlide>
<SwiperSlide>
  <img src="\product_0-2.jpg" />
</SwiperSlide>
<SwiperSlide>
  <img src="\product_0-3.jpg" />
</SwiperSlide>  */}

          {productImgs}

          <div className="swiper-button-prev-product">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z"
                />
              </svg>{" "}
            </a>
          </div>
          <div className="swiper-button-next-product">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z"
                />
              </svg>
            </a>
          </div>
        </Swiper>

        {/* <img src="\product_0.jpg" alt="" /> */}

        <div
          className="swiper-zoom-btn"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Zoom"
          data-cropped="true"
          onClick={handleZoomProduct}
        >
          <a href="" onClick={(e) => e.preventDefault()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m15 3l2.3 2.3l-2.89 2.87l1.42 1.42L18.7 6.7L21 9V3zM3 9l2.3-2.3l2.87 2.89l1.42-1.42L6.7 5.3L9 3H3zm6 12l-2.3-2.3l2.89-2.87l-1.42-1.42L5.3 17.3L3 15v6zm12-6l-2.3 2.3l-2.87-2.89l-1.42 1.42l2.89 2.87L15 21h6z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductSingleImages;
