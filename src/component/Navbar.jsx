import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import "../css/Navbar.css";
import WishList from "./NavbarComponents/WishList";
import LoginNav from "./NavbarComponents/LoginNav";
import MenuOpenMobile from "./NavbarComponents/MenuOpenMobile";
import NavbarBottomFixed from "./NavbarComponents/NavbarBottomFixed";
import { CartContext } from "../Context/CartContext";

function Navbar() {
  const {localStorageData} = useContext(CartContext)
    

  const [SmallScreen, setSmallScreen] = useState(null);
  const [desktopSearch, setDesktopSearch] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);


  //  (COMPONENT --> MenuOpenMobile) can't put that in the component because the btn to display or hide is in the navbar component)
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);

  // menu open animation for mobile (component --> MenuOpenMobile)
  useEffect(() => {
    const menuContainer = document.querySelector(".menu-open-mobile");
    if (menuMobileOpen) {
      document.body.classList.add("no-scroll");
      menuContainer.style.display = "flex";
      setTimeout(() => {
        menuContainer.classList.add("menu-open");
      }, 10);
    } else {
      document.body.classList.remove("no-scroll");
      menuContainer.classList.remove("menu-open");
      setTimeout(() => {
        menuContainer.style.display = "none";
      }, 300);
    }
  }, [menuMobileOpen]);



  

  useEffect(() => {
    // Scroll handler
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 0) {
        setIsVisible(true);
        return;
      }
  
      setIsVisible(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };
  
    // Resize handler
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 1080);
    };
  
    // Initial setup
    handleResize();
    
    // Event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
  
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     if (currentScrollY <= 0) {
  //       setIsVisible(true);
  //       return;
  //     }

  //     // Scroll down
  //     if (currentScrollY > lastScrollY.current) {
  //       setIsVisible(false);

  //     } 
  //     // Scroll up
  //     else {
  //       setIsVisible(true);

  //     }

  //     lastScrollY.current = currentScrollY;
  //   };

  //   window.addEventListener('scroll', handleScroll, { passive: true });
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // Separate scroll effect

  useEffect(() => {
    const searchContainer = document.querySelector(".search-container");

    if (desktopSearch) {
      searchContainer.style.display = "flex";
      setTimeout(() => {
        searchContainer.classList.add("search-container-animation");
      }, 100);
    } else {
      {
        searchContainer.style.display = "none";
        setTimeout(() => {
          searchContainer.classList.remove("search-container-animation");
        }, 100);
      }
    }
  }, [desktopSearch]);

  const handleCloseMenuMobile =() => {
    setMenuMobileOpen(!menuMobileOpen)

  }

  return (
    <>
      <header id="Navbar" style={{top: isVisible ? 0 : '-100px',}}> 
        <nav className="nav-container">
          <i
            class={`${
              menuMobileOpen ? "ri-close-line" : "ri-menu-2-line"
            }  nav-menu-icon ${SmallScreen ? "" : "DISPLAY-NONE"}`}
            onClick={() => setMenuMobileOpen(!menuMobileOpen)}
          ></i>
          <div className="nav-logo-and-btn-container">
            <div className="nav-logo-container" >
              <NavLink to='/' style={{ textDecoration: 'none', color: 'inherit' }}><img src="/logo.png" alt="" /></NavLink>
            </div>
            <div
              className={`navigation-btn-container-dsk-top ${
                SmallScreen ? "DISPLAY-NONE" : ""
              }`}
             >
              <ul>
                <li className="underline-animation">
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
                <li className="underline-animation">
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
                <li className="underline-animation">
                <NavLink
                    to={"blogs"}
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c32929" : "var(--dark-black-color)",
                    })}
                  >
                    Blog
                  </NavLink>
                </li>
                
                <li className="underline-animation">
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
                <li className="underline-animation">
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

          <div className="nav-icons-container" >
            <div
              className={`nav-icons-dsk-top ${
                SmallScreen ? "DISPLAY-NONE" : ""
              }`}
            >
              <i
                class={`${desktopSearch ? "ri-close-line" : "ri-search-line"}`}
                onClick={() => setDesktopSearch(!desktopSearch)}
               ></i>
              <i
                type="button"
                class="ri-user-line"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasLogin"
                aria-controls="offcanvasLogin"
              ></i>
              <i class="ri-heart-line"></i>
            </div>
            {/*  */}
            <div
              className="nav-wish-list-container"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasShopping"
              aria-controls="offcanvasShopping"
              data-count={localStorageData.length}
            >
              {/* added padding in the wish container and IT IS EFFECT NAVBAR WIDTH NOT JUST WISH LIST WIDTH */}
              <i class="ri-shopping-bag-line"></i>
              
            </div>
          </div>
          <WishList />
          <LoginNav />
        </nav>

        {/* search desktop */}
        <div
          className={`search-container  ${desktopSearch ? "" : "DISPLAY-NONE"}`}
        >
          <h5>What are you looking for?</h5>
          <div className="input-container">
            <input type="text" name="" id="" placeholder="Search products" />
            <i className="ri-search-line"></i>
          </div>
          <div className="suggestion-container">
            <h4>Quicklinks</h4>

            <div className="suggestion-queue-container">
              <div className="suggestion-queue">
                <h5 className="underline-animation">New Arrival</h5>
              </div>
              <div className="suggestion-queue">
                <h5 className="underline-animation">Dresses</h5>
              </div>
              <div className="suggestion-queue">
                <h5 className="underline-animation">Accessories</h5>
              </div>
              <div className="suggestion-queue">
                <h5 className="underline-animation">Footwear</h5>
              </div>
              <div className="suggestion-queue">
                <h5 className="underline-animation">Sweatshirts</h5>
              </div>
            </div>
          </div>
        </div>

        {/* menu mobile */}
        <MenuOpenMobile handleCloseMenuMobile={handleCloseMenuMobile}/>

        {/* botton mobile navbar */}
        {SmallScreen && <NavbarBottomFixed />}

        
      </header>
    </>
  );
}

export default Navbar;
