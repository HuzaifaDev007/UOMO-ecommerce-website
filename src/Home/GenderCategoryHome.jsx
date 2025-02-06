import React from 'react'
import { NavLink } from 'react-router'
import '../HomeCss/GenderCategoryHome.css'

function GenderCategoryHome() {
  return (
    <section id='GenderCategoryHome'>

        <div className="gender-container">

        <div className="gender-left-container">
        <div className="category-content-container">
              <p  className=' gender-color-white'>Starting At $19</p>
              <h6 className=' gender-color-white'>
                <span>Women's</span> T-Shirts
              </h6>
              <div className="suggestion-queue">
                <h5 className="underline-animation-half category-btn  gender-color-white underline-animation-white"><NavLink  to={'shop'} style={{ textDecoration: 'none', color: 'inherit' }}> Show now</NavLink></h5>
              </div>
            </div>
                
                </div>

            <div className="gender-right-container">
            <div className="category-content-container">
              <p>Starting At $39</p>
              <h6>
                <span>Men's</span>  Sportswear
              </h6>
              <div className="suggestion-queue">
                <h5 className="underline-animation-half category-btn"><NavLink  to={'shop'} style={{ textDecoration: 'none', color: 'inherit' }}> Show now</NavLink></h5>
              </div>
            </div>

            </div>

        </div>

    </section>
  )
}

export default GenderCategoryHome