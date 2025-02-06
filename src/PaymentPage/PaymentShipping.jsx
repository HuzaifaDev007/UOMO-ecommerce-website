import React from "react";
import SubtotalPayment from "../component/SubtotalPayment";

function PaymentShipping() {
  return (
    <div className="payment-shipping-container">
      <div className="row g-4">
        <div className="col-lg-8 col-sm-12">
          <div className="payment-shipping-main-container-wrapper">
            <h5>BILLING DETAILS</h5>
            <div className="payment-shipping-main-container">
              <div className="shipping-fistname-lastname-container">
                <div className="username-input-container">
                  <input type="text" placeholder="" />
                  <label className="form-label" for="usename">
                    First Name
                  </label>
                </div>
                <div className="username-input-container">
                  <input type="text" placeholder="" />
                  <label className="form-label" for="usename">
                    Last Name
                  </label>
                </div>
              </div>
              <div className="username-input-container">
                  <input type="text" placeholder="" />
                  <label className="form-label" for="usename">
                    Company Name (optional)
                  </label>
                </div>
                <div className="username-input-container">
                  <input type="select" placeholder="" />
                  <label className="form-label" for="usename">
                    Username or email address *
                  </label>
                </div>
                <div className="username-input-container">
                  <input type="text" placeholder="" />
                  <label className="form-label" for="usename">
                    Street Address *
                  </label>
                </div>
                <div className="username-input-container">
                  <input type="text" placeholder="" />
                  <label className="form-label" for="usename">
                    Town / City *
                  </label>
                </div>
                <div className="username-input-container">
                  <input type="text" placeholder="" />
                  <label className="form-label" for="usename">
                    Postcode / ZIP *
                  </label>
                </div>
                <div className="username-input-container">
                  <input type="text" placeholder="" />
                  <label className="form-label" for="usename">
                    Province *
                  </label>
                </div>
                <div className="username-input-container">
                  <input type="text" placeholder="" />
                  <label className="form-label" for="usename">
                  Your Phone *
                  </label>
                </div>
                <div className="username-input-container">
                  <input type="text" placeholder="" />
                  <label className="form-label" for="usename">
                  Your Mail *
                  </label>
                </div>

                <div className="remember-me-container">
       <input type='checkbox' />

       <p style={{color: "var(--dark-black-color)" , fontWeight: "400"}}>CREATE AN ACCOUNT?</p>
       
       
                </div>

                <div className="remember-me-container">
       <input type='checkbox' />

       <p style={{color: "var(--dark-black-color)" , fontWeight: "400"}}>SHIP TO A DIFFERENT ADDRESS?</p>
       
       
                </div>

                <div className="payment-textarea-container">
                  <textarea name="" id="" placeholder="Order Notes (optional)"></textarea>
                </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4  col-sm-12">
          <div className="payment-shipping-side-container">
            <SubtotalPayment/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentShipping;
