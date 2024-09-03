import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add("menuOpen");
    } else {
      document.documentElement.classList.remove("menuOpen");
    }
  }, [menuOpen]);

  const handleLinkClick = (event, id) => {
    event.preventDefault();
    setMenuOpen(false);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <h2 className="text-2">yrd</h2>
          </Link>
        </div>

        <ul className={`links ${menuOpen ? "open" : ""}`}>
          <li className="link">
            <div>
              <i className="fa-solid fa-house"></i>
              <Link to="/" onClick={(e) => handleLinkClick(e, "#home")}>
                Home
              </Link>
            </div>
          </li>
          <li className="link">
            <div>
              <i className="fa-solid fa-tag"></i>
              <Link to="/about" onClick={(e) => handleLinkClick(e, "#prices")}>
                Oferte
              </Link>
            </div>
          </li>
          <li className="link">
            <div>
              <i className="fa-solid fa-comments"></i>
              <Link
                to="/contact"
                onClick={(e) => handleLinkClick(e, "#reviews")}
              >
                Recenzii
              </Link>
            </div>
          </li>
          <li className="link">
            <div>
              <i className="fa-solid fa-arrow-trend-up"></i>
              <Link
                to="/contact"
                onClick={(e) => handleLinkClick(e, "#benefits")}
              >
                Avantaje
              </Link>
            </div>
          </li>
          <li className="link">
            <div>
              <i className="fa-solid fa-list-check"></i>
              <Link
                to="/contact"
                onClick={(e) => handleLinkClick(e, "#services")}
              >
                Servicii
              </Link>
            </div>
          </li>
          <li className="link">
            <div>
              <i className="fa-solid fa-folder-open"></i>
              <Link
                to="/contact"
                onClick={(e) => handleLinkClick(e, "#portfolio")}
              >
                Portfolio
              </Link>
            </div>
          </li>
          <li className="link">
            <div>
              <i className="fa-solid fa-message"></i>
              <Link
                to="/contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
              >
                Contact
              </Link>
            </div>
          </li>
        </ul>

        <div onClick={toggleMenu} className="menu-btn">
          <span className="span span1"></span>
          <span className="span span2"></span>
          <span className="span span3"></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
