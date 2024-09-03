import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomeBlob from "./components/HomeBlob/HomeBlob";
import Btn from "./components/Btn/Btn";
import Pricing from "./components/PricingCard/Pricing/Pricing";
import Reviews from "./components/Reviews/Reviews";
import Benefits from "./components/Benefits/Benefits";
import LottieAnimation from "./components/LottieAnimation/LottieAnimation";
import Footer from "./components/Footer/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const handleButtonClick = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <section id="home" className="home">
        <div className="container">
          <div className="text">
            <h1 className="text-1">
              Soluții digitale premium pentru afaceri moderne
            </h1>
            <p className="p-1">
              Creăm soluții digitale personalizate și profesionale, menite să
              îmbunătățească performanța afacerii tale.
            </p>
            <div className="btns" onClick={() => handleButtonClick("#prices")}>
              <Btn variant="outlined">Vezi ofertele noastre</Btn>
              {/* <Btn
                variant="outlined"
                onClick={() => handleButtonClick("#contact")}
              >
                Contact
              </Btn> */}
            </div>
          </div>
          <HomeBlob />
        </div>
      </section>
      <section id="prices" className="prices">
        <h2 className="text-2">Pachete promoționale</h2>
        <Pricing />
      </section>
      <section id="reviews" className="reviews">
        <h2 className="text-2">Ce spun clienții noștri?</h2>
        {/* <p className="p-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
          numquam odio! At iusto, placeat sit corrupti nulla maxime eveniet
          iure.
        </p> */}
        <Reviews />
        <div className="characteristics">
          <div>
            <i className="fa-solid fa-list-check"></i>
            <p>Revizuirile sunt gratuite și nelimitate.</p>
          </div>
          <div>
            <i className="fa-regular fa-handshake"></i>
            <p>Mentenanța este inclusă în preț.</p>
          </div>
          <div>
            <i className="fa-solid fa-code"></i>
            <p>Website-urile sunt codate de la 0.</p>
          </div>
          <div>
            <i className="fa-solid fa-bolt"></i>
            <p>Lucrările sunt livrate în 24/48h.</p>
          </div>
        </div>
        <Link to="tel:+40728739818">
          <Btn variant="outlined">Contactează-ne</Btn>
        </Link>
      </section>
      <section id="benefits" className="benefits">
        <h2 className="text-2">Cum te putem ajuta?</h2>
        <Benefits />
      </section>
      <section id="services" className="services">
        <h2 className="text-2">Toate serviciile noastre</h2>
        <div className="services">
          <div className="service">
            <i className="fa-solid fa-laptop-code"></i>
            <span>Website de prezentare</span>
          </div>
          <div className="service">
            <i className="fa-solid fa-cart-arrow-down"></i>
            <span>E-commerce modern</span>
          </div>
          <div className="service">
            <i className="fa-solid fa-pen-nib"></i>
            <span>Cărți de vizită, logo-uri</span>
          </div>
          <div className="service">
            <i className="fa-solid fa-brain"></i>
            <span>Soluții inteligență artificială</span>
          </div>
          <div className="service">
            <i className="fa-solid fa-heart"></i>
            <span>Postări social media</span>
          </div>
          <div className="service">
            <i className="fa-solid fa-feather"></i>
            <span>Content Writing</span>
          </div>
          <div className="service">
            <i className="fa-solid fa-blog"></i>
            <span>Dezvoltare bloguri</span>
          </div>
          <p className="p-1">
            Pentru a solicita o ofertă de preț pentru serviciile noastre, vă
            rugăm să ne contactați utilizând butonul de mai jos.
          </p>
          <div className="btns">
            <Link to="tel:+40728739818">
              <Btn variant="outlined">Contactează-ne</Btn>
            </Link>
          </div>
        </div>
      </section>
      <section id="portfolio" className="portfolio">
        <h2 className="text-2">Iată câteva lucrări</h2>
        <LottieAnimation />
        <Link to="tel:+40728739818">
          <Btn variant="outlined">Contactează-ne</Btn>
        </Link>
      </section>
      <section id="contact" className="contact">
        <h2 className="text-2">Dorești să colaborăm?</h2>
        <Link to="https://wa.me/40728739818?text=Salut!%20Aș%20vrea%20să%20colaborăm.">
          <Btn>Contactează-ne pe Whatsapp</Btn>
        </Link>
        <Link to="https://www.instagram.com/yrd_agency/">
          <Btn variant="outlined">Contactează-ne pe Instagram</Btn>
        </Link>
        <Link to="tel:+40728739818">
          <Btn variant="outlined">Contactează-ne telefonic</Btn>
        </Link>
        <img
          className="contact-img"
          src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1721943583/contact_ikqxhs"
          alt="contact"
        />
      </section>
      <Footer />
    </div>
  );
}

export default App;
