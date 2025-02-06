import React from 'react'
import { useNavigate, useParams } from 'react-router'
import blogsContent from '../BlogContent.js'
import ReviewCard from '../component/ReviewCard'

function BlogPage() {
  const {id} = useParams()
  console.log(id)
  const navigate = useNavigate()


  const data = blogsContent.find((blog) => blog.id === parseInt(id)) 
  console.log(data)

  const handleNavigation = (direction)=> ()=>  {
    if(direction === "+" && data.id < blogsContent.length)
    {
      navigate(`/blogs/${(data.id) + 1}`)
    }
    else if(direction === "-" && data.id > 1) {
      navigate(`/blogs/${(data.id) - 1}`)


    }


  }
  return (
    <section id='blog-section'>
      <div className="blog-title-container">
        <h3>{data.title}</h3>
        <div className="blog-date-and-author-contianer">
          <h6>{data.author}</h6>
          <h6>{data.date}</h6>
          <h6>{data.category}</h6>

        </div>
      </div>
      <div className="img-blog-img">
        <img src={data.image} alt="" />
      </div>
      <div className="blog-content-section">
        
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
      <div className="blog-content-btn-container">
        <div className="blog-content-btn" style={{backgroundColor: "#306199"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>
        <h6>Share on FaceBook</h6>
        </div>
        <div className="blog-content-btn" style={{backgroundColor: "#26C4F1"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M14.058 3.41c-1.807.767-2.995 2.453-3.056 4.38L11 7.972l-.243-.023C8.365 7.68 6.259 6.437 4.813 4.418a1 1 0 0 0-1.685.092l-.097.186l-.049.099c-.719 1.485-1.19 3.29-1.017 5.203l.03.273c.283 2.263 1.5 4.215 3.779 5.679l.173.107l-.081.043c-1.315.663-2.518.952-3.827.9c-1.056-.04-1.446 1.372-.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06-1.18 7.152-4.223 8.335-8.433l.127-.495c.238-.993.372-2.006.401-3.024l.003-.332l.393-.779l.44-.862l.214-.434l.118-.247c.265-.565.456-1.033.574-1.43l.014-.056l.008-.018c.22-.593-.166-1.358-.941-1.358l-.122.007a1 1 0 0 0-.231.057l-.086.038a8 8 0 0 1-.88.36l-.356.115l-.271.08l-.772.214c-1.336-1.118-3.144-1.254-5.012-.554l-.211.084z"/></svg>
        <h6>Share on Twitter</h6>
        </div>
        <div className="blog-content-btn" style={{backgroundColor: "#E82B2D"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M17 3.34a10 10 0 0 1-8.512 18.023l2.364-5.315A3.5 3.5 0 0 0 13.25 17c2.708 0 4.75-2.089 4.75-5a6 6 0 1 0-11.64 2.041a1 1 0 1 0 1.88-.682a4 4 0 1 1 7.76-1.36C16 13.817 14.844 15 13.25 15c-.609 0-1.153-.361-1.478-1.022l1.142-2.572a1 1 0 0 0-1.828-.812l-4.392 9.882A10 10 0 0 1 2 12l.005-.324A10 10 0 0 1 17 3.34"/></svg>
        <h6>Share on Pinterest</h6>
        </div>
      </div>
      <div className="blog-navigation-container">
        <div className="blog-navigation underline-animation" onClick={handleNavigation("-")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 7l-5 5m0 0l5 5"/></svg>
        <h6>Previous Post</h6>
        </div>
        <div className="blog-navigation underline-animation" onClick={handleNavigation("+")}>
        <h6>Next Post</h6>

        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 17l5-5m0 0l-5-5"/></svg> 
        </div>
      </div>

      <div className="product-review-clients-container" >

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

    </section>
  )
}

export default BlogPage