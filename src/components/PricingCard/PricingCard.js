import React from "react";
import "./PricingCard.css";
import Btn from "../Btn/Btn";
import { Link } from "react-router-dom";

const PricingCard = ({ title, features, price, oldPrice }) => {
  const handleLinkClick = (event, id) => {
    event.preventDefault();
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pricing-card">
      <h2 className="pricing-card-title">{title}</h2>
      <ul className="pricing-card-features">
        {features.map((feature, index) => (
          <>
            <li key={index}>
              <i className="fa-regular fa-square-check"></i> {feature}
            </li>
          </>
        ))}
      </ul>
      <div className="pricing-card-price">
        <div className="pricing-card-price-old">{oldPrice}</div>
        {price} <span>(abonament lunar)</span>
      </div>

      <Link to="tel:+40728739818">
        <Btn variant="outlined">Contactează-ne acum!</Btn>
      </Link>
    </div>
  );
};

export default PricingCard;
