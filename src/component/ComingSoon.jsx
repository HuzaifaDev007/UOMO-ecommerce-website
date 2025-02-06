import React from 'react'
import '../css/ComingSoon.css'
import CountDown from './CountDown'

function ComingSoon() {
  return (
    <section id='ComingSoon'>
        <div className="comingSoon-container-wrapper">
            <div className="comingSoon-container">

            <h3>COMING SOON</h3>
            <h6>Sorry, we couldn't find the page you where looking for. We suggest that you return to home page.</h6>
            <div className="countdown-wrapper">
            <CountDown/>


            </div>
            <div className="email-container">
                <input type="email" name="" id="" placeholder='Your email address'/>
                <button>JOIN</button>
            </div>

        </div>
        </div>

    </section>
  )
}

export default ComingSoon