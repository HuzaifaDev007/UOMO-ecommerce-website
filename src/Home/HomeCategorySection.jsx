import React from "react";
import { NavLink } from "react-router";
import "../HomeCss/HomeCategorySection.css";

function HomeCategorySection() {
  return (
    <div className="HomeCategorySection-wrapper">
      <div class="category-container-wrapper">
        <div class="category-container">
          {/* <!-- left side --> */}
          <div class="category-left-side category-position-code">
            <div className="category-content-container">
              <p>HOT LIST</p>
              <h6>
                <span>Women</span> Collection
              </h6>
              <div className="suggestion-queue">
                <h5 className="underline-animation-half category-btn"><NavLink to={'shop'} style={{ textDecoration: 'none', color: 'inherit' }}> Show now</NavLink></h5>
              </div>
            </div>
          </div>

          {/* <!-- right side --> */}
          <div class="category-right-side">
            <div class="category-right-upper-side category-position-code">
              <div className="category-content-container">
                <p>HOT LIST</p>
                <h6>
                  <span>Men</span> Collection
                </h6>
                <div className="suggestion-queue">
                  <h5 className="underline-animation-half category-btn"><NavLink  to={'shop'} style={{ textDecoration: 'none', color: 'inherit' }}> Show now</NavLink></h5>
                </div>
              </div>
            </div>

            <div class="category-right-lower-side">
              <div class="lower-upper-container category-position-code">
                <div className="category-content-container">
                  <p>HOT LIST</p>
                  <h6>
                    <span>Kids</span> Collection
                  </h6>
                  <div className="suggestion-queue">
                    <h5 className="underline-animation-half category-btn">
                    <NavLink to={'shop'} style={{ textDecoration: 'none', color: 'inherit' }}> Show now</NavLink>
                    </h5>
                  </div>
                </div>
              </div>

              <div class="lower-lower-container category-position-code">
                <div className="category-content-container">
                  <p>HOT LIST</p>
                  <h6>
                    <span>E-Gift</span> Cards
                  </h6>
                  <div className="suggestion-queue">
                    <h5 className="underline-animation-half category-btn">
                    <NavLink to={'shop'} style={{ textDecoration: 'none', color: 'inherit' }}> Show now</NavLink>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCategorySection;
