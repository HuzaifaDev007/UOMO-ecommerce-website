import React from 'react'
import './SignUp.css'
import { NavLink } from 'react-router'

function SignUp() {
  return (
    <section id='SignUp'>
        
{/* <!-- Tab Navigation --> */}
    <ul class="nav nav-tabs description-btns-container" id="productDetailTabs" role="tablist" >
      <li class="nav-item" role="presentation">
        <button class="nav-link active underline-animation" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="description" aria-selected="true">
          Login
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link underline-animation" id="signup-tab" data-bs-toggle="tab" data-bs-target="#signup" type="button" role="tab" aria-controls="reviews" aria-selected="false">
        RESISTER
        </button>
      </li>
    
    </ul>




{/* <!-- Tab Content --> */}

      


      <div class="tab-content mt-3" id="productDetailContent">
      <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">

      <div className="login-page-container">
 
        <div className="login-page-details-container">
   <form className='login-details-container-container-form '>

   <div className="username-input-container" style={{marginBottom: "0.5rem"}}>
     <input type="text" placeholder=''/>
     <label className='form-label' for='usename'>Username or email address *</label>

   </div>
   <div className="username-input-container" style={{marginBottom: "0.5rem"}}>
     <input type="text" placeholder=''/>
     <label className='form-label' for='usename'>Password *</label>

   </div>
   
   <div className="remember-and-lost-container" >

   <div className="remember-me-container">
     <input type='checkbox' />

     <p>Remember me</p>
     
     
   </div>
   <h6>Lost password?</h6>

   </div>
   <div className="submit-container" style={{marginBottom: "1rem"}}>
     <p>Log in</p>
   </div>

   
   
   </form>
   <p className='login-find-account'>No account yet? <span>Create Account</span></p>



            </div>

        </div>

        
      </div>
      <div class="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="reviews-tab">
      <div className="login-page-container">
 
        <div className="login-page-details-container">
<form className='login-details-container-container-form '>

<div className="username-input-container" style={{marginBottom: "0.5rem"}}>
<input type="text" placeholder=''/>
<label className='form-label' for='usename'>Username</label>

</div>
<div className="username-input-container" style={{marginBottom: "0.5rem"}}>
<input type="text" placeholder=''/>
<label className='form-label' for='usename'>Email address</label>

</div>
<div className="username-input-container" style={{marginBottom: "0.5rem"}}>
<input type="text" placeholder=''/>
<label className='form-label' for='usename'>Password *</label>

</div>

<div className="remember-and-lost-container signUp-policy-container" >
<p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>

</div>
<div className="submit-container">
<p>REGISTER</p>
</div>



</form>



        </div>

        </div>
       
      </div>
      
    </div>
    </section>
  )
}

export default SignUp