import React from 'react'
import { useState } from 'react'

const Carousel = ({images, altText, customClass}) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () =>{
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex -1 + images.length) % images.length)
  }
  return (
     <div className={`carousel ${customClass}` }>
      <div className="carousel-image">
        <img src={images[currentIndex]} alt={altText[currentIndex]} />
      </div>
      <button className="carousel-btn-prev" onClick={prevImage}>&#60;</button>
      <button className="carousel-btn-next" onClick={nextImage}>&#62;</button>
    </div>
  );
};
export default Carousel;