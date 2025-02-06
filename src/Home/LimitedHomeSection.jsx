import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import "../HomeCss/LimitedHomeSection.css";
import CountDown from "../component/CountDown";


function LimitedHomeSection() {

 
  return (
    <section id="LimitedHomeSection">
      <div className="limited-container">
        <div className="limited-right-section">
          {/* new trends */}
          <div className="new-trends-container">
            <h6>Deal of the week</h6>
          </div>
          {/* hero-title */}
          <div className="hero-title-container limited-title-container">
            <h4>
              Spring <span>Collection</span>
            </h4>
          </div>
          <div className="button-container hero-button">
            <p className="button-with-line"><NavLink  to={'shop'} style={{ textDecoration: 'none', color: 'inherit' }}>shop now</NavLink></p>
          </div>
        </div>
        <CountDown/>

        
      </div>
    </section>
  );
}

export default LimitedHomeSection;
