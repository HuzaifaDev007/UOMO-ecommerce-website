import React, { useEffect, useState } from "react";
import "../HomeCss/FeaturedHome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../mainpage.js";

import "../component/ProductCard.jsx";
import ProductCard from "../component/ProductCard.jsx";

function FeaturedHome() {
  const [btnActive, setBtnActive] = useState("All");

  const [displayData, setDisplayData] = useState(null);

  useEffect(() => {
    const products = data.map((product) => (
      <div className=" col-6 col-md-4 col-lg-3" key={product.id}>
        <ProductCard product={product} />
      </div>
    ));

    setDisplayData(products);
  }, []);

  const handleBtnDisplay = (item) => {

    if (item === "All") 
      {

      setDisplayData(
        data.map((product) => (
          <div className=" col-6 col-md-4 col-lg-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))
      );

      setBtnActive(item)
    } 
    else 
    {
      const filterData = data.filter((product) => product[item]);

      setDisplayData(
        filterData.map((product) => (
          <div className=" col-6 col-md-4 col-lg-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))
      );
      setBtnActive(item)

    }
  };

  return (
    <section id="FeaturedHome">
      <div className="feature-title-btn-container">
        <h5>
          Our Trendy <span>Products</span>
        </h5>

        <div className="btn-container">
          <h4
            className={`navigation-link underline-animation featured-btn ${btnActive === "All" ? "active-display-btn" : ""}`}
            onClick={() => handleBtnDisplay("All")}
          >
            All
          </h4>
          <h4
            className={`navigation-link underline-animation featured-btn ${btnActive === "newArrival" ? "active-display-btn" : ""}`}
            onClick={() => handleBtnDisplay("newArrival")}
          >
            New Arrival
          </h4>
          <h4
            className={`navigation-link underline-animation featured-btn ${btnActive === "bestSelles" ? "active-display-btn" : ""}`}
            onClick={() => handleBtnDisplay("bestSelles")}
          >
            Best Seller
          </h4>
          <h4
            className={`navigation-link underline-animation featured-btn ${btnActive === "topRated" ? "active-display-btn" : ""}`}
            onClick={() => handleBtnDisplay("topRated")}
          >
            Top Rated
          </h4>
        </div>
      </div>

      <div className="feature-home-items-container">
        <div className="row custom-gap g-4">{displayData}</div>
      </div>
    </section>
  );
}

export default FeaturedHome;
