import React, { useContext } from "react";
import "../css/ProductCard.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from "react-router";


import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { CartContext } from "../Context/CartContext";


function ProductCard({product, swiper}) {
  const {setLocalStorageData} = useContext(CartContext)

  const localStorageCart = JSON.parse(localStorage.getItem("cart")) || [];   
  const existingCard = localStorageCart.find((cartItem) => cartItem.id === product.id)
  
  

    const handleCartOutside = ()=> {
      console.log(product)
      const UpDateProductQuantity = {
        ...product,
        customerSelectedQuantity: 1
      }
      
      console.log(UpDateProductQuantity)
     
     if(existingCard) {
      console.log("existed")
     }
     else
     {
  
      localStorageCart.push(UpDateProductQuantity);
      console.log(localStorageCart)
      localStorage.setItem('cart', JSON.stringify(localStorageCart))
      setLocalStorageData(localStorageCart)
     }
  
    }
  



  return (
    <section id="ProductCard">
      <div className="product-card-img-container">
        {swiper ? 
        (<>
        <div className="product-card-swiper-container">
        <Swiper navigation={true} modules={[Navigation]} className="swiper-product-card">
        <SwiperSlide><img src={product.images.firstImage} alt="" className="product-card-img-one-swiper" /></SwiperSlide>
        <SwiperSlide><img src={product.images.secondImage} alt="" className="product-card-img-two-swiper"/></SwiperSlide>
        </Swiper>

        </div>
        </>) 
        : 
        (
          <>
          
        <img src={product.images.firstImage} alt="" className="product-card-img-one"/>
        <img src={product.images.secondImage} alt="" className="product-card-img-two-opacity-img"/>
          </>
        )}
        
      <div className="product-card-addToCart-container"
      type="button"
      data-bs-toggle={!existingCard ? "offcanvas" : undefined} 
      data-bs-target={!existingCard ? "#offcanvasShopping" : undefined} 
      aria-controls="offcanvasShopping"
      onClick={handleCartOutside}
      >
            <p>{existingCard ? 'Already Added' : "add to cart"}</p>
        </div>


      </div>


      <div className="product-card-info-container">
        <div className="product-card-category-wishList-container">
          <p>{product.category}</p>
          <i class="ri-heart-line"></i>
        </div>
        <div className="product-card-title-price-container">
          <h6><NavLink to={`/shop/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{product.title}</NavLink></h6>
          <p>${product.price}</p>
        </div>
        <div className="product-card-reviews-container">
          <div className="reviews-stars-container">
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
          </div>
          <p>{product.reviewCount ? `${product.reviewCount} reviews` : ""}</p>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
