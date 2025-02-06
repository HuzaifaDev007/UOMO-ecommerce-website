import React from 'react'
import { NavLink } from 'react-router'
import '../../css/Navbar/MenuOpenMobile.css'

function MenuOpenMobile({handleCloseMenuMobile}) {
  return (
    <div className='menu-open-mobile '>
      <div className="menu-open-mobile-container">
        <div className="menu-open-mobile-container-line">

        <div className="menu-open-search-container">
          <input type="text" placeholder='Search products'/>
          <i class="ri-search-line"></i>
        </div>

        <div className="menu-open-mobile-navigation-btn-container">
        <ul>
                <li className="underline-animation" onClick={handleCloseMenuMobile} >
                  <NavLink
                    to={"/"}
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c32929" : "var(--dark-black-color)",
                    })}
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="underline-animation" onClick={handleCloseMenuMobile}>
                  <NavLink
                    to={"shop"}
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c32929" : "var(--dark-black-color)",
                    })}
                    >
                    SHOP
                  </NavLink>
                </li>
                <li className="underline-animation" onClick={handleCloseMenuMobile}>
                <NavLink
                    to={"blog"}
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c32929" : "var(--dark-black-color)",
                    })}
                    >
                    Blog
                  </NavLink>
                </li>
                
                <li className="underline-animation" onClick={handleCloseMenuMobile}>
                <NavLink
                    to={"about"}
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c32929" : "var(--dark-black-color)",
                    })}
                    >
                    ABOUT
                  </NavLink>
                </li>
                <li className="underline-animation" onClick={handleCloseMenuMobile}>
                <NavLink
                    to={"contact"}
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c32929" : "var(--dark-black-color)",
                    })}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
        </div>

      </div>
      </div>

    </div>
  )
}

export default MenuOpenMobile