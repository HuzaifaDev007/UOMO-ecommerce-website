import React from 'react'
import ReviewCard from '../component/ReviewCard'

function ProductSingleDescription() {
  return (
    <div className="ProductSingleDescription">


{/* <!-- Tab Navigation --> */}
    <ul class="nav nav-tabs description-btns-container" id="productDetailTabs" role="tablist" >
      <li class="nav-item" role="presentation">
        <button class="nav-link active underline-animation" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">
          Description
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link underline-animation" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">
        Additional information
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link underline-animation" id="additional-info-tab" data-bs-toggle="tab" data-bs-target="#additional-info" type="button" role="tab" aria-controls="additional-info" aria-selected="false">
          Reviews (2)
        </button>
      </li>
    </ul>




{/* <!-- Tab Content --> */}

      


      <div class="tab-content mt-3" id="productDetailContent">
      <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
        <strong style={{fontWeight: "500"}}>Sed do eiusmod tempor incididunt ut labore</strong>
        <br />
        <p style={{padding:"1rem 0rem", fontSize: "0.85rem", lineHeight: "2.3rem" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

        <div className="row">
          <div className="  col-lg-6">
            <strong style={{fontWeight: "500"}}>Why choose product?</strong>
            <ul>
              <li style={{fontSize: "0.85rem", lineHeight: "2.3rem" }}>Creat by cotton fibric with soft and smooth</li>
              <li style={{fontSize: "0.85rem", lineHeight: "2.3rem" }}>Simple, Configurable (e.g. size, color, etc.), bundled</li>
              <li style={{fontSize: "0.85rem", lineHeight: "2.3rem" }}>Downloadable/Digital Products, Virtual Products</li>
            </ul>
          </div>
          <div className="  col-lg-6" >
            <strong style={{fontWeight: "500"}}>Why choose product?</strong>
            <ul>
              <li style={{fontSize: "0.85rem", lineHeight: "2.3rem" }}>Creat by cotton fibric with soft and smooth</li>
              <li style={{fontSize: "0.85rem", lineHeight: "2.3rem" }}>Simple, Configurable (e.g. size, color, etc.), bundled</li>
              <li style={{fontSize: "0.85rem", lineHeight: "2.3rem" }}>Downloadable/Digital Products, Virtual Products</li>
            </ul>
          </div>
        </div>
        <strong>Lining</strong>
        <p>100% Polyester, Main: 100% Polyester.</p>
      </div>
      <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
       <div className="additional-details-container">
        <div className="deatils-heading-container">
          <h6>weight</h6>
          <h6>Dimensions</h6>
          <h6>Size</h6>
          <h6>Color</h6>
          <h6>Storage</h6>
        </div>
        <div className="deatils-space-container">
         
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="deatils-deatil-container">
          <h6>1.25 kg</h6>
          <h6>90 x 60 x 90 cm</h6>
          <h6>XS, S, M, L, XL</h6>
          <h6>Black, Orange, White</h6>
          <h6>Relaxed fit shirt-style dress with a rugged</h6>
        </div>
       </div>
      </div>
      <div class="tab-pane fade" id="additional-info" role="tabpanel" aria-labelledby="additional-info-tab">
        <div className="product-review-clients-container">

          <div className="product-reviews-container">
            <h4 style={{fontSize: "1.1rem"}}>Reviews</h4>
            <ReviewCard />
            <ReviewCard />
          </div>

          <div className="product-user-review-container">
            <div className="user-review-first-time-review-container">
              <h6>Be the first to review “Message Cotton T-Shirt”</h6>
              <p>Your email address will not be published. Required fields are marked *</p>

            </div>

            <div className="user-review-rating-container">
              <p>Your rating *</p>
            </div>

            <form className='user-review-container'>

              <label htmlFor="
              " className='user-review-input'> 
                              <textarea name="" id="" placeholder='Your Review'></textarea>

              </label>

              <div className="password-input-container">
       <input type="text" placeholder=''/>
       <label className='form-label' for='password'>Name *</label>
     </div>
              <div className="password-input-container">
       <input type="text" placeholder=''/>
       <label className='form-label' for='password'>Email address</label>
     </div>

     <div className="remember-me-container">
       <input type='checkbox' />

       <p style={{fontSize: "0.85rem" , color : "var(--main-color)"}}>Save my name, email, and website in this browser for the next time I comment.</p>
       
       
     </div>


     <div className="product-single-add-to-cart-btn-container" style={{width: "180px"}}>
              <p>Submit</p>

          </div>


            </form>
          </div>

        </div>
      </div>
    </div>
  
    </div>
  )
}

export default ProductSingleDescription