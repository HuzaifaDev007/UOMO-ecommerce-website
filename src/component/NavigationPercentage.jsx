import React from 'react'
import '../css/NavigationPercentage.css'

function NavigationPercentage() {
  return (
    <div id='NavigationPercentage'>
        <h6>SHOWING 36 of 497 items</h6>
        <div className="navigation-bar-custom-with-percent">
            <h6>39%</h6>
            <div className="navigation-bar-container-wrapper">
            <div className="navigation-bar-container"></div>
            </div>

        </div>
        <h6 className='underline-animation'>SHOW MORE</h6>
    </div>
  )
}

export default NavigationPercentage