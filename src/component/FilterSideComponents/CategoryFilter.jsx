import React, { useContext, useEffect, useState } from "react";



import { AiOutlineMinus } from "react-icons/ai";

import Slider from "rc-slider";

import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router";
import { ShopFilterBtnContext } from "../../Context/ShopFilterBtnContext";

{
  /* <AiOutlineMinus /> */
}

const data = [
  {
    BrandName: "Adidas",
    idTag: "brand-Adidas",
    quantity: 2,
  },
  {
    BrandName: "Balmain",
    idTag: "brand-Balmain",
    quantity: 7,
  },
  {
    BrandName: "Balenciaga",
    idTag: "brand-Balenciaga",
    quantity: 10,
  },
  {
    BrandName: "Burberry",
    idTag: "brand-Burberry",
    quantity: 39,
  },
  {
    BrandName: "Kenzo",
    idTag: "brand-Kenzo",
    quantity: 95,
  },

  {
    BrandName: "Gicenchy",
    idTag: "brand-Gicenchy",
    quantity: 1092,
  },
  {
    BrandName: "Zara",
    idTag: "brand-Zara",
    quantity: 48,
  },
];

function CategoryFilter() {

  const { filteringBtns, setFilteringBtns, handleFilterClick, handleCancelClick , updateURL } = useContext(ShopFilterBtnContext)
  const [range, setRange] = useState([10, 1000]);

  



  const handleChange = (value) => {
    setRange(value);
  };








  return (
    <>
      <div className="categories-btn-container">
        {Object.entries(filteringBtns.productType)
          .filter(([_, isActive]) => isActive)
          .map(([categoryDetail]) => {
            return (
              <div key={categoryDetail} className="filter-small-btn">
                <div className="filter-small-btn-wrapper">
                  <a
                    className="filter-cancel-icon"
                    onClick={() =>
                      handleCancelClick("productType", categoryDetail)
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                      />
                    </svg>
                  </a>
                  <h6>
                    {categoryDetail.charAt(0).toUpperCase() +
                      categoryDetail.slice(1)}
                  </h6>
                </div>
              </div>
            );
          })}
      </div>
      <div
        class="accordion accordion-flush"
        id="accordionPanelsStayOpenExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Product Categories
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
          >
            <div class="accordion-body">
              <div className="row ">
                <div className="col-6 ">
                  <div className="filter-category-col">
                    <ul>
                      <li
                        className="dresses underline-animation"
                        onClick={() =>
                          handleFilterClick("productType", "dresses")
                        }
                      >
                        Dresses
                      </li>
                      <li
                        className="sweatshirts underline-animation"
                        onClick={() =>
                          handleFilterClick("productType", "sweatshirts")
                        }
                      >
                        Sweatshirts
                      </li>
                      <li
                        className="jackets underline-animation"
                        onClick={() =>
                          handleFilterClick("productType", "jackets")
                        }
                      >
                        Jackets
                      </li>
                      <li
                        className="jeans underline-animation"
                        onClick={() =>
                          handleFilterClick("productType", "jeans")
                        }
                      >
                        Jeans
                      </li>
                      <li
                        className="men underline-animation"
                        onClick={() => handleFilterClick("productType", "men")}
                      >
                        Men
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="filter-category-col">
                    <ul>
                      <li
                        className="underline-animation"
                        onClick={() =>
                          handleFilterClick("productType", "Shorts")
                        }
                      >
                        Shorts
                      </li>
                      <li
                        className="underline-animation"
                        onClick={() =>
                          handleFilterClick("productType", "Swimwear")
                        }
                      >
                        Swimwear
                      </li>
                      <li
                        className="underline-animation"
                        onClick={() =>
                          handleFilterClick("productType", "tShirtsTops")
                        }
                      >
                        T-Shirts & Tops
                      </li>
                      <li
                        className="underline-animation"
                        onClick={() =>
                          handleFilterClick("productType", "trousers")
                        }
                      >
                        Trousers
                      </li>
                      <li
                        className="underline-animation"
                        onClick={() =>
                          handleFilterClick("productType", "jumpersCardigans")
                        }
                      >
                        Jumpers & Cardigans
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Color
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse show"
          >
            <div class="accordion-body">
              <form className="filter-all-color-container">
                {Object.entries(filteringBtns.colors).map(
                  ([colorDetail, isActive]) => (
                    <label key={colorDetail}>
                      <input
                        type="checkbox"
                        name="color"
                        id={colorDetail}
                        className="filter-color-container"
                        checked={isActive} // Controlled checkbox
                        onChange={() => handleCancelClick("colors", colorDetail)} // Reusing the function
                      />
                      
                        <div className="custom-radio-wrapper">
                          <div className="custom-radio" style={{backgroundColor: colorDetail}}></div>
                        </div>
                    </label>
                  )
                )}
              </form>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Size
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse show"
          >
            <div class="accordion-body">
              <form className="filter-size-container">
               {Object.entries(filteringBtns.sizes).map( ([colorDetail, isActive]) => {
                return (
                  <>
                  <input
                type="checkbox"
                name="size"
                id= {colorDetail}
                checked={isActive} // Controlled checkbox
                className="filter-size-input"
                />
                <label for="size-xs" className={`filter-size-btn ${isActive ? "filter-size-input-checked" : ""}`}  onClick={() => handleCancelClick("sizes", colorDetail)} // Reusing the function
                >
                {colorDetail}
                </label>
                </>
                
                )
               } )  }
               
               
               

                
              </form>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseFour"
            >
              Brand
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            class="accordion-collapse collapse show"
          >
            <div class="accordion-body">
              <form className="filter-brand-container">
                <div className="filter-brand-search">
                  <input type="search" placeholder="products" />
                  <svg
                    id="filter-brand-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="rgba(119, 119, 119, 0.7)"
                      d="M15.096 5.904a6.5 6.5 0 1 0-9.192 9.192a6.5 6.5 0 0 0 9.192-9.192M4.49 4.49a8.5 8.5 0 0 1 12.686 11.272l5.345 5.345l-1.414 1.414l-5.345-5.345A8.501 8.501 0 0 1 4.49 4.49"
                    />
                  </svg>
                </div>

                <div className="filter-popular-brand-container">{
                  data.map((brand) => (
                    <div className="filter-popular-brand" key={brand.idTag}>
                      <div className="checkbox-squre-with-outline">
                        <input type="checkbox" name=""  
                        id={`brand-${brand.BrandName.toLowerCase()}`} // Convert to lowercase
                        checked={filteringBtns.brands[brand.BrandName.toLowerCase()] || false} // Ensure controlled component
                        onChange={() => handleCancelClick('brands', brand.BrandName.toLowerCase())} // Pass lowercase name
                        htmlFor={`brand-${brand.BrandName.toLowerCase()}`}
                        />
                        <label for={`brand-${brand.idTag}`}>{brand.BrandName}</label>
                      </div>
                      <h6>{brand.quantity}</h6>
                    </div>
                  ))
                  }</div>
              </form>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFive"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseFive"
            >
              Price
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFive"
            class="accordion-collapse collapse show"
          >
            <div class="accordion-body">
              <div className="filter-price-container">
                <div className="filter-bar-container">
                  <Slider
                    range
                    min={10}
                    max={1000}
                    defaultValue={[10, 1000]}
                    onChange={handleChange}
                    allowCross={false}
                  />
                </div>
                <div className="filter-pirce-container">
                  <p>
                    Min Price: <span>${range[0]}</span>
                  </p>
                  <p>
                    Max Price: <span>${range[1]}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryFilter;


// <input
// type="checkbox"
// name="size"
// id="size-xs"
// className="filter-size-input"
// />
// <label for="size-xs" className="filter-size-btn">
// XS
// </label>
