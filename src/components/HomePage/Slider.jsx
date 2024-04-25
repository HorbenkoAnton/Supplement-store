import React, { useState } from 'react';
import './Slider.css';

const slidesData = [
  {
    id: 1,
    text: 'Sale on Supplements!',
    imageUrl: process.env.PUBLIC_URL + '/slide1.png',
  },
  {
    id: 2,
    text: '50% Off on Protein Powders!',
    imageUrl: process.env.PUBLIC_URL + '/slide2.png',
  },
  //add more slides
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev + slidesData.length - 1) % slidesData.length);
  };

  const handleBuy = () => {
    alert(`Buying product from Slide ${slidesData[currentSlide].id}`);
  };

  return (
    <div className="slider">
      <button onClick={prevSlide} className="arrow left">&#10094;</button>
      <div className="slide">
        <img src={slidesData[currentSlide].imageUrl} alt={`Slide ${slidesData[currentSlide].id}`} />
        <div className="slide-content">
          <p>{slidesData[currentSlide].text}</p>
          <button className="buy-btn" onClick={handleBuy}>Buy</button>
        </div>
      </div>
      <button onClick={nextSlide} className="arrow right">&#10095;</button>
    </div>
  );
}

export default Slider;
