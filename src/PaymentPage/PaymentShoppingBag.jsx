import React, { useContext, useEffect, useState } from "react";
import ShoppingBagCard from "../component/ShoppingBag";
import { CartContext } from '../Context/CartContext.js';
function PaymentShoppingBag() {
  const {localStorageData, handleCartCancle, handleUpdateQunaityCart} = useContext(CartContext)
   const [cartDisplayData, setCartDisplayData] = useState(null)

   useEffect(()=> {
    const displayData = localStorageData.map((cartData)=> <ShoppingBagCard filterCart={false} cartData={cartData} key={cartData.id} handleCartCancle={handleCartCancle} handleUpdateQunaityCart={handleUpdateQunaityCart}/>  )
    setCartDisplayData(displayData)
    
   },[localStorageData])
        
     
  return (
    <>
    {cartDisplayData ? (
      
    <div className="payment-shopping-bag">
    <div className="row g-4">
      <div className="col-lg-8 col-sm-12">
        <div className="payment-shopping-bag-products-container">
          <div className="products-container-header-container">
            <h6>Product</h6>
            <h6>Price</h6>
            <h6>Quantity</h6>
            <h6 className="header-subtotal">
              Subtotal<span></span>
            </h6>
          </div>
          <div className="payment-shopping-bag-container">
            {cartDisplayData}
            
          </div>

          <div className="payment-shopping-bag-coupon-upadate-container">
            <label>
              <input type="text" />
              <button>Apply Coupon</button>
            </label>

            <div
              className="check-out-container"
              style={{
                width: "200px",
                backgroundColor: "#E4E4E4",
                border: "2px solid #E4E4E4",
              }}
            >
              <p style={{ color: "var(--dark-black-color)" }}>UPDATE CART</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12">


        <div className="payment-shopping-bag-subtotal-container">
          <div className="payment-subtotal-container">
            <h6>Cart Totals</h6>
            <table className="payment-subtotal-table">
              <thead className="payment-body">
                <tr>
                  <th>Subtotal</th>
                  <td>$49</td>
                </tr>
              </thead>
              <tbody className="payment-body">
                <tr >
                  <th>Shipping</th>
                  <td>
                    <div className="remember-me-container">
                      <input type="checkbox" />

                      <p
                        style={{
                          color: "var(--dark-black-color)",
                          fontWeight: "500",
                        }}
                      >
                        Free Shipping
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td>
                    <div className="remember-me-container">
                      <input type="checkbox" />

                      <p
                        style={{
                          color: "var(--dark-black-color)",
                          fontWeight: "500",
                        }}
                      >
                        Flat rate: $49
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td>
                    <div className="remember-me-container">
                      <input type="checkbox" />

                      <p
                        style={{
                          color: "var(--dark-black-color)",
                          fontWeight: "500",
                        }}
                      >
                        Local pickup: $9
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td>

                      <p
                        style={{
                          color: "var(--dark-black-color)",
                          fontWeight: "500",
                        }}
                      >
                        Shipping to Al.
                      </p>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td>

                      <p
                        style={{
                          color: "var(--dark-black-color)",
                          fontWeight: "500",
                        }}
                       className="underline-animation">
                        CHANGE ADDRESS
                      </p>
                    
                  </td>
                </tr>
                

              </tbody>
              
              <tbody className="payment-body">
              <tr >
                  <th>VAT</th>
                  <td>
                      $19
                  </td>
                </tr>
              </tbody>
              
              <tbody className="payment-body">
              <tr >
                  <th>TOTAL</th>
                  <td>
                    $433
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="check-out-container">
            <p>UPDATE CART</p>
          </div>
        </div>

      </div>
    </div>
  </div>
      
    ) : (
      <div className='payment-shopping-bag-empty'>
      <h6>Shop cart is empty</h6>
      <div className="check-out-container" style={{width: "200px", backgroundColor: "#E4E4E4"}}>
                <p style={{color: "var(--dark-black-color)"}}>Explore Products</p>
              </div>
    </div>


    )}

    </>
  );
}

export default PaymentShoppingBag;
