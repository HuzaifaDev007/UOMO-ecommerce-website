import React from 'react'
import '../HomeCss/ServicesHome.css'

function ServicesHome() {
  return (
    <section id='ServicesHome' >
        
        <div className="services-custom-row">

            <div className="services-custom-3">
                <div className="services-home-container">
                <i class="ri-truck-line"></i>
                <h6>Fast And Free Delivery</h6>
                <p>Free delivery for all orders over $140</p>

                </div>
            </div>
            <div className="services-custom-3">
                <div className="services-home-container">
<i class="ri-customer-service-2-line"></i>
                <h6>24/7 Customer Support</h6>
                <p>Friendly 24/7 customer support</p>

                </div>
            </div>
            <div className="services-custom-3">
                <div className="services-home-container">
                <i class="ri-shield-check-line"></i>
                <h6>Money Back Guarantee</h6>
                <p>We return money within 30 days</p>

                </div>
            </div>

        </div>
    </section>
  )
}

export default ServicesHome