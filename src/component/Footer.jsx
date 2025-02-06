import React from 'react'
import { NavLink } from 'react-router'

import '../css/Footer.css'
function Footer() {
  return (
    <section id='Footer'>
        <div className="footer-container">
            <div className="footer-custom-row">
                <div className="footer-25-perc footer-100-perc">
                    <div className="footer-company-info-container">

                        <div className="footer-logo">
                        <NavLink to='/' style={{ textDecoration: 'none', color: 'inherit' }}><img src="/logo.png" alt="" /></NavLink>
                        </div>
                        <p>1418 River Drive, Suite 35 Cottonhall, CA 9622 United States</p>
                        
                        <div className="footer-company-contact-info-container">
                        <h6>sale@uomo.com</h6>
                        <h6>+1 246-345-0695</h6>
                        </div>

                        <div className="footer-media-container">
                        <i class="ri-facebook-line" style={{cursor: "pointer"}}></i>
                        <i class="ri-twitter-fill"></i>
                        <i class="ri-instagram-fill"></i>
                        <i class="ri-youtube-fill"></i>
                        <i class="ri-pinterest-fill"></i>
                        </div>
                    </div>
                    
                </div>
                <div className="footer-16-perc footer-33-perc">
                    <div className="footer-page-info-container">
                        <div className="footer-page-title-container">
                            <h5>Company</h5>
                        </div>
                        <ul>
                        <li className="underline-animation footer-btn"><NavLink  to={'about'} style={{ textDecoration: 'none', color: 'inherit' }}>About Us </NavLink></li>
                        <li className="underline-animation footer-btn"><NavLink  to={'about'} style={{ textDecoration: 'none', color: 'inherit' }}>Careers</NavLink></li>
                        <li className="underline-animation footer-btn"><NavLink  to={'about'} style={{ textDecoration: 'none', color: 'inherit' }}>Affiliates</NavLink></li>
                        <li className="underline-animation footer-btn"><NavLink  to={'blogs'} style={{ textDecoration: 'none', color: 'inherit' }}>Blog</NavLink></li>
                        <li className="underline-animation footer-btn"><NavLink  to={'contact'} style={{ textDecoration: 'none', color: 'inherit' }}>Contact us</NavLink></li>
                    </ul>
                    </div>
                    

                </div>
                
                <div className="footer-16-perc footer-33-perc">
                    <div className="footer-page-info-container">
                        <div className="footer-page-title-container">
                            <h5>Shop</h5>
                        </div>
                        <ul>
                        <li className="underline-animation footer-btn"><NavLink  to={'shop'} style={{ textDecoration: 'none', color: 'inherit' }}>New Arrivals</NavLink></li>
                        <li className="underline-animation footer-btn"><NavLink  to={'shop'} style={{ textDecoration: 'none', color: 'inherit' }}>Accessories</NavLink></li>
                        <li className="underline-animation footer-btn"><NavLink  to={'shop'} style={{ textDecoration: 'none', color: 'inherit' }}>Men</NavLink></li>
                        <li className="underline-animation footer-btn"><NavLink  to={'shop'} style={{ textDecoration: 'none', color: 'inherit' }}>Women</NavLink></li>
                        <li className="underline-animation footer-btn"><NavLink  to={'shop'} style={{ textDecoration: 'none', color: 'inherit' }}>Shop All</NavLink></li>
                    </ul>
                    </div>
                    

                </div>
                
                <div className="footer-16-perc footer-100-perc">
                    <div className="footer-page-info-container">
                        <div className="footer-page-title-container">
                            <h5>Help</h5>
                        </div>
                        <ul>
                        <li className="underline-animation footer-btn"><NavLink  to={'contact'} style={{ textDecoration: 'none', color: 'inherit' }}>Customer Service</NavLink></li>
                        <li className="underline-animation footer-btn"><NavLink  to={'shop'} style={{ textDecoration: 'none', color: 'inherit' }}>My Account</NavLink></li>
                        <li className="underline-animation footer-btn"><NavLink  to={'contact'} style={{ textDecoration: 'none', color: 'inherit' }}>Find a Store</NavLink></li>
                        <li className="underline-animation footer-btn"><NavLink  to={'contact'} style={{ textDecoration: 'none', color: 'inherit' }}>Legal & Privacy</NavLink></li>
                        <li className="underline-animation footer-btn"><NavLink  to={'contact'} style={{ textDecoration: 'none', color: 'inherit' }}>Contacts</NavLink></li>
                        <li className="underline-animation footer-btn"><NavLink  to={'shop'} style={{ textDecoration: 'none', color: 'inherit' }}>Gift Card</NavLink></li>
                    </ul>
                    </div>
                    

                </div>
                
                <div className="footer-25-perc footer-100-perc">

                    <div className="footer-subscribe-container">
                    <div className="footer-subscribe-title-container">
                            <h5>Subscribe</h5>
                        </div>
                        <p>Be the first to get the latest news about trends, promotions, and much more!</p>

                        <div className="footer-info-container">
                            <input type="text" placeholder='You email' />
                            <button type="submit">Submit</button>
                        </div>
                        <div className="footer-payment-container">
                            <p>Secure payments</p>
                            <div className="footer-payment-companies-container">
                                <img src="\payment-options.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    

                </div>

            </div>

            <div className="footer-copyright-container">
                <div className="footer-line-container"></div>
                <p>©2025 Uomo</p>
            </div>
            
        </div>
    </section>
  )
}

export default Footer