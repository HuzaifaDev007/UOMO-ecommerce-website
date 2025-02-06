import React, { useEffect, useState } from "react";



import "../css/FilterSidePage.css";
import CategoryFilter from "./FilterSideComponents/CategoryFilter";

function FilterSidePage({ filterOpen, setFilterOpen }) {
  

  return (
    <>

    
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasFilter" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">FILTER</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">

    
  <div className="filter-side-page-all-content-container">
            <CategoryFilter />

          </div>
  </div>
</div>


    </>
  );
}

export default FilterSidePage;





// <>
// {" "}
// <div
//   className={`nav-background-fade ${
//     fadeAnimation ? "nav-background-fade-animation" : ""
//   }`}
//   onClick={(e) => handleCloseLoginBox(e)}
// ></div>
// <div
//   className={`right-side-page ${
//     fadeAnimation ? "right-side-page-animation" : ""
//   }`}
// >
//   <div className="filter-side-page-container">
//   <div className="filter-title-and-close-container">
//       <h6>Filter By</h6>
//       <i
//         class="ri-close-line"
//         onClick={() => setCloseWishAnimation(!closeWishAnimation)}
//       ></i>
//     </div>

//     <div className="filter-side-page-all-content-container">
//       <CategoryFilter />

//     </div>


//   </div>
// </div>
// </>
