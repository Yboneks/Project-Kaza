import { useState } from "react";


export function Carousel({ pictures = [] }) {
  // État pour suivre l'index de l'image affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPictures = pictures.length;

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPictures - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPictures - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">

      <img
        src={pictures[currentIndex]}
        alt={`slide ${currentIndex + 1}`}
        className="carousel-image"
      />

      {totalPictures > 1 && (
        <>
          <button className="carousel-btn prev" onClick={goToPrev}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="carousel-btn next" onClick={goToNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </>
      )}

      <p className="carousel-counter">
        {currentIndex + 1}/{totalPictures}
      </p>
    </div>
  );
}