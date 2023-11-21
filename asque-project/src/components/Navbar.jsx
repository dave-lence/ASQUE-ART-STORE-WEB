import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  let navigate = useNavigate()
  const [click, setClick] = useState(false);



  let userIsAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'))
  let cartCount = 0
  let getCount = JSON.parse(localStorage.getItem("asqueCart"))
  if (getCount !== null) {
    cartCount = getCount.length
  }

  const logOutUser = () => {
    localStorage.removeItem("isAuthenticated");
    navigate('/')
  }

  const handleClick = () => {
    setClick(!click);
    if (!click) {
      document.body.style["overflow"] = "hidden";
    } else {
      document.body.style["overflow"] = "auto";
    }
  };

  const closeMobileMenu = () => {
    setClick(false);
    document.body.style["overflow"] = "auto";
  };

  useEffect(() => {
    const onScroll = () => {
      let scroll = window.pageYOffset;
      let navbar = document.getElementsByClassName("the-navbar")[0];

      if (scroll > 450) {
        if (!navbar.classList.contains("fix-navbar")) {
          navbar.classList.add("fix-navbar");
        }
      } else {
        navbar.classList.remove("fix-navbar");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <nav className={click ? "nav-clicked the-navbar" : "the-navbar"}>
        <div className="nav-left">
          <NavLink onClick={closeMobileMenu} to="/">
            <h2>ASQUE</h2>
          </NavLink>
        </div>
        <div className="mobile-icons">
          {userIsAuthenticated ? (
            <NavLink to="/user/dashboard" className="cartIcon">
              <i className="fa fa-user"></i>
            </NavLink>
          ) : (
            <NavLink
              onClick={closeMobileMenu}
              id="login"
              className="sign-in-btn"
              to="/login"
            >
              sign in
            </NavLink>
          )}
          <NavLink to="/cart" className="cartIcon">
            <div className="cart__wrapper">
              <i className="fa fa-shopping-cart"></i>
              <span>{cartCount}</span>
            </div>
          </NavLink>
          <i
            onClick={handleClick}
            className={click ? "fa fa-times" : "fa fa-align-right"}
          ></i>
        </div>
        <div className={click ? "nav-menu active" : "nav-menu"}>
          <div className="desktop-links">
            <NavLink
              onClick={closeMobileMenu}
              id="home"
              className="nav-link"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={closeMobileMenu}
              className="nav-link"
              to="/shop"
            >
              Shop
            </NavLink>
            <NavLink
              onClick={closeMobileMenu}
              className="nav-link"
              to="/about-us"
            >
              About us
            </NavLink>
            <NavLink
              onClick={closeMobileMenu}
              className="nav-link"
              to="/services"
            >
              Services
            </NavLink>
            <NavLink
              onClick={closeMobileMenu}
              className="nav-link"
              to="/contact-us"
            >
              Contact us
            </NavLink>
            {/* {click && (
              <>
                {userIsAuthenticated == true ? (
                  <NavLink
                    onClick={closeMobileMenu}
                    className="nav-link"
                    to="/user/dashboard"
                  >
                    Dashboard
                  </NavLink>
                ) : (
                  <NavLink
                    onClick={closeMobileMenu}
                    id="login"
                    className="nav-link"
                    to="/login"
                  >
                    Login
                  </NavLink>
                )}
              </>
            )} */}
          </div>
          <div className="mobile-links">
            {userIsAuthenticated === true ? (
              <NavLink
                onClick={closeMobileMenu}
                className="nav-link"
                to="/user/dashboard"
              >
                Dashboard
              </NavLink>
            ) : (
              <NavLink
                onClick={closeMobileMenu}
                id="login"
                className="sign-in-btn"
                to="/login"
              >
                sign in
              </NavLink>
            )}
            <NavLink
              onClick={closeMobileMenu}
              id="login"
              className="seller-btn"
              to="/become-a-seller"
            >
              Become a seller
            </NavLink>
            <div className="social-links">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook"></i>
            </div>
          </div>
        </div>
        <div className="nav-right">
          <NavLink to="/cart">
            <div className="cart-wrapper">
              <i className="fa fa-shopping-cart"></i>
              <span>{cartCount}</span>
            </div>
          </NavLink>
          {userIsAuthenticated === true ? (
            <NavLink
              onClick={closeMobileMenu}
              className="nav-link"
              to="/user/dashboard"
            >
              Dashboard
            </NavLink>
          ) : (
            <NavLink
              onClick={closeMobileMenu}
              id="login"
              className="sign-in-btn"
              to="/login"
            >
              sign in
            </NavLink>
          )}
          {userIsAuthenticated && (
            <i onClick={() => {
              closeMobileMenu();
              logOutUser();
            }} className="fa fa-sign-out"></i>
          )}
          <NavLink
            onClick={closeMobileMenu}
            id="login"
            className="seller-btn"
            to="/become-a-seller"
          >
            Become a seller
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
