import React from "react";

import "./Desktop.css";
import { Link } from "react-router-dom";
import Btn from "../Btn/Btn";

const Desktop = () => {
  return (
    <div className="desktop-container">
      <h1>Experiență Optimă pe Mobil</h1>
      <p>
        Se pare că vizitezi site-ul nostru de pe un dispozitiv desktop. Pentru a
        beneficia de o experiență optimizată, te rugăm să accesezi site-ul de pe
        un dispozitiv mobil.
      </p>
      <p>
        Dacă ai nevoie de asistență suplimentară, nu ezita să ne contactezi
        telefonic sau prin alte canale.
      </p>
      <Link to="tel:+40728739818">
        <Btn>Contactează-ne Telefonic</Btn>
      </Link>
    </div>
  );
};

export default Desktop;
