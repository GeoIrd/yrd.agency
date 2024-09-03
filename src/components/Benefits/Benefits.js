import React, { useState } from "react";
import "./Benefits.css";

const Benefits = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="benefits-list">
      <ul>
        <li
          onClick={() => toggleAccordion(0)}
          className={openIndex === 0 ? "opened" : ""}
        >
          <span>1</span> Mai mulți clienți
          {openIndex === 0 && (
            <div className="content">
              Atragerea unui număr mai mare de clienți poate fi realizată prin
              campanii de marketing eficiente și strategii bine planificate care
              cresc expunerea brandului tău.
            </div>
          )}
        </li>
        <li
          onClick={() => toggleAccordion(1)}
          className={openIndex === 1 ? "opened" : ""}
        >
          <span>2</span> Vizibilitate Sporită
          {openIndex === 1 && (
            <div className="content">
              Creșterea vizibilității online este esențială pentru a atrage
              atenția asupra produselor sau serviciilor tale și pentru a întări
              prezența afacerii tale pe piață.
            </div>
          )}
        </li>
        <li
          onClick={() => toggleAccordion(2)}
          className={openIndex === 2 ? "opened" : ""}
        >
          <span>3</span> Branding Consolidat
          {openIndex === 2 && (
            <div className="content">
              Consolidarea brandului ajută la crearea unei imagini coerente și
              profesioniste, ceea ce îmbunătățește recunoașterea și încrederea
              clienților.
            </div>
          )}
        </li>
        <li
          onClick={() => toggleAccordion(3)}
          className={openIndex === 3 ? "opened" : ""}
        >
          <span>4</span> Vânzări Majorate
          {openIndex === 3 && (
            <div className="content">
              Creșterea vânzărilor poate fi realizată prin strategii de
              marketing bine orientate și optimizarea experienței clientului
              pentru a maximiza conversiile.
            </div>
          )}
        </li>
        <li
          onClick={() => toggleAccordion(4)}
          className={openIndex === 4 ? "opened" : ""}
        >
          <span>5</span> Conversii Optimizate
          {openIndex === 4 && (
            <div className="content">
              Optimizarea conversiilor implică îmbunătățirea elementelor
              site-ului pentru a încuraja vizitatorii să întreprindă acțiuni
              dorite, cum ar fi cumpărăturile sau înscrierile.
            </div>
          )}
        </li>
        <li
          onClick={() => toggleAccordion(5)}
          className={openIndex === 5 ? "opened" : ""}
        >
          <span>6</span> Fidelizarea Clienților
          {openIndex === 5 && (
            <div className="content">
              Fidelizarea clienților se bazează pe crearea unor experiențe
              pozitive și oferirea unor beneficii constante pentru a încuraja
              clienții să revină.
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Benefits;
