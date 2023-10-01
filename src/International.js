import React, { useRef, useState } from 'react';
import './International.css';

const International = () => {
  const carouselRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scrollLeft2 = () => {
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
  };

  const scrollRight2 = () => {
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const imageList = [
    { id: 1, src: './Pictures/seol.jpeg', alt: 'Korea,Seoul', name: 'Seoul' },
    { id: 2, src: './Pictures/bangkok.jpeg', alt: 'Bangkok', name: 'Bangkok' },
    { id: 3, src: './Pictures/paris2.jpg', alt: 'Paris', name: 'Paris' },
    { id: 4, src: './Pictures/tokyo.jpeg', alt: 'Tokyo', name: 'Tokyo' },
    // Add more image objects as needed
  ];

  return (
    <div className="carousel2" ref={carouselRef}>
      <div className="carousel-slide2">
        {imageList.map((image, index) => (
          <div
            className={`slide2 ${hoveredIndex === index ? 'hovered' : ''}`}
            key={image.id}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={image.src} alt={image.alt} />
            <div className="image-name2">{image.name}</div>
          </div>
        ))}
      </div>
      <button className="carousel-button left2" onClick={scrollLeft2}>
        &lt;
      </button>
      <button className="carousel-button right2" onClick={scrollRight2}>
        &gt;
      </button>
    </div>
  );
};

export default International;
