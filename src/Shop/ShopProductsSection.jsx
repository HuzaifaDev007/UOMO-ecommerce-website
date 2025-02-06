import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from "react-router";
import data from '../mainpage.js'
import ProductCard from '../component/ProductCard.jsx'



import '../Shop.css/ShopProductsSection.css'
import FilterSidePage from '../component/FilterSidePage'
import { ShopFilterBtnContext } from '../Context/ShopFilterBtnContext.js';


function ShopProductsSection() {
  const {filteringBtns, setFilteringBtns} = useContext(ShopFilterBtnContext)
      const [displayData, setDisplayData] = useState([]);
      const swiper= true;
      const location = useLocation();
      const params = new URLSearchParams(location.search);


      const filters = {
        productType: params.getAll('productType'),
        sizes: params.getAll('sizes'),
        brands: params.getAll('brands'),
        colors: params.getAll('colors'),
        brands: params.getAll('brands'),
      };
      
      useEffect(() => {
       
      const hasFilters = Object.values(filters).some((filter) => filter.length > 0);

      if (hasFilters) {
        // Filter the data based on active filters
        const filteredData = data.filter((product) => {
          return (
            // Check if productType is filtered
            (filters.productType.length === 0 || filters.productType.some(pt => 
              Array.isArray(product.productType) && product.productType.includes(pt)
            )) &&
            
            // Check if size is filtered
            (filters.sizes.length === 0 || filters.sizes.some(sz => 
              Array.isArray(product.sizes) && product.sizes.includes(sz)
            )) &&
        
            // Check if brands are filtered
            (filters.brands.length === 0 || filters.brands.some(br => 
              Array.isArray(product.brands) && product.brands.includes(br)
            )) &&
        
            // Check if colors are filtered
            (filters.colors.length === 0 || filters.colors.some(cl => 
              Array.isArray(product.colors) && product.colors.includes(cl)
            ))
          );
        });
  
        setDisplayData(filteredData); // Set the filtered data
      } else {
        setDisplayData(data); // If no filter, show all data
      }

        
      }, [location.search]); 

    
    


      
    
  return (
    <section id='ShopProductsSection'>
        <div className="shop-products-section-container">
            <div className="page-filter-container">
                <h6>Home/ the SHop</h6>
                <h6 type="button"  className="underline-animation" data-bs-toggle="offcanvas" data-bs-target="#offcanvasFilter" aria-controls="offcanvasRight" >filter</h6>

            </div>

            <div className="shop-products-items-container">
                <div className="shop-products-inner-container">
                <div className="row custom-gap g-4">
                {displayData.map((product) => (
        <div className="col-6 col-md-4 col-lg-3" key={product.id}>
          <ProductCard product={product} swiper={swiper} />
        </div>
      ))}
                </div>
                </div>

            </div>

        </div>
        <FilterSidePage />

    </section>
  )
}

export default ShopProductsSection