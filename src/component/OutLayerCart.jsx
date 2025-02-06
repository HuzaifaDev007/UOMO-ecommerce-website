import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate, useOutlet } from 'react-router';
import '../PaymentPage/PaymentPage.css'
import { CartContext } from '../Context/CartContext.js';

function OutLayerCart() {
    // const {cart} = useContext(CartContext)
    // console.log('testing context', cart)
   
    const navigate = useNavigate()
    const [paymentPageContainerOpen, setPaymentPageContainerOpen] = useState("cart")
    
    const handleNavigation = (path, btnClickDetail)=> {
        navigate(path)
        setPaymentPageContainerOpen(btnClickDetail); 


    }

  return (
    
    <section id='PaymentPage'>
        <div className="payment-page-title-btn-container">
            <h4>{paymentPageContainerOpen}</h4>
            <div className="payment-page-btn-container-wrapper">
                <div className={`payment-page-btn-container ${paymentPageContainerOpen === "cart" || paymentPageContainerOpen === "shopping and checkout" || paymentPageContainerOpen === "order confirmed" ? "payment-progress-bar payment-progress-bar-mobile" : ""}`} >
                    <div className="payment-page-btn-info-container" onClick={()=> handleNavigation("", 'cart')}>
                        <h6>01</h6>
                        <div className="payment-page-btn-details-container">
                            <h6>SHOPPING BAG</h6>
                            <p>Manage Your Items List</p>
                        </div>

                    </div>

                </div>
                <div className={`payment-page-btn-container ${paymentPageContainerOpen === "shopping and checkout" || paymentPageContainerOpen === "order confirmed" ? "payment-progress-bar payment-progress-bar-mobile" : ""}`} >
                    <div className="payment-page-btn-info-container">
                        <h6>02</h6>
                        <div className="payment-page-btn-details-container" onClick={()=> handleNavigation('shoppingpage', 'shopping and checkout')}>
                            <h6>SHIPPING AND CHECKOUT</h6>
                            <p>Checkout Your Items List</p>
                        </div>

                    </div>

                </div>
                <div className={`payment-page-btn-container ${paymentPageContainerOpen === 'order confirmed' ? "payment-progress-bar payment-progress-bar-mobile" : ""}`}  >
                    <div className="payment-page-btn-info-container">
                        <h6>03</h6>
                        <div className="payment-page-btn-details-container" onClick={()=> handleNavigation('confirmation', 'order confirmed')}>
                            <h6>CONFIRMATION</h6>
                            <p>Review And Submit Your Order</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>

        <Outlet/>


    </section>
  )
}

export default OutLayerCart