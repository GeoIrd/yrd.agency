import React from "react";
import "./Pricing.css";
import PricingCard from "../PricingCard";

const Pricing = () => {
  const pricingData = [
    {
      title: "PACHET STANDARD",
      features: [
        "Design pentru cărți de vizită",
        "Logo personalizat (2 variante)",
        "12 postări lunare pe Instagram",
      ],
      price: "99€ ",
      oldPrice: "149€ ",
    },
    {
      title: "PACHET PREMIUM",
      features: [
        "WEBSITE personalizat",
        "Design pentru cărți de vizită",
        "Logo personalizat (2 variante)",
        "12 postări lunare pe Instagram",
      ],
      price: "150€ ",
      oldPrice: "199€ ",
    },
    {
      title: "PACHET BUSINESS",
      features: [
        "MAGAZIN ONLINE modern",
        "Design pentru cărți de vizită",
        "Logo personalizat (2 variante)",
        "12 postări lunare pe Instagram",
      ],
      price: "200€ ",
      oldPrice: "499€ ",
    },
  ];

  return (
    <div className="pricing-container">
      <div className="blob blob1">
        <img
          src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1721943584/blob1_z25ptx.webp"
          alt="blob 1"
        />
      </div>
      <div className="blob blob2">
        <img
          src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1721943584/blob2_onn4jb.webp"
          alt="blob 2"
        />
      </div>
      <div className="blob blob3">
        <img
          src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1721943583/blob3_ciadmu.webp"
          alt="blob 2"
        />
      </div>

      {pricingData.map((card, index) => (
        <PricingCard
          key={index}
          title={card.title}
          features={card.features}
          price={card.price}
          oldPrice={card.oldPrice}
        />
      ))}
    </div>
  );
};

export default Pricing;
