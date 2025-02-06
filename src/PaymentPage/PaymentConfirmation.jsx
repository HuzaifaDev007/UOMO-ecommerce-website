import React from 'react'
import SubtotalPayment from '../component/SubtotalPayment'

function PaymentConfirmation() {
  return (
    <div className="payment-conformation-width-wrapper">
    <div className='payment-confirmation-container-wrapper'>
      <div className="payment-confimation-container">
        <a href="">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#FFFFFF" d="m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83z"/></svg>
        </a>
        <h3>Your order is completed!</h3>
        <h6>Thank you. Your order has been received.</h6>
      </div>

      <div className="payment-confimation-order-number-container">
        <div className="payment-confimation-info-container">
          <label>Order Number</label>
          <span>13119</span>
        </div>
        <div className="payment-confimation-info-container">
          <label>Date</label>
          <span>21/01/2025</span>
        </div>
        <div className="payment-confimation-info-container">
          <label>Total</label>
          <span>$433</span>
        </div>
        <div className="payment-confimation-info-container">
          <label>Payment Method</label>
          <span>Direct Bank Transfer</span>
        </div>
        
      </div>
      <SubtotalPayment/>
    </div>
    </div>
  )
}

export default PaymentConfirmation