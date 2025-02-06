import React from 'react'
import '../css/NotFound.css'
import { useNavigate } from 'react-router';

function NotFound() {

    const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      // If there is browsing history, go back
      window.history.back();
    } else {
      // If no history, redirect to the homepage
      navigate('/');
    }
  };

  return (
    <section id='NotFound'>
            <div className="notfound-container">
                <h3>OOPS!</h3>
                <h6>Page not found</h6>
                <p>Sorry, we couldn't find the page you where looking for. We suggest that you return to home page.</p>
                <div className="go-back-btn-container" onClick={handleGoBack}>
                    <p>Back</p>

                </div>

            </div>
    </section>
  )
}

export default NotFound