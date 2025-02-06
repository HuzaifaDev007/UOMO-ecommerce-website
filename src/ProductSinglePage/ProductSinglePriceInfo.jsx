import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router";
import { Tooltip } from 'bootstrap';
import { CartContext } from "../Context/CartContext";

import data from '../mainpage.js'

const sizesData = [
  {
    title :  "Extra Small",
    text: "XS"


  },
  {
    title :  "Small",
    text: "S"


  },
  {
    title :  "Middle",
    text: "M"


  },
  {
    title :  "Large",
    text: "L"


  },
  {
    title :  "Extra Large",
    text: "XL"


  }
] 


export default function ProductSinglePriceInfo({TotalProducts , productDetails}) {
  const navigation = useNavigate()
  const location = useLocation()
  const {id } = useParams();



  const {handleCart} = useContext(CartContext);

  const localStorageCart = JSON.parse(localStorage.getItem('cart'))
  const existingCart = localStorageCart?.find((cartItem) => cartItem.id === productDetails?.id)
  const [MergedObj, setMergedObj] = useState(null)
  const [error, setError] = useState(null);




  const [quantity, setQuantity] = useState(1)
  const [additionalDetailUser, setAdditionalDetailUser] = useState({["customerSelectedQuantity"] : 1})




  
  // const product = data.filter((item) => item.id == id)
  // console.log(product)

  // console.log(displaySizes)


  const handleQuantity = (symbol)=> {
    
    if(symbol === '+' && quantity < 11) 
    {
      
      setQuantity((prevQuantity)=> {
        setAdditionalDetailUser(prevDetails => (
          {
            ...prevDetails,
            ["customerSelectedQuantity"] : prevQuantity + 1
          }
        ))
        return prevQuantity + 1

      })
    }
    else if (symbol === '-' && quantity > 1 ) 
    {
      setQuantity((prevQuantity)=> {
        setAdditionalDetailUser(prevDetails => (
          {
            ...prevDetails,
            ["customerSelectedQuantity"] : prevQuantity - 1
          }
        ))
        return prevQuantity - 1

      })
      

    }
    

  }

  const handleManualInputQuantity =(e) => {
    if(parseInt(e.target.value)  >= 1 && parseInt(e.target.value ) <=11)
      {

        setQuantity(()=> {
          setAdditionalDetailUser(prevDetails => (
            {
              ...prevDetails,
              ["customerSelectedQuantity"] : e.target.value
            }
          ))
          return e.target.value;
  
        })
        

      }

  }

  
  const handlePrevPage = ()=> {
    if(location.key !== 'default') 
    {
      navigation(-1)
    }
    else
    {
      navigation('/')
    }

  }

  const handleSizes = (size, sizeInitial) => {
    setAdditionalDetailUser(prevDetails => (
      {
        ...prevDetails,
        
        ["customerSelectedSize"] : sizeInitial
    

      }
      
           ))

  }

    useEffect(() => {
        const tooltipTriggerList = Array.from(
          document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        tooltipTriggerList.forEach((tooltipTriggerEl) => {
            new Tooltip(tooltipTriggerEl, {
              customClass: 'custom-tooltip', // Attach custom class
            });
          });
      }, []);


  const handleCheckUserInfo = ()=> {
    if (!additionalDetailUser.customerSelectedSize) {
      setError({
        message: 'Please select the size',
        type: 'size',
      });
      return; // stop further processing
    }
    // Check if the color is not selected
    if (!additionalDetailUser.customerSelectedColor) {
      setError({
        message: 'Please select the color',
        type: 'color',
      });
      return;
    }
    // If all required details are provided, clear any errors and proceed
    setError(null);
      handleCart(productDetails, additionalDetailUser)
    
  }

 
  return (
    <>   

          {/* <!-- Modal --> */}

<div class="modal fade" id="SizeGuide" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered  modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Size Guide</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className="size-info-container">
          <div className="row g-4">
            <div className="col-lg-6 col-sm-12 col-12  ">
              <div className="size-guide-img-wrapper">
                <img src="\size-guide.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-12">
              <div className="size-guide-info-container">

                <div className="size-guide-jeans-container">
                  <h4>JEANS</h4>

              <table className="size-guide-table">
                <thead className="size-guide-header">
                  <tr>
                    <th>SIZE</th>
                    <th>XS</th>
                    <th>S</th>
                    <th>M</th>
                    <th>L</th>
                    <th>XL</th>
                    <th>XXL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="size-guide-table-row">
                    <th>BUST</th>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                  </tr>
                  <tr className="size-guide-table-row">
                    <th>WAIST</th>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                  </tr>
                  <tr className="size-guide-table-row">
                    <th>HIPS</th>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                  </tr>
                </tbody>
              </table>
              </div>
                <div className="size-guide-jeans-container">
                  <h4>FOOTWEAR</h4>

              <table className="size-guide-table">
                <thead className="size-guide-header">
                  <tr>
                    <th>SIZE</th>
                    <th>XS</th>
                    <th>S</th>
                    <th>M</th>
                    <th>L</th>
                    <th>XL</th>
                    <th>XXL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="size-guide-table-row">
                    <th>BUST</th>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                  </tr>
                  <tr className="size-guide-table-row">
                    <th>WAIST</th>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                  </tr>
                  <tr className="size-guide-table-row">
                    <th>HIPS</th>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                    <td>87</td>
                  </tr>
                </tbody>
              </table>
              </div>


              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  </div>
</div>

    
    <div className="product-single-page-price-info-container">


        <div className="product-single-page-navigation-container">
          <div className="product-single-page-pages-navigation-container">
            <h5 className="underline-animation"><NavLink  to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>HOME / </NavLink></h5>
            <h5 className="underline-animation"><NavLink  to={'/shop'} style={{ textDecoration: 'none', color: 'inherit' }}>SHOP</NavLink></h5>
          </div>
          <div className="product-single-page-navigation-main-container">
            <div className="product-single-page-navigation-arrow-container">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z"
                  />
                </svg>{" "}
              </a>
              <h6 className="underline-animation"><NavLink style={{ textDecoration: 'none', color: 'inherit' }} onClick={handlePrevPage}>PREV</NavLink></h6>
            </div>
            <div className="product-single-page-navigation-arrow-container">
              <h6 className="underline-animation"><NavLink  to={`/shop/product/${parseInt(id) + 1 > TotalProducts ? 1 :  parseInt(id) + 1}`} style={{ textDecoration: 'none', color: 'inherit' }}>Next</NavLink></h6>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="product-single-page-title-container">
          <h4>{productDetails?.title}</h4>
          <div className="product-card-reviews-container">
            <div className="reviews-stars-container">
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
            </div>
            <p>8k</p>
          </div>
          <h6>${productDetails?.price}</h6>
        </div>

        <div className="product-single-page-description-container">
          <p>
            Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum
            gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus
            sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere
            eget.
          </p>
        </div>

        <div className="product-single-page-size-container">
          <div className="product-single-page-sizes-wrapper">
            <h6 >
              SIZES
            </h6>
            <form className="product-single-page-sizes-container">
              {
                sizesData.map((size) => (
                  <label className="square-checkbox" data-bs-toggle="tooltip" data-bs-placement="top" title={size.title}>
                              {size.text}
                              <input type="radio" name="product-size" onChange={()=> handleSizes(size.title, size.text)}/>
                              </label>
              
                ))
              }
                
              
            </form>
          </div>

          <h6 className="underline-animation" data-bs-toggle="modal" data-bs-target="#SizeGuide">Size Guide</h6>
        </div>

        <div className="product-single-page-color-container">
          <h6>Color</h6>

          <form className="filter-all-color-container">
                {Object.entries(productDetails?.colors || {}).map(
                  ([ColorName, colorDetail]) => (
                    <label key={ColorName} for={ColorName}>
                      <input
                        type="radio"
                        name="color"
                        id={ColorName}
                        className="filter-color-container"
                        onChange={() => setAdditionalDetailUser(prevDetails => ({  
                          ...prevDetails,
                          "customerSelectedColor": {
                            ["ColorName"] : ColorName

                          }

                        }
                            
                            
                          
                        
                        ))} // Reusing the function
                      />
                      
                        <div className="custom-radio-wrapper">
                          <div className="custom-radio" style={{backgroundColor: colorDetail}}></div>
                        </div>
                    </label>
                  )
                )}
              </form>
        </div>

        <div className="product-single-add-to-cart-container">
          <div className="product-single-increase-container">

              <div className="increase-decrease-contianer">
                  <button onClick={()=> handleQuantity("-")}>-</button>
                  <input type="number" id="product-input-quantity" style={{textAlign: "center", appearance: "textfield", margin: "0", MozAppearance: "textfield"}} defaultValue={1} min={1} max={11} value={quantity} onChange={(e)=> handleManualInputQuantity(e)}/>
                  <button onClick={()=> handleQuantity("+")}>+</button>
              </div>

          </div>

          <button className="product-single-add-to-cart-btn-container" 
          
          onClick={existingCart ? undefined : handleCheckUserInfo}>
              <p>{existingCart ? 'Already added': 'Add to Cart'}</p>

          </button>
          {error && (
        <div className="error-alert" style={{color: "#C42927"}} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            style={{ marginRight: '8px' }}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-4v4m0 4h.01"
            />
          </svg>
          <span>{error.message}</span>
        </div>
      )}


        </div>

        <div className="product-single-share-details-container">
          
          <div className="product-single-share-add-to-whish-container underline-animation">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3m-4.4 15.55l-.1.1l-.1-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05"/></svg>
              <p>ADD TO WHISHLIST</p>
          </div>
          <div className="product-single-share-add-to-whish-container underline-animation">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M18.5 2a3.5 3.5 0 1 1-2.506 5.943L11.67 10.21c.213.555.33 1.16.33 1.79a5 5 0 0 1-.33 1.79l4.324 2.267a3.5 3.5 0 1 1-.93 1.771l-4.475-2.346a5 5 0 1 1 0-6.963l4.475-2.347A3.5 3.5 0 0 1 18.5 2m0 15a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M7 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m11.5-5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"/></g></svg>
              <p >SHARE</p>
          </div>

        </div>

        <div className="product-single-extra-details-container">
          <p>SKU:<span>N/A</span></p>
          <p>Categories:<span>Casual & Urban Wear, Jackets, Men</span></p>
          <p>Tags:<span>biker, black, bomber, leather</span></p>
        </div>
        

    </div>
    </>
 
  );
}
