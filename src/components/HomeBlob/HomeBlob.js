import React from "react";

import "./HomeBlob.css";

const HomeBlob = () => {
  return (
    <div className="homeBlob">
      <div className="blobContainer">
        <img
          className="blob"
          src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1721943583/home-blob_pnpp0v.webp"
          alt="home blob"
        />
        <div className="circles">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlob;
