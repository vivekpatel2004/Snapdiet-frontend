import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (e, hash) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/#" + hash);
    } else {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">SnapDiet</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleScroll(e, "about")}>
            About
          </a>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
