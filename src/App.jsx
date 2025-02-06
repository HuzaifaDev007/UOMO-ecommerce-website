import { useEffect, useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import HomePage from './Home/HomePage'

import ProductSinglePage from './ProductSinglePage/ProductSinglePage';
import PaymentShoppingBag from './PaymentPage/PaymentShoppingBag';
import PaymentShipping from './PaymentPage/PaymentShipping';
import PaymentConfirmation from './PaymentPage/PaymentConfirmation';
import OutLayerCart from './component/OutLayerCart';
import SignUp from './SignUp/SignUp';
// In index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopPage from './Shop/ShopPage';
import OutLayer from './component/OutLayer'
import { CartContext } from './Context/CartContext';


import "rc-slider/assets/index.css";






import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";



// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ComingSoon from './component/ComingSoon';
import NotFound from './component/NotFound';
import Blog from './Blog/Blog';
import BlogPage from './Blog/BlogPage';
import BlogPages from './Blog/BlogPages';
import About from './About/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<OutLayer/>}>
      <Route index element ={<HomePage/>}></Route>
      <Route path='shop' element ={<ShopPage/>}></Route>
      <Route path='shop/product/:id' element ={<ProductSinglePage/>}></Route>

      <Route path='cart' element ={<OutLayerCart/>}>

        <Route index element ={<PaymentShoppingBag/>}></Route>
        <Route path='shoppingpage' element ={< PaymentShipping/>}></Route>
        <Route path='confirmation' element ={<PaymentConfirmation/>}></Route>
      </Route>

      <Route path='signup' element ={<SignUp/>}></Route>
      <Route path='blogs'element ={<Blog/>}></Route>
      <Route path='blogs/:id'element ={<BlogPage/>}></Route>



      <Route path='about' element ={<About/>}></Route>
      <Route path='contact' element ={<ComingSoon/>}></Route>
      <Route path='*' element ={<NotFound/>}></Route>






    </Route>

    
  )
)


function App() {
  const [localStorageData, setLocalStorageData] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });






  const handleCart = (product, userAdditionalInfo)=> {
    const cartAndProductInfo = {
      ...product,
      ...userAdditionalInfo

    }
    const localStorageCart = JSON.parse(localStorage.getItem("cart")) || []; 

    
  
   const existingCard = localStorageCart.find((cartItem) => cartItem.id === product.id)
   
   if(existingCard) {
    console.log("existed")
   }
   else
   {

    localStorageCart.push(cartAndProductInfo);
    console.log(localStorageCart)
    localStorage.setItem('cart', JSON.stringify(localStorageCart))
    setLocalStorageData(localStorageCart)
    


   }

  }

  const handleCartCancle =(id)=> {
    const existingItems  = JSON.parse(localStorage.getItem("cart")) || []; 
    const itemIndex = existingItems.findIndex((item) => item.id === id)
    existingItems.splice(itemIndex, 1)
    console.log("existingItems", existingItems)
    localStorage.setItem('cart', JSON.stringify(existingItems))
    setLocalStorageData(existingItems)
    

  }

  // THROUGH SHOPPING BAG CARD
  const handleUpdateQunaityCart= (newQuantity, cartProductID) =>{
    
    const localStorageData = JSON.parse(localStorage.getItem('cart'))
    const itemIndex = localStorageData.findIndex((item) => item.id === cartProductID)
    localStorageData[itemIndex].customerSelectedQuantity = newQuantity;
    localStorage.setItem('cart', JSON.stringify(localStorageData))
    setLocalStorageData(localStorageData)


    
    
    // console.log(localStorageData)
    // console.log(newQuantity, cartProductID)
    

  }


  return (
    <>
    <CartContext.Provider value={{localStorageData, setLocalStorageData, handleCart, handleCartCancle, handleUpdateQunaityCart}}>

    <RouterProvider router={router}/>
    </CartContext.Provider>


    </>
  )
}

export default App
