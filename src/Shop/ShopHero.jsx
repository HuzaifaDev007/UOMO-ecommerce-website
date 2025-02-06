import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';


import '../Shop.css/ShopHero.css'
import { ShopFilterBtnContext } from '../Context/ShopFilterBtnContext'


function ShopHero() {
    const {handleCancelClick, filteringBtns, setFilteringBtns} = useContext(ShopFilterBtnContext)
    const navigate = useNavigate();
    const location = useLocation()

  const handleAllClick = () => {
    // Redirect to the base URL without query parameters
    setFilteringBtns((prevState) => {
        const resetState = {};
        for (const key in prevState) {
          resetState[key] = Object.fromEntries(
            Object.keys(prevState[key]).map((subKey) => [subKey, false])
          );
        }
        return resetState;
      });
    navigate("/shop");
  };
  return (
    <section id='ShopHero'>
        <div className="shop-hero-line" >
            <div className="shop-hero-container" style={{backgroundImage:"url('\shop_banner_character1.jpg')"}}>
                <div className="shop-hero-content-container">
                    <h3>Jackets & Coats</h3>
                    <div className="shop-hero-btn-container">
                        <h5 className={`underline-animation ${location.search === '' ? 'active-display-btn' : ''}`} onClick={handleAllClick}>All</h5>
                        <h5 className={`underline-animation ${filteringBtns['productType'] ['dresses'] ? 'active-display-btn' : ''}`} onClick={() => handleCancelClick("productType", "dresses")}>Dresses</h5>
                        <h5 className={`underline-animation ${filteringBtns['productType'] ['sweatshirts'] ? 'active-display-btn' : ''}`} onClick={() => handleCancelClick("productType", "sweatshirts")}>Sweatshirts</h5>
                        <h5 className={`underline-animation ${filteringBtns['productType'] ['jackets'] ? 'active-display-btn' : ''}`} onClick={() => handleCancelClick("productType", "jackets")}>Jackets</h5>
                        <h5 className={`underline-animation ${filteringBtns['productType'] ['men'] ? 'active-display-btn' : ''}`} onClick={() => handleCancelClick("productType", "men")}>Men</h5>
                        <h5 className={`underline-animation ${filteringBtns['productType'] ['shorts'] ? 'active-display-btn' : ''}`} onClick={() => handleCancelClick("productType", "shorts")}>Shorts</h5>
                        <h5 className={`underline-animation ${filteringBtns['productType'] ['swimwear'] ? 'active-display-btn' : ''}`} onClick={() => handleCancelClick("productType", "swimwear")}>Swimwear</h5>
                        <h5 className={`underline-animation ${filteringBtns['productType'] ['trousers'] ? 'active-display-btn' : ''}`} onClick={() => handleCancelClick("productType", "trousers")}>Trousers</h5>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default ShopHero

// 