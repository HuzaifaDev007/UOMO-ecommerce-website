import React, { useEffect, useState } from 'react'
import ShopHero from './ShopHero'
import ShopProductsSection from './ShopProductsSection'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router'
import {ShopFilterBtnContext} from '../Context/ShopFilterBtnContext'
import NavigationPercentage from '../component/NavigationPercentage'

function ShopPage() {

    const navigate = useNavigate();
  

  const [filteringBtns, setFilteringBtns] = useState({
    productType: {
      dresses: false,
      sweatshirts: false,
      jackets: false,
      jeans: false,
      men: false,
      shorts: false,
      swimwear: false,
      tShirtsTops: false,
      trousers: false,
      jumpersCardigans: false,
    },
    colors: {
      "#0A2472": false,
      "#D7BB4F": false,
      "#282828": false,
      "#B1D6E8": false,
      "#9C7539": false,
      "#BABABA": false,
      "#BFDCC4": false,
    },
    sizes: {
      XS: false,
      S: false,
      M: false,
      L: false,
      XL: false,
    },
    brands: {
      adidas: false,
      balmain: false,
      balenciaga: false,
      burberry: false,
      kenzo: false,
      kenzo: false,
      gicenchy: false,
      zara: false,

    },
    
  });


  const updateURL = (newFilteringBtns) => {
    let url = '/shop?';
  
    // Loop through filteringBtns and construct the query parameters
    Object.entries(newFilteringBtns).forEach(([categoryType, categoryObj]) => {
      Object.entries(categoryObj).forEach(([categoryDetail, isActive]) => {
        if (isActive) {
          // Append active filters to the URL
          url += `${categoryType}=${categoryDetail}&`;
        }
      });
    });
  
    // Remove the last '&' if present and update the URL without reloading the page
    if (url.endsWith('&')) {
      url = url.slice(0, -1);
    }
  
    // window.history.pushState({}, '', url); 
    navigate(url, { replace: true }); // `replace: true` avoids adding a new entry in the browser history

  };




  const handleFilterClick = (categoryType, categoryDetail) => {
   
    setFilteringBtns((prev) => {
      const newFilteringBtns = {
        ...prev,
        [categoryType]: {
          ...prev[categoryType],
          [categoryDetail]: !prev[categoryType][categoryDetail], // Toggle the boolean
        },
      };
  
      // Update the URL with the new filter values
      updateURL(newFilteringBtns);
  
      return newFilteringBtns;
    });

  };

  const handleCancelClick = (categoryType, categoryDetail) => {

    setFilteringBtns((prev) => {
      const newFilteringBtns = {
        ...prev,
        [categoryType]: {
          ...prev[categoryType],
          [categoryDetail]: !prev[categoryType][categoryDetail], // Set to false when the filter is cancelled
        },
      };
  
      // Update the URL with the new filter values
      updateURL(newFilteringBtns);
  
      return newFilteringBtns;
    });

  };


  


  
  return (
    <>
    <ShopFilterBtnContext.Provider value={{filteringBtns, setFilteringBtns, handleFilterClick, handleCancelClick , updateURL} }>
    
    <ShopHero />
    <ShopProductsSection />
    <NavigationPercentage/>
    </ShopFilterBtnContext.Provider>
    
   
    </>
  )
}

export default ShopPage