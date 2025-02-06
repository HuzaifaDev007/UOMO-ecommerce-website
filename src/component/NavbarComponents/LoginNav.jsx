import React, { useEffect, useState } from 'react'
import '../../css/Navbar/LoginSide.css'
import { NavLink } from 'react-router'

function LoginNav({loginOpen, setLoginOpen}) {

    
  

  
  return (
    <>
        
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasLogin" aria-labelledby="offcanvasLoginLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasLoginLabel">Log In</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    
 {/* main content */}
 <div className="nav-login-container">
 
   <div className="login-details-side-container">
     <form className='login-details-side-container-form'>

     <div className="username-input-container">
       <input type="text" placeholder=''/>
       <label className='form-label' for='usename'>Username or email address *</label>

     </div>
     <div className="password-input-container">
       <input type="text" placeholder='*******'/>
       <label className='form-label' for='password' >Password</label>
     </div>
     <div className="remember-and-lost-container">

     <div className="remember-me-container">
       <input type='checkbox' />

       <p>Remember me</p>
       
       
     </div>
     <h6>Lost password?</h6>

     </div>
     <div className="submit-container">
       <p>Log in</p>
     </div>

     
     
     </form>
     <p className='login-find-account'>No account yet? <NavLink to={'/signup'} style={{ textDecoration: 'none', color: 'inherit' }}><span
     
     type="button"
     data-bs-toggle="offcanvas"
     data-bs-target="#offcanvasLogin"
     aria-controls="offcanvasLogin"
     >Create Account</span></NavLink></p>



   </div>

</div>

  </div>
</div>

    </>
  )
}

export default LoginNav

