import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

const Navbar = () => {
//   const navigate = useNavigate();
  const [click, setClick] = useState(false);
//   const handleClick = () => {
//     setClick(!click);
//     if (!click) {
//       document.body.style["overflow"] = "hidden";
//     } else {
//       document.body.style["overflow"] = "auto";
//     }
//   };
  const closeMobileMenu = () => {
    setClick(false);
    document.body.style["overflow"] = "auto";
  };
//   const storeContext = useSelector((state) => state.store);
//   const { isAuthenticated, cartCount } = storeContext;

//   useEffect(() => {
//     const onScroll = () => {
//       let scroll = window.pageYOffset;
//       let navbar = document.getElementsByClassName("the-navbar")[0];

//       if (scroll > 450) {
//         if (!navbar.classList.contains("fix-navbar")) {
//           navbar.classList.add("fix-navbar");
//         }
//       } else {
//         navbar.classList.remove("fix-navbar");
//       }
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     let inputEntry = e.target.name.value.replaceAll(" ", "-");
//     closeMobileMenu();
//     navigate("/shop/search", { state: { searchValue: inputEntry } });
//   };

  return (
    <>
      <nav className={click ? "nav-clicked the-navbar" : "the-navbar"}>
        <div className="desktop-links">
            <NavLink
              onClick={closeMobileMenu}
              id="home"
              className="nav-link"
              to="/"
            >
              Home
            </NavLink>
            <NavLink onClick={closeMobileMenu} className="nav-link" to="/shop">
              Shop
            </NavLink>
            <NavLink
              onClick={closeMobileMenu}
              className="nav-link"
              to="/contact-us"
            >
              Contact
            </NavLink>
              <NavLink
                onClick={closeMobileMenu}
                className="nav-link"
                to="/user/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                onClick={closeMobileMenu}
                id="login"
                className="nav-link"
                to="/login"
              >
                Login
              </NavLink>
          </div>
          </nav>
    </>
  );
};

export default Navbar;
