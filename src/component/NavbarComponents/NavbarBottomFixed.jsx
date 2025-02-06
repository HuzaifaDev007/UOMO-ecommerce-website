import React from "react";
import { NavLink } from "react-router";


import "../../css/Navbar/NavbarBottomFixed.css";
import { HiOutlineHome } from "react-icons/hi";
import { TbHanger } from "react-icons/tb";
import { HiOutlineHeart } from "react-icons/hi";


function NavbarBottomFixed() {
  return (
    <div className="NavbarBottomFixed">
      <div className="navbar-bottom-container">
        <NavLink to={'/'} className="nav-bottom-icon-container" style={{textDecoration: "none", color: "inherit"}}>
          <HiOutlineHome id="home-mobile-size-icon-fixed-navbar" />
          <h6>Home</h6>
        </NavLink>
        <NavLink to={'shop'} className="nav-bottom-icon-container" style={{textDecoration: "none", color: "inherit"}}>
          <TbHanger id="home-mobile-size-icon-fixed-navbar" />
          <h6>Shop</h6>
        </NavLink>

        <div className="nav-bottom-icon-container nav-bottom-heart-container">

          {/* added padding in the wish container and IT IS EFFECT NAVBAR WIDTH NOT JUST WISH LIST WIDTH (copyed css from nav-icons whishlist)*/}
          <HiOutlineHeart id="home-mobile-size-icon-fixed-navbar" />
        <h6>WishList</h6>

        </div>

        
      </div>
    </div>
  );
}

export default NavbarBottomFixed;
