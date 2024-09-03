import React from "react";

import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleLinkClick = (event, id) => {
    event.preventDefault();
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="footer">
      <h2 className="text-2">yrd.agency</h2>
      <div className="footer-links">
        <div>
          <i className="fa-solid fa-house"></i>
          <Link to="/" onClick={(e) => handleLinkClick(e, "#home")}>
            Home
          </Link>
        </div>
        <div>
          <i className="fa-solid fa-tag"></i>
          <Link to="/about" onClick={(e) => handleLinkClick(e, "#prices")}>
            Oferte
          </Link>
        </div>
        <div>
          <i className="fa-solid fa-comments"></i>
          <Link to="/contact" onClick={(e) => handleLinkClick(e, "#reviews")}>
            Recenzii
          </Link>
        </div>
        <div>
          <i className="fa-solid fa-arrow-trend-up"></i>
          <Link to="/contact" onClick={(e) => handleLinkClick(e, "#benefits")}>
            Avantaje
          </Link>
        </div>
        <div>
          <i className="fa-solid fa-list-check"></i>
          <Link to="/contact" onClick={(e) => handleLinkClick(e, "#services")}>
            Servicii
          </Link>
        </div>
        <div>
          <i className="fa-solid fa-folder-open"></i>
          <Link to="/contact" onClick={(e) => handleLinkClick(e, "#portfolio")}>
            Portfolio
          </Link>
        </div>
        <div>
          <i className="fa-solid fa-message"></i>
          <Link to="/contact" onClick={(e) => handleLinkClick(e, "#contact")}>
            Contact
          </Link>
        </div>
      </div>
      <div className="footer-contacts">
        <Link to="https://wa.me/40728739818?text=Salut!%20As%20vrea%20s%C4%83%20colabor%C4%83m.">
          0728 739 818
        </Link>
        <Link to="https://www.instagram.com/yrd_agency/">@yrd.agency</Link>
        <Link
          to="#"
          onClick={(e) => {
            window.location.href = "mailto:contact@yrd.agency";
            e.preventDefault();
          }}
        >
          contact@yrd.agency
        </Link>{" "}
      </div>
      <p className="p-1">
        © 2024 Yrd Agency. <br /> All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
