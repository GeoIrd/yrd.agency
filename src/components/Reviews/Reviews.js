import React from "react";
import Slider from "react-slick";
import "./Reviews.css";

const reviewsData = [
  {
    id: 1,
    image:
      "https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/il0y3p6nzm2rexlvgjgy/make-ai-spokesperson-video-with-real-human-avatar-for-you.png",
    businessName: "Andrei Ionescu",
    description:
      "Colaborarea a fost excelentă. Website-ul arată superb și funcționează perfect. Echipa a fost promptă și deschisă la feedback. Recomand cu căldură!",
    stars: 4.5,
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1320811419/photo/head-shot-portrait-of-confident-successful-smiling-indian-businesswoman.jpg?s=612x612&w=0&k=20&c=bCUTB8vd8MnzZFIq-x645-SmLNk2sQzOvOvWCPGDfZ4=",
    businessName: "Maria Popa",
    description:
      "Agenția a creat un branding excelent pentru afacerea mea. Logo-ul și materialele de marketing sunt de calitate. Comunicare excelentă și rezultate peste așteptări.",
    stars: 5,
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/young-beautiful-girl-smiling-holding-apple-picnic-park_176420-5584.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712534400&semt=ais",
    businessName: "Ioana Vasile",
    description:
      "Serviciile sunt excelente. Website-ul este estetic și user-friendly. Echipa a fost atentă și promptă. Recomand cu căldură pentru un site profesional.",
    stars: 5,
  },
  {
    id: 4,
    image:
      "https://www.artsandheritage.org.uk/wp-content/uploads/2021/11/Profile-Pic-1.jpeg-2-scaled.jpg",
    businessName: "George Enache",
    description:
      "Agenția a creat un logo fantastic pentru afacerea mea. Este modern și memorabil. Echipa a fost răbdătoare și atentă la cerințele mele. Sunt foarte mulțumit!",
    stars: 5,
  },
  // Aggiungi alte recensioni cum necesar
];

function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderStars = (stars) => {
    const fullStars = Math.floor(stars);
    const halfStar = stars % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <i key={`full-${i}`} className="fa-solid fa-star"></i>
        ))}
        {halfStar && <i className="fa-solid fa-star-half-stroke"></i>}
        {[...Array(emptyStars)].map((_, i) => (
          <i key={`empty-${i}`} className="fa-regular fa-star"></i>
        ))}
      </>
    );
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {reviewsData.map((review) => (
          <div key={review.id} className="review-card">
            <img
              src={review.image}
              alt={review.businessName}
              className="review-image"
            />
            <h3>{review.businessName}</h3>
            <p>{review.description}</p>
            <div className="stars">{renderStars(review.stars)}</div>
          </div>
        ))}
      </Slider>

      <img
        className="blob blob2"
        src="https://res.cloudinary.com/dsqwnuyiw/image/upload/v1721943584/blob2_onn4jb.webp"
        alt="blob"
      />
    </div>
  );
}

export default Reviews;
