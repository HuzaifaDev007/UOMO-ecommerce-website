import React, { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../../Context/CartContext.js";
import ShoppingBagCard from "../ShoppingBag";
import { Navigate, NavLink, useNavigate } from "react-router";




import "../../css/Navbar/whishlish.css";
function WishList() {
  const navigate = useNavigate()
  
  const {localStorageData, handleCartCancle, handleUpdateQunaityCart} = useContext(CartContext)
     const [cartDisplayData, setCartDisplayData] = useState(true)
    

    
   useEffect(()=> {
    const displayData = localStorageData.map((cartData)=> <ShoppingBagCard filterCart={true} cartData={cartData} key={cartData.id} handleCartCancle={handleCartCancle} handleUpdateQunaityCart={handleUpdateQunaityCart}/>  )
    setCartDisplayData(displayData)
    
   },[localStorageData])
  
   


  


  return (
    <>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasShopping" aria-labelledby="offcanvasShoppingLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasShoppingLabel">{`Shopping Bag ${localStorageData.length >= 1 ? `(${localStorageData.length})` : "(0)"}`}</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
  </div>
  <div class="offcanvas-body">

    
              {/* main content */}
        <div className="shopping-container">
    
          <div className="shopping-card-items-container">
            <div className="shopping-card-items-show-container">
            {cartDisplayData}

              

            </div>
          </div>
          <div className="shopping-card-total-container">
            <div className={`shopping-card-total-container-line`} >
              <div className={`shopping-card-subtotal-container ${localStorageData.length >= 1 ? '' : 'DISABLE-BOX'}`}>
                <h6>subtotal</h6>
                <h6>$291</h6>
              </div>
              <div className="view-cart-container DISABLE-BOX"
              
              >
                <p>View Cart</p>
              </div>
              <div   className="check-out-container"
              type="button" 
              data-bs-toggle="offcanvas" 
              data-bs-target= "#offcanvasShopping"
              aria-controls="offcanvasShopping"
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={()=> navigate('/cart')}
              >
                <p> 
                
                View Cart</p>
              </div>
            </div>
          </div>
        </div>

        </div>
</div>


    </>
  );
}

export default WishList;


