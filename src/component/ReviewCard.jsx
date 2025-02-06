import React from 'react'
import '../css/ReviewCard.css'

function ReviewCard() {
  return (
    <div className="review-card-container">
        <div className="review-card-detail-container">

            <div className="review-card-detail-container-wrapper">
                
            <div className="review-pic-container">
                
                </div>
                <div className="review-date-container">
                <p>Janice Miller</p>
                <p style={{color: "#E4E4E4", fontWeight: "300"}}>April 06, 2023</p>
                </div>

            </div>

            <div className="review-reviews-container">
            <div className="product-card-reviews-container">
            <div className="reviews-stars-container">
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
            </div>
          </div>
            </div>
        </div>
        <div className="review-card-review-container" style={{width: "100%"}}>
            <p style={{marginLeft: "calc(60px + 1rem)", color: "#7C7C7C", fontSize: "0.88rem", fontWeight: "400"}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est…</p>
        </div>
    </div>
  )
}

export default ReviewCard