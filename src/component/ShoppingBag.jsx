import React, { useEffect, useState } from "react";
import "../css/ShoppingBag.css";
import { NavLink } from 'react-router'



function ShoppingBagCard({filterCart, cartData, handleCartCancle, handleUpdateQunaityCart}) {
  
  const [quantity, setQuantity] = useState(cartData?.customerSelectedQuantity)
  let timeout; // Declare timeout variable outside

  const handleDelayOnCancelingProduct = ()=> {

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      handleCartCancle(cartData.id);
    }, 500);

  }

  const handleQuantity = (symbol)=> {
    
    if(symbol === '+' && quantity < 11) 
    {
      
      setQuantity(prevQuantity => {
        
        handleUpdateQunaityCart(prevQuantity + 1, cartData.id)
        return prevQuantity + 1
      })

    }
    else if (symbol === '-' && quantity > 1 ) 
    {

      setQuantity(prevQuantity => {
        
        handleUpdateQunaityCart(prevQuantity - 1, cartData.id)
        return prevQuantity - 1
      })
    }
    

  }

  const handleManualInputQuantity =(e) => {
    if(parseInt(e.target.value)  >= 1 && parseInt(e.target.value ) <=11)
      {
        setQuantity(prevQuantity => {
          handleUpdateQunaityCart(parseInt(e.target.value ), cartData.id)
          
          return e.target.value})      
       
        

      }

  }


  

  return (
    <div className={`shopping-bag-card-container ${filterCart ? 'shopping-bag-silde-bar-cart' : ''}`} >
        
      <div className={`shopping-bag-info-container ${filterCart ? 'shopping-bag-info-container-side-bar-cart' : ''}`}>
        <div className="shopping-bag-img-container">
          <img src={cartData?.images?.firstImage} alt="" />
        </div>
        
        <div className={`shopping-bag-details-container-wrapper ${filterCart ? 'shopping-bag-details-container-wrapper-side-bar-cart' : ''}`}>
          <div className={`shopping-bag-details-container ${filterCart ? 'shopping-bag-details-container-side-bar-cart' : ''}`}>
            <h5
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasShopping"
            aria-controls="offcanvasShopping"
            ><NavLink to={`shop/product/${cartData.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{cartData.title}</NavLink></h5>
            <h6>
              Color: <span>{cartData?.customerSelectedColor?.ColorName || 'Color'}</span>
            </h6>
            <h6>
              Size: <span>{cartData.customerSelectedSize}</span>
            </h6>

            <div className={`increase-decrease-contianer increase-price-mobile ${filterCart ? 'increase-price-mobile-side-bar-cart' : ''}`} >
              
            <button onClick={()=> handleQuantity("-")}>-</button>
                  <input type="number" id="product-input-quantity" style={{textAlign: "center", appearance: "textfield", margin: "0", MozAppearance: "textfield"}} defaultValue={1} min={1} max={11} value={quantity} onChange={(e)=> handleManualInputQuantity(e)}/>
                  <button onClick={()=> handleQuantity("+")}>+</button>
            </div>
          </div>

          {/* increasing and decreasing for mobile DISABLED ON DESKTOP */}

          <div className={`shopping-bag-Subtotal-container-mobile ${filterCart ? 'shopping-bag-Subtotal-container-mobile-side-bar-cart' : ''}`}>
          <p>${(cartData.price * cartData.customerSelectedQuantity)}</p>
          <a onClick={handleDelayOnCancelingProduct}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className={`shopping-bag-price-container ${filterCart ? 'shopping-bag-price-container-side-bar-cart' : ''}`}>
        <p>${cartData.price}</p>
      </div>
      <div className={`shopping-bag-quantity-container ${filterCart ? 'shopping-bag-quantity-container-side-bar-cart' : ''}`}>
        <div
          className="increase-decrease-contianer increase-price-desktop"
          style={{
            padding: "0.5rem",
            border: "2px solid rgba(119, 119, 119, 0.5)",
          }}
        >
          
          <button onClick={()=> handleQuantity("-")}>-</button>
                  <input type="number" id="product-input-quantity" style={{textAlign: "center", appearance: "textfield", margin: "0", MozAppearance: "textfield"}} defaultValue={1} min={1} max={11} value={quantity} onChange={(e)=> handleManualInputQuantity(e)}/>
                  <button onClick={()=> handleQuantity("+")}>+</button>
        </div>
      </div>
      <div className={`shopping-bag-Subtotal-container ${filterCart ? 'shopping-bag-Subtotal-container-side-bar-cart' : ''}`}>
        <p>${(cartData.price * cartData.customerSelectedQuantity)}</p>
        <a  onClick={handleDelayOnCancelingProduct}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}




export default ShoppingBagCard;






