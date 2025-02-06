import React, { useEffect, useState } from 'react'
import '../ProductSinglePageCss/ProductSinglePage.css'
import ProductSinglePriceInfo from './ProductSinglePriceInfo'
import ProductSingleImages from './ProductSingleImages'
import ProductSingleDescription from './ProductSingleDescription'
import LimitedEditionHome from '../Home/LimitedEditionHome'
import { useLocation, useParams } from 'react-router'
import allData from '../mainpage.js'

function ProductSinglePage() {
  const {id} = useParams()
  const location = useLocation()
  const [productDetails, setProductDetails] = useState(null)

  const data =  allData.find((item) => item.id === parseInt(id))

  const TotalProducts = allData.length




  useEffect(()=> {
    // PRODUCT DETAILS IS NULL AT FIRST THEN THE DATA IS ADD TO IT..
    setProductDetails(data)
    


  },[location.search, id])


  
    // console.log(data)
  
  useEffect(() => {
    // Scroll to the top of the page when this component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs only once, on mount


  return (
    <section id='ProductSinglePage'>
      <div className="product-single-page-main-container">
        <ProductSingleImages data={data} productDetails ={productDetails} />
        <ProductSinglePriceInfo data={data} productDetails ={productDetails} TotalProducts = {TotalProducts}/>
       
      </div>
      <ProductSingleDescription />
      <LimitedEditionHome  titleText={"Related Products"} />
    </section>
  )
}

export default ProductSinglePage