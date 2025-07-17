import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", hash: "about" },
    { name: "Services", hash: "services" },
    { name: "Contact", hash: "contact" },
  ];

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
        {navLinks.map((link, idx) => (
          <li key={idx}>
            {link.hash ? (
              <a href={`#${link.hash}`} onClick={(e) => handleScroll(e, link.hash)}>
                {link.name}
              </a>
            ) : (
              <Link to={link.path}>{link.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
